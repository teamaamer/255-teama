'use client';

import React, { useEffect, useRef, useState } from 'react';

const FishTankAnimation = ({ topElementId = 'social-media-text', bottomElementId = 'events-text' }) => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState('idle'); // idle, filling, filled, draining
  const [imagesLoaded, setImagesLoaded] = useState(false); // Track if images are loaded
  const ballsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const sectionRef = useRef(null);
  const hasPlayedRef = useRef(false); // Track if animation has played

  // Social media icon URLs (local)
  const socialMediaIcons = [
    '/social-icons/facebook.png', // Facebook
    '/social-icons/instagram.png', // Instagram
    '/social-icons/youtube.png', // YouTube
    '/social-icons/x.png', // X
    '/social-icons/tiktok.png', // TikTok
    '/social-icons/linkedin.png', // LinkedIn
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const section = sectionRef.current;
    
    // Enable high-quality image rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Eager load all social media icons
    const imageCache = {};
    const loadPromises = socialMediaIcons.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          imageCache[url] = img;
          resolve();
        };
        img.onerror = reject;
        img.src = url;
      });
    });

    // Wait for all images to load before enabling animation
    Promise.all(loadPromises).then(() => {
      console.log('All social media icons loaded');
      setImagesLoaded(true);
    }).catch((error) => {
      console.error('Error loading social media icons:', error);
    });

    // Set canvas size to match viewport with high DPI support
    let canvasDisplayWidth = 0;
    let canvasDisplayHeight = 0;
    
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Store display dimensions for boundary detection
      canvasDisplayWidth = rect.width;
      canvasDisplayHeight = rect.height;
      
      // Set display size (css pixels)
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      // Set actual size in memory (scaled for retina)
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Scale all drawing operations
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current && imagesLoaded) {
            // Only trigger animation once and after images are loaded
            hasPlayedRef.current = true;
            ballsRef.current = [];
            setIsVisible(true);
            setAnimationState('filling');
            startFilling();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    // Ball class
    class Ball {
      constructor(x, y, radius, iconUrl) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.iconUrl = iconUrl;
        this.image = imageCache[iconUrl]; // Use eager-loaded image
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = Math.random() * 2 + 1;
        this.gravity = 0.3;
        this.bounce = 0.7;
        this.friction = 0.99;
        this.isDraining = false;
      }

      update(stackHeight, isDraining = false) {
        if (isDraining) {
          this.isDraining = true;
          this.vy += this.gravity * 2; // Faster fall when draining
        } else {
          this.vy += this.gravity;
        }
        
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls using display width (not scaled canvas width)
        if (this.x + this.radius > canvasDisplayWidth || this.x - this.radius < 0) {
          this.vx *= -this.bounce;
          this.x = Math.max(this.radius, Math.min(canvasDisplayWidth - this.radius, this.x));
        }

        // Bounce off floor (SOCIAL MEDIA text level) only if not draining
        if (!isDraining && this.y + this.radius > stackHeight) {
          this.y = stackHeight - this.radius;
          this.vy *= -this.bounce;
          this.vx *= this.friction;
        }

        // Apply friction
        this.vx *= this.friction;
      }

      draw(ctx) {
        ctx.save();
        
        // Liquid glass effect - frosted glass background with gradient
        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add liquid glass border/rim effect
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add inner glow/highlight for glass effect
        const highlightGradient = ctx.createRadialGradient(
          this.x - this.radius * 0.4,
          this.y - this.radius * 0.4,
          0,
          this.x - this.radius * 0.4,
          this.y - this.radius * 0.4,
          this.radius * 0.6
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = highlightGradient;
        ctx.beginPath();
        ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw icon inside the liquid glass ball
        if (this.image && this.image.complete) {
          const iconSize = this.radius * 1.4;
          
          // Only round YouTube and TikTok icons
          const isYouTubeOrTikTok = this.iconUrl.includes('youtube') || this.iconUrl.includes('tiktok');
          
          if (isYouTubeOrTikTok) {
            // Clip to circle for YouTube and TikTok
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
            ctx.clip();
          }
          
          ctx.drawImage(
            this.image,
            this.x - iconSize / 2,
            this.y - iconSize / 2,
            iconSize,
            iconSize
          );
        }
        
        ctx.restore();
      }

      isOffScreen() {
        return this.y - this.radius > canvas.height + 100;
      }
    }

    // Start filling animation
    const startFilling = () => {
      const bottomElement = document.getElementById(bottomElementId);
      let stackFloor = canvas.height;
      
      if (bottomElement) {
        const rect = bottomElement.getBoundingClientRect();
        stackFloor = rect.bottom + 50; // Stack below EVENTS text with offset
      }

      // Create balls gradually
      let ballCount = 0;
      const maxBalls = 40;
      const fillInterval = setInterval(() => {
        if (ballCount >= maxBalls) {
          clearInterval(fillInterval);
          setTimeout(() => {
            setAnimationState('filled');
            setTimeout(() => {
              setAnimationState('draining');
              setTimeout(() => {
                setAnimationState('idle');
                ballsRef.current = [];
              }, 3000);
            }, 2000);
          }, 1000);
          return;
        }

        // Add new ball from top of screen
        // Smaller balls on mobile (width < 768px)
        const isMobile = window.innerWidth < 768;
        const baseRadius = isMobile ? 12 : 20;
        const randomRadius = isMobile ? 8 : 15;
        
        const ball = new Ball(
          Math.random() * canvasDisplayWidth,
          -50, // Start above the screen
          baseRadius + Math.random() * randomRadius,
          socialMediaIcons[Math.floor(Math.random() * socialMediaIcons.length)]
        );
        ballsRef.current.push(ball);
        ballCount++;
      }, 50);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bottomElement = document.getElementById(bottomElementId);
      let stackHeight = canvas.height;
      
      if (bottomElement) {
        const rect = bottomElement.getBoundingClientRect();
        stackHeight = rect.bottom + 50; // Stack below EVENTS text with offset
      }

      const isDraining = animationState === 'draining';

      // Draw trapdoor when draining (at EVENTS text level)
      if (isDraining) {
        ctx.save();
        ctx.fillStyle = 'rgba(255, 54, 0, 0.3)';
        ctx.fillRect(canvas.width * 0.3, stackHeight - 10, canvas.width * 0.4, 20);
        ctx.restore();
      }

      // Update and draw balls
      ballsRef.current = ballsRef.current.filter(ball => {
        ball.update(stackHeight, isDraining);
        
        // Check collision with other balls
        ballsRef.current.forEach(otherBall => {
          if (ball !== otherBall) {
            const dx = otherBall.x - ball.x;
            const dy = otherBall.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = ball.radius + otherBall.radius;

            if (distance < minDistance) {
              const angle = Math.atan2(dy, dx);
              const targetX = ball.x + Math.cos(angle) * minDistance;
              const targetY = ball.y + Math.sin(angle) * minDistance;
              const ax = (targetX - otherBall.x) * 0.05;
              const ay = (targetY - otherBall.y) * 0.05;

              ball.vx -= ax;
              ball.vy -= ay;
              otherBall.vx += ax;
              otherBall.vy += ay;
            }
          }
        });

        ball.draw(ctx);
        return !ball.isOffScreen();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (observer && section) observer.unobserve(section);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible, animationState, topElementId, bottomElementId, imagesLoaded]);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      />
    </div>
  );
};

export default FishTankAnimation;
