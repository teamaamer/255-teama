'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollVideo() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	const bgColor = '#000000';

	const section1_5Opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.6], [0, 1, 1, 0]);
	const section2Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.95, 1], [0, 1, 1, 1]);
	const pillToggle = useTransform(scrollYProgress, [0.75, 0.90], [0, 90]);
	const pillBgColor = useTransform(
		scrollYProgress,
		[0.75, 0.85],
		['#808080', '#E8541E']
	);


	return (
		<div
			ref={containerRef}
			style={{
				height: '500vh',
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

			</motion.div>
		</div>
	);
}
