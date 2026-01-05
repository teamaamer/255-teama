'use client';

import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 1200;
const MAX_CACHE_SIZE = 120;
const PRELOAD_RANGE = 40;
const INITIAL_PRELOAD = 50;

export default function ScrollVideo() {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);
	const imagesRef = useRef({});
	const loadingRef = useRef(new Set());
	const rafRef = useRef(null);
	const currentFrameRef = useRef(1);
	const [isInView, setIsInView] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const canvasSizeRef = useRef({ width: 1920, height: 1080 });

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const updateCanvasSize = () => {
			const dpr = window.devicePixelRatio || 1;
			const isMobile = window.innerWidth < 768;
			canvasSizeRef.current = {
				width: isMobile ? 1280 : 1920,
				height: isMobile ? 720 : 1080,
			};
		};

		updateCanvasSize();
		window.addEventListener('resize', updateCanvasSize);

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ rootMargin: '200px' }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			observer.disconnect();
			window.removeEventListener('resize', updateCanvasSize);
		};
	}, []);

	const cleanupCache = useCallback(() => {
		const cachedIndices = Object.keys(imagesRef.current).map(Number);
		if (cachedIndices.length > MAX_CACHE_SIZE) {
			const currentFrame = currentFrameRef.current;
			const toRemove = cachedIndices
				.filter(idx => Math.abs(idx - currentFrame) > PRELOAD_RANGE * 2)
				.sort((a, b) => Math.abs(b - currentFrame) - Math.abs(a - currentFrame))
				.slice(0, cachedIndices.length - MAX_CACHE_SIZE);
			
			toRemove.forEach(idx => {
				delete imagesRef.current[idx];
			});
		}
	}, []);

	const loadImage = useCallback((index) => {
		if (index < 1 || index > TOTAL_FRAMES) return;
		if (imagesRef.current[index] || loadingRef.current.has(index)) {
			return Promise.resolve(imagesRef.current[index]);
		}

		loadingRef.current.add(index);
		
		return new Promise((resolve) => {
			const img = new Image();
			img.src = `/images/${index}.webp`;
			img.onload = () => {
				imagesRef.current[index] = img;
				loadingRef.current.delete(index);
				cleanupCache();
				resolve(img);
			};
			img.onerror = () => {
				loadingRef.current.delete(index);
				resolve(null);
			};
		});
	}, [cleanupCache]);

	useEffect(() => {
		if (!isInView) return;

		const preloadInitialFrames = async () => {
			const promises = [];
			for (let i = 1; i <= INITIAL_PRELOAD; i++) {
				promises.push(loadImage(i));
			}
			await Promise.all(promises);
			setIsLoading(false);
		};

		preloadInitialFrames();
	}, [isInView, loadImage]);

	const render = useCallback((index) => {
		if (!isInView) return;

		const roundedIndex = Math.round(index);
		currentFrameRef.current = roundedIndex;
		
		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current);
		}

		rafRef.current = requestAnimationFrame(() => {
			const canvas = canvasRef.current;
			const ctx = canvas?.getContext('2d', { alpha: false });
			
			if (ctx && canvas && imagesRef.current[roundedIndex]) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(imagesRef.current[roundedIndex], 0, 0, canvas.width, canvas.height);
			}

			for (let i = Math.max(1, roundedIndex - PRELOAD_RANGE); i <= Math.min(TOTAL_FRAMES, roundedIndex + PRELOAD_RANGE); i++) {
				if (!imagesRef.current[i] && !loadingRef.current.has(i)) {
					loadImage(i);
				}
			}
		});
	}, [isInView, loadImage]);

	const currentIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

	useMotionValueEvent(currentIndex, 'change', (latest) => {
		render(latest);
	});

	useEffect(() => {
		if (isInView && !isLoading) {
			render(1);
		}
	}, [render, isInView, isLoading]);

	useEffect(() => {
		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			style={{
				height: '1200vh',
				position: 'relative',
				width: '100vw',
			}}
		>
			<div 
				style={{ 
					position: 'sticky',
					top: 0,
					height: '100vh',
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'black',
				}}
			>
				{isLoading && (
					<div style={{
						position: 'absolute',
						color: 'white',
						fontSize: '1.5rem',
						fontWeight: 'bold',
						zIndex: 10,
					}}>
						Loading...
					</div>
				)}
				<canvas 
					width={canvasSizeRef.current.width} 
					height={canvasSizeRef.current.height} 
					ref={canvasRef}
					style={{
						width: '100%',
						maxWidth: '100vw',
						height: '100vh',
						objectFit: 'contain',
						opacity: isLoading ? 0.3 : 1,
						transition: 'opacity 0.3s ease-in-out',
					}}
				/>
			</div>
		</div>
	);
}
