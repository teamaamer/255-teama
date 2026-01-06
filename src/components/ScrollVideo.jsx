'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

const SECTION1_START = 1;
const SECTION1_END = 97;
const SECTION3_START = 212;
const SECTION3_END = 1299;
const MAX_CACHE_SIZE = Infinity; // Keep all images in memory
const PRELOAD_RANGE = 100;
const INITIAL_PRELOAD = 100;

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

	const bgColor = useTransform(
		scrollYProgress,
		[0, 0.14, 0.15, 0.42, 0.5, 0.65, 0.8, 0.95],
		['#E8541E', '#E8541E', '#000000', '#000000', '#E8E8E8', '#E8E8E8', '#E8E8E8', '#E8E8E8']
	);

	const section1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.14], [1, 1, 0]);
	const section1_5Opacity = useTransform(scrollYProgress, [0.16, 0.18, 0.26, 0.28], [0, 1, 1, 0]);
	const section2Opacity = useTransform(scrollYProgress, [0.28, 0.30, 0.37, 0.40], [0, 1, 1, 0]);
	const pillToggle = useTransform(scrollYProgress, [0.30, 0.35], [0, 90]);
	const pillBgColor = useTransform(
		scrollYProgress,
		[0.30, 0.35],
		['#808080', '#E8541E']
	);
	const section1ImageFrame = useTransform(scrollYProgress, [0, 0.15], [1, 97]);
	const section3ImageFrame = useTransform(scrollYProgress, [0.40, 1], [212, 1299]);

	const underlineWidth = useTransform(scrollYProgress, [0.015, 0.03], [0, 100]);
	const underlineOpacity = useTransform(scrollYProgress, [0.015, 0.03, 0.045, 0.05], [0, 1, 1, 0]);
	
	const arc2Progress = useTransform(scrollYProgress, [0.045, 0.06], [0, 1]);
	const arc1Progress = useTransform(scrollYProgress, [0.05, 0.065], [0, 1]);
	
	const curveRotate = useTransform(scrollYProgress, [0, 0.15], [0, 360]);
	const topLeftX = useTransform(scrollYProgress, [0, 0.15], [0, -200]);
	const bottomRightX = useTransform(scrollYProgress, [0, 0.15], [0, 200]);
	const ellipseBottomScale = useTransform(scrollYProgress, [0.012, 0.095], [0, 1]);

	const loadImage = useCallback((index) => {
		if (index < SECTION1_START || (index > SECTION1_END && index < SECTION3_START) || index > SECTION3_END) return;
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
	}, []);

	const cleanupCache = useCallback(() => {
		// Disabled: Keep all images in memory for smooth bidirectional scrolling
		// No cleanup performed - images stay cached once loaded
	}, []);

	useEffect(() => {
		const preloadAllImages = async () => {
			// Load Section 1 and Section 3 in parallel
			const section1Promises = [];
			for (let i = SECTION1_START; i <= SECTION1_END; i++) {
				section1Promises.push(loadImage(i));
			}
			
			// Start Section 3 loading immediately (in parallel)
			const loadSection3Aggressively = async () => {
				const BATCH_SIZE = 20;
				const totalFrames = SECTION3_END - SECTION3_START + 1;
				
				for (let batch = 0; batch < Math.ceil(totalFrames / BATCH_SIZE); batch++) {
					const batchPromises = [];
					const start = SECTION3_START + (batch * BATCH_SIZE);
					const end = Math.min(start + BATCH_SIZE - 1, SECTION3_END);
					
					for (let i = start; i <= end; i++) {
						if (!imagesRef.current[i] && !loadingRef.current.has(i)) {
							batchPromises.push(loadImage(i));
						}
					}
					
					await Promise.all(batchPromises);
					
					if (batch % 5 === 0) {
						await new Promise(resolve => setTimeout(resolve, 10));
					}
				}
			};
			
			// Start both loading processes in parallel
			loadSection3Aggressively();
			
			// Wait for Section 1 to complete before hiding loading indicator
			await Promise.all(section1Promises);
			setIsLoading(false);
		};

		preloadAllImages();
	}, [loadImage]);
	
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

			const minFrame = Math.max(SECTION1_START, roundedIndex - PRELOAD_RANGE);
			const maxFrame = Math.min(SECTION3_END, roundedIndex + PRELOAD_RANGE);
			
			for (let i = minFrame; i <= maxFrame; i++) {
				if (!imagesRef.current[i] && !loadingRef.current.has(i)) {
					if ((i >= SECTION1_START && i <= SECTION1_END) || (i >= SECTION3_START && i <= SECTION3_END)) {
						loadImage(i);
					}
				}
			}
		});
	}, [isInView, loadImage]);

	const section1Frame = useTransform(scrollYProgress, [0, 0.15], [SECTION1_START, SECTION1_END]);
	const section3Frame = useTransform(scrollYProgress, [0.40, 1], [SECTION3_START, SECTION3_END]);

	useMotionValueEvent(section1Frame, 'change', (latest) => {
		if (scrollYProgress.get() <= 0.15) {
			render(latest);
		}
	});

	useMotionValueEvent(section3Frame, 'change', (latest) => {
		if (scrollYProgress.get() >= 0.40) {
			render(latest);
		}
	});

	useEffect(() => {
		if (isInView && !isLoading) {
			render(SECTION1_START);
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
				height: '1500vh',
				position: 'relative',
				width: '100vw',
			}}
		>
			<motion.div 
				style={{ 
					position: 'sticky',
					top: 0,
					height: '100vh',
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: bgColor,
					overflow: 'hidden',
				}}
			>

				<motion.div
					style={{
						position: 'absolute',
						opacity: section1_5Opacity,
						textAlign: 'center',
						width: '100%',
					}}
				>
					<h1 style={{ 
						fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
						fontWeight: '300', 
						margin: 0,
						letterSpacing: '0.02em',
					}}>
						<span style={{ color: 'white' }}>Meet </span>
						<span style={{ color: '#E8541E' }}>Our</span>
					</h1>
					<h1 style={{ 
						fontSize: 'clamp(3rem, 10vw, 7rem)', 
						fontWeight: 'bold', 
						margin: '10px 0 0 0',
						letterSpacing: '0.02em',
						color: '#E8541E',
					}}>
						new brand
					</h1>
				</motion.div>

				<motion.div
					style={{
						position: 'absolute',
						opacity: section2Opacity,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<motion.div
						style={{
							width: '180px',
							height: '80px',
							borderRadius: '40px',
							backgroundColor: pillBgColor,
							position: 'relative',
							display: 'flex',
							alignItems: 'center',
							paddingLeft: '10px',
						}}
					>
						<motion.div
							style={{
								width: '60px',
								height: '60px',
								borderRadius: '50%',
								backgroundColor: 'white',
								x: pillToggle,
							}}
						/>
					</motion.div>
				</motion.div>

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
				
				<motion.canvas
					ref={canvasRef}
					width={canvasSizeRef.current.width}
					height={canvasSizeRef.current.height}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						maxWidth: '100vw',
						height: '100vh',
						objectFit: 'contain',
						opacity: useTransform(
							scrollYProgress,
							[0, 0.14, 0.15, 0.28, 0.39, 0.40, 1],
							[isLoading ? 0.3 : 1, isLoading ? 0.3 : 1, 0, 0, 0, isLoading ? 0.3 : 1, isLoading ? 0.3 : 1]
						),
						transition: 'opacity 0.3s ease-in-out',
					}}
				/>
			</motion.div>
		</div>
	);
}
