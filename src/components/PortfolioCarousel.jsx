'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    img: "/portfolio/01.webp",
    title: "Grand Nablus Bus CO.",
    link: "grand-nablus-bus-co",
  },
  {
    img: "/portfolio/02.webp",
    title: "Chicken Crush",
    link: "chicken-crush",
  },
  {
    img: "/portfolio/03.webp",
    title: "Hulk Burger",
    link: "hulk-burger",
  },
  {
    img: "/portfolio/04.webp",
    title: "Akko Group",
    link: "akko-group",
  },
  {
    img: "/portfolio/05.webp",
    title: "Mono Pizza",
    link: "mono-pizza",
  },
  {
    img: "/portfolio/06.webp",
    title: "Sherlock Pizza",
    link: "sherlock-pizza",
  },
  {
    img: "/portfolio/07.webp",
    title: "Chikinn",
    link: "chikinn",
  },
  {
    img: "/portfolio/08.webp",
    title: "Ekleel Al-Ward",
    link: "ekleel-al-ward",
  },
  {
    img: "/portfolio/09.webp",
    title: "One Piece",
    link: "one-piece",
  },
  {
    img: "/portfolio/10.webp",
    title: "Fareed Zamano",
    link: "fareed-zamano",
  },
  {
    img: "/portfolio/11.webp",
    title: "Rexos\nRestaurant & Cafe",
    link: "rexos-restaurant-cafe",
  },
  {
    img: "/portfolio/12.webp",
    title: "AbuSair Pastries",
    link: "abusair-pastries",
  },
];

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const dotsContainerRef = useRef(null);
  const isDraggingDots = useRef(false);
  const dotsStartX = useRef(0);
  const dotsScrollLeft = useRef(0);
  const dotsDragDistance = useRef(0);
  const isDraggingCarousel = useRef(false);
  const carouselStartX = useRef(0);
  const carouselDragDistance = useRef(0);

  const getCardPosition = useCallback((position) => {
    const positions = {
      '-2': { x: '-200%', y: '0%', scale: 0.85, rotateY: 0, opacity: 0.7, filter: 'brightness(0.8)', zIndex: 1 },
      '-1': { x: '-100%', y: '0%', scale: 0.92, rotateY: 0, opacity: 0.9, filter: 'brightness(0.9)', zIndex: 2 },
      '0': { x: '0%', y: '0%', scale: 1, rotateY: 0, opacity: 1, filter: 'brightness(1)', zIndex: 10 },
      '1': { x: '100%', y: '0%', scale: 0.92, rotateY: 0, opacity: 0.9, filter: 'brightness(0.9)', zIndex: 2 },
      '2': { x: '200%', y: '0%', scale: 0.85, rotateY: 0, opacity: 0.7, filter: 'brightness(0.8)', zIndex: 1 },
    };
    return positions[position] || { x: position > 0 ? '300%' : '-300%', y: '0%', scale: 0.7, rotateY: 0, opacity: 0, filter: 'brightness(0.7)', zIndex: 0 };
  }, [shouldReduceMotion]);

  const handleNext = useCallback(() => {
    if (isAnimating || portfolioItems.length === 0) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setTimeout(() => setIsAnimating(false), shouldReduceMotion ? 200 : 400);
  }, [isAnimating, shouldReduceMotion]);

  const handlePrev = useCallback(() => {
    if (isAnimating || portfolioItems.length === 0) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setTimeout(() => setIsAnimating(false), shouldReduceMotion ? 200 : 400);
  }, [isAnimating, shouldReduceMotion]);

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentIndex || portfolioItems.length === 0) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), shouldReduceMotion ? 200 : 400);
  }, [isAnimating, currentIndex, shouldReduceMotion]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 3000);
  }, [handleNext, isPaused]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (portfolioItems.length > 1) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
        setIsPaused(true);
      } else if (e.key === 'ArrowRight') {
        handleNext();
        setIsPaused(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleCarouselMouseDown = (e) => {
    isDraggingCarousel.current = true;
    carouselStartX.current = e.clientX;
    carouselDragDistance.current = 0;
    setIsPaused(true);
  };

  const handleCarouselMouseMove = (e) => {
    if (!isDraggingCarousel.current) return;
    e.preventDefault();
    carouselDragDistance.current = e.clientX - carouselStartX.current;
  };

  const handleCarouselMouseUp = () => {
    if (!isDraggingCarousel.current) return;
    isDraggingCarousel.current = false;
    
    const dragThreshold = 50;
    if (Math.abs(carouselDragDistance.current) > dragThreshold) {
      if (carouselDragDistance.current < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    
    carouselDragDistance.current = 0;
  };

  const handleCarouselMouseLeave = () => {
    if (isDraggingCarousel.current) {
      isDraggingCarousel.current = false;
      carouselDragDistance.current = 0;
    }
  };

  const handleDotsMouseDown = (e) => {
    if (!dotsContainerRef.current) return;
    isDraggingDots.current = true;
    dotsDragDistance.current = 0;
    dotsStartX.current = e.pageX - dotsContainerRef.current.offsetLeft;
    dotsScrollLeft.current = dotsContainerRef.current.scrollLeft;
    dotsContainerRef.current.style.cursor = 'grabbing';
    dotsContainerRef.current.style.userSelect = 'none';
  };

  const handleDotsMouseMove = (e) => {
    if (!isDraggingDots.current || !dotsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - dotsContainerRef.current.offsetLeft;
    const walk = (x - dotsStartX.current) * 2;
    dotsDragDistance.current = Math.abs(walk);
    dotsContainerRef.current.scrollLeft = dotsScrollLeft.current - walk;
    
    // Calculate which slide should be active based on scroll position
    const containerWidth = dotsContainerRef.current.scrollWidth - dotsContainerRef.current.clientWidth;
    const scrollPercentage = dotsContainerRef.current.scrollLeft / containerWidth;
    const targetIndex = Math.round(scrollPercentage * (portfolioItems.length - 1));
    
    // Update carousel if we've moved to a different slide
    if (targetIndex !== currentIndex && targetIndex >= 0 && targetIndex < portfolioItems.length) {
      setDirection(targetIndex > currentIndex ? 1 : -1);
      setCurrentIndex(targetIndex);
    }
  };

  const handleDotsMouseUp = () => {
    if (!dotsContainerRef.current) return;
    setTimeout(() => {
      isDraggingDots.current = false;
      dotsDragDistance.current = 0;
    }, 0);
    dotsContainerRef.current.style.cursor = 'grab';
    dotsContainerRef.current.style.userSelect = 'auto';
  };

  const handleDotsMouseLeave = () => {
    if (isDraggingDots.current && dotsContainerRef.current) {
      isDraggingDots.current = false;
      dotsDragDistance.current = 0;
      dotsContainerRef.current.style.cursor = 'grab';
      dotsContainerRef.current.style.userSelect = 'auto';
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + portfolioItems.length) % portfolioItems.length;
      cards.push({
        ...portfolioItems[index],
        position: i,
        key: index,
      });
    }
    return cards;
  };

  if (portfolioItems.length === 0) {
    return (
      <div className="relative w-full overflow-hidden py-20">
        <p className="text-center text-white/70 text-lg">No portfolio items available</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        handleCarouselMouseLeave();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div 
        className="relative h-[480px] md:h-[550px] lg:h-[600px] py-8 md:py-12 cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '2500px' }}
        onMouseDown={handleCarouselMouseDown}
        onMouseMove={handleCarouselMouseMove}
        onMouseUp={handleCarouselMouseUp}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {getVisibleCards().map((item) => {
            const position = getCardPosition(item.position.toString());
            const isCenter = item.position === 0;
            
            return (
              <motion.div
                key={item.key}
                className="absolute"
                initial={false}
                animate={{
                  x: position.x,
                  y: position.y,
                  scale: position.scale,
                  rotateY: position.rotateY,
                  opacity: position.opacity,
                  filter: position.filter,
                  zIndex: position.zIndex,
                }}
                transition={shouldReduceMotion ? {
                  duration: 0.2,
                  ease: "easeInOut"
                } : {
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  mass: 0.6,
                  velocity: direction * 2,
                }}
                style={{
                  width: '280px',
                  maxWidth: '70vw',
                }}
              >
                  <div
                    onClick={() => {
                      if (isCenter) {
                        window.location.href = `/portfolio/${item.link}`;
                      } else {
                        goToSlide((currentIndex + item.position + portfolioItems.length) % portfolioItems.length);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (isCenter) {
                          window.location.href = `/portfolio/${item.link}`;
                        } else {
                          goToSlide((currentIndex + item.position + portfolioItems.length) % portfolioItems.length);
                        }
                      }
                    }}
                    className={`block group relative ${isCenter ? 'cursor-pointer' : 'cursor-pointer'}`}
                    tabIndex={isCenter ? 0 : -1}
                    role="button"
                    aria-label={isCenter ? `View ${item.title} project` : `Go to ${item.title}`}
                  >
                    <motion.div 
                      className={`relative overflow-hidden rounded-3xl bg-white ${
                        isCenter 
                          ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_-12px_rgba(0,0,0,0.5)]' 
                          : 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]'
                      }`}
                      whileHover={isCenter && !shouldReduceMotion ? { scale: 1.03, rotate: 1 } : {}}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="relative w-full h-[380px] md:h-[450px] lg:h-[500px]">
                        <motion.div
                          initial={{ scale: 1 }}
                          whileHover={isCenter && !shouldReduceMotion ? { scale: 1.08 } : {}}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="w-full h-full"
                        >
                          <Image
                            src={item.img}
                            alt={`${item.title} portfolio project`}
                            fill
                            loading="lazy"
                            quality={80}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="
                            className="object-contain"
                            sizes={isCenter ? "(max-width: 768px) 75vw, 300px" : "(max-width: 768px) 55vw, 260px"}
                          />
                        </motion.div>
                        {isCenter && (
                          <>
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            
                            {/* Animated Border Glow */}
                            <motion.div 
                              className="absolute inset-0"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <div className="absolute inset-0 rounded-3xl border-2 border-primary/50 animate-pulse" />
                            </motion.div>
                          </>
                        )}
                      </div>
                      
                      {isCenter && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white"
                          initial={{ y: '100%' }}
                          whileHover={{ y: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <div className="flex justify-between items-center gap-4">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.title}</h3>
                            <motion.div
                              whileHover={{ x: 8, scale: 1.1 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                              <ArrowRightCircle size={28} className="flex-shrink-0" />
                            </motion.div>
                          </div>
                          <p className="text-sm md:text-base text-white/80 mt-2">View Project</p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  {isCenter && (
                    <motion.div 
                      className="mt-6 text-center w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg transition-colors duration-300 whitespace-pre-line">
                        {item.title}
                      </h3>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
        </div>
        
        {/* Navigation Buttons */}
        {portfolioItems.length > 1 && (
          <>
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => {
                  handlePrev();
                  setIsPaused(true);
                }}
                disabled={isAnimating}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-x-1 flex items-center justify-center backdrop-blur-sm border-2 border-white/20 active:scale-95"
                aria-label="Previous portfolio item"
              >
                <ChevronLeft size={24} />
              </button>
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => {
                  handleNext();
                  setIsPaused(true);
                }}
                disabled={isAnimating}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:translate-x-1 flex items-center justify-center backdrop-blur-sm border-2 border-white/20 active:scale-95"
                aria-label="Next portfolio item"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </>
        )}
      </div>

      {/* Indicators */}
      {portfolioItems.length > 1 && (
        <motion.div 
          className="mt-10 px-4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div 
            ref={dotsContainerRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-4 justify-start md:justify-center cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleDotsMouseDown}
            onMouseMove={handleDotsMouseMove}
            onMouseUp={handleDotsMouseUp}
            onMouseLeave={handleDotsMouseLeave}
          >
            {portfolioItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={(e) => {
                  if (dotsDragDistance.current > 5) {
                    e.preventDefault();
                    return;
                  }
                  goToSlide(index);
                  setIsPaused(true);
                }}
                className={`h-2 rounded-full transition-all duration-500 flex-shrink-0 ${
                  index === currentIndex
                    ? 'w-8 bg-white shadow-lg'
                    : 'w-2 bg-white/50 hover:bg-white/80 hover:w-4'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to portfolio item ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioCarousel;
