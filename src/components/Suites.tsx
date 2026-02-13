import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { ROOMS } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';
import {
  BedDouble,
  Bath,
  Waves,
  Trees,
  Tv,
  ShieldCheck,
  Armchair,
  ShowerHead,
  Wine,
  Briefcase,
  Archive,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const getIconComponent = (feature: string) => {
  const text = feature.toLowerCase();
  if (text.includes('bed') || text.includes('convertible')) return BedDouble;
  if (text.includes('bath') || text.includes('toilet') || text.includes('tub')) return Bath;
  if (text.includes('shower')) return ShowerHead;
  if (text.includes('pool') || text.includes('ocean')) return Waves;
  if (text.includes('garden') || text.includes('view') || text.includes('access') || text.includes('terrace')) return Trees;
  if (text.includes('tv') || text.includes('entertainment')) return Tv;
  if (text.includes('safe') || text.includes('security')) return ShieldCheck;
  if (text.includes('lounge') || text.includes('sofa')) return Armchair;
  if (text.includes('bar') || text.includes('kitchen')) return Wine;
  if (text.includes('desk') || text.includes('work')) return Briefcase;
  if (text.includes('closet') || text.includes('wardrobe')) return Archive;
  return Star;
};

const Suites: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState(ROOMS[0].id);
  const activeRoom = ROOMS.find(r => r.id === activeRoomId) || ROOMS[0];
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsWrapRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Refs for scroll handling
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rightArrowRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 10);
      // Allow a small buffer (5px) for calculation errors
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !headerRef.current || !tabsWrapRef.current || !contentRef.current) return;

      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo(
        tabsWrapRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tabsWrapRef.current,
            start: 'top 75%'
          }
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );

      if (!visualRef.current) return;
      gsap.to(visualRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: visualRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, visualRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!indicatorRef.current || !tabsRef.current) return;
    const index = ROOMS.findIndex(room => room.id === activeRoomId);
    const target = tabRefs.current[index];
    if (!target) return;

    const tabsRect = tabsRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offsetLeft = targetRect.left - tabsRect.left + tabsRef.current.scrollLeft;
    const duration = shouldReduceMotion ? 0 : 0.45;

    gsap.to(indicatorRef.current, {
      x: offsetLeft + 12,
      width: Math.max(targetRect.width - 24, 48),
      duration,
      ease: 'power3.out'
    });
  }, [activeRoomId, shouldReduceMotion]);

  useEffect(() => {
    if (!contentRef.current) return;
    const items = contentRef.current.querySelectorAll('[data-suite-reveal]');
    if (!items.length) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: shouldReduceMotion ? 0 : 0.75,
        ease: 'power3.out',
        stagger: shouldReduceMotion ? 0 : 0.08
      }
    );
  }, [activeRoomId, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (leftArrowRef.current) {
      gsap.to(leftArrowRef.current, { opacity: showLeftArrow ? 1 : 0, duration: 0.3, ease: 'power2.out' });
    }
    if (rightArrowRef.current) {
      gsap.to(rightArrowRef.current, { opacity: showRightArrow ? 1 : 0, duration: 0.3, ease: 'power2.out' });
    }
  }, [showLeftArrow, showRightArrow, shouldReduceMotion]);

  const navigateRoom = (direction: 'left' | 'right') => {
    const currentIndex = ROOMS.findIndex(r => r.id === activeRoomId);
    const nextIndex = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(ROOMS.length - 1, currentIndex + 1);

    setActiveRoomId(ROOMS[nextIndex].id);

    // Scroll the tab into view
    const targetTab = tabRefs.current[nextIndex];
    if (targetTab && tabsRef.current) {
      targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const handleRoomInquiry = (roomName: string) => {
    const message = `Hello Villa VB, I am interested in the specific suite: *${roomName}*. Could you please provide availability and rates?`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCtaEnter = () => {
    if (shouldReduceMotion || !ctaRef.current) return;
    gsap.to(ctaRef.current, {
      y: -3,
      boxShadow: '0 18px 30px rgba(15, 14, 12, 0.22)',
      duration: 0.25,
      ease: 'power2.out'
    });
  };

  const handleCtaLeave = () => {
    if (shouldReduceMotion || !ctaRef.current) return;
    gsap.to(ctaRef.current, {
      y: 0,
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <Section id="suites" className="bg-limestone overflow-hidden">
      <div ref={sectionRef} className="flex flex-col gap-12 min-h-[800px]">

        {/* Header Section (Full Width) */}
        <div ref={headerRef} className="max-w-3xl">
          <span className="text-tide text-xs tracking-[0.3em] uppercase font-semibold mb-4 block">Accommodation</span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-[1.05] tracking-tight">
            The Private Sanctuaries
          </h2>
          <p className="text-stone-500 font-light mt-6 text-sm leading-relaxed max-w-2xl">
            Four distinct suites, each designed to frame the landscape differently.
            Select a room to uncover its unique character.
          </p>
        </div>

        {/* Horizontal Tab Navigation Container */}
        <div ref={tabsWrapRef} className="relative flex justify-center">

          {/* Left Navigation Arrow (Mobile/Tablet) */}
          {showLeftArrow && (
            <div
              ref={leftArrowRef}
              className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-8 bg-gradient-to-r from-limestone via-limestone to-transparent"
            >
              <button
                onClick={() => navigateRoom('left')}
                className="bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 text-stone-600" />
              </button>
            </div>
          )}

          {/* Scrollable Tabs */}
          <div
            ref={tabsRef}
            onScroll={checkScroll}
            className="relative flex w-max gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 px-2 scroll-smooth"
          >
            {ROOMS.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                ref={el => {
                  tabRefs.current[index] = el;
                }}
                className={`group relative min-w-max px-5 py-3 rounded-full border transition-all duration-300 ${activeRoomId === room.id
                  ? 'text-charcoal border-stone-300 bg-white/80 shadow-[0_12px_24px_rgba(15,14,12,0.08)]'
                  : 'text-stone-400 border-transparent bg-white/40 hover:text-stone-600 hover:border-stone-200'
                  }`}
              >
                <div className="flex items-baseline gap-3 px-2">
                  <span className={`text-[10px] tracking-widest uppercase ${activeRoomId === room.id ? 'text-teak-accent' : 'text-stone-300'}`}>
                    0{index + 1}
                  </span>
                  <span className="font-serif text-base md:text-lg tracking-wide">
                    {room.name}
                  </span>
                </div>
              </button>
            ))}
            {/* Spacer to ensure last item isn't covered by right arrow gradient */}
            <div className="min-w-[40px] h-1 shrink-0"></div>
            <div
              ref={indicatorRef}
              className="absolute bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-teak-accent via-teak-accent/80 to-teak-accent/60 shadow-[0_0_16px_rgba(183,137,95,0.35)]"
              style={{ width: 48 }}
            />
          </div>

          {/* Right Navigation Arrow (Mobile/Tablet) */}
          {showRightArrow && (
            <div
              ref={rightArrowRef}
              className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-8 bg-gradient-to-l from-limestone via-limestone to-transparent"
            >
              <button
                onClick={() => navigateRoom('right')}
                className="bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 text-stone-600" />
              </button>
            </div>
          )}
        </div>

        {/* Content Display */}
        <div ref={contentRef} className="relative mt-4">
          <div key={activeRoom.id} className="flex flex-col gap-10">
            {/* Image Container - Larger Aspect Ratio 16:9 */}
            <div
              ref={visualRef}
              data-suite-reveal
              className="relative aspect-[3/2] md:aspect-[16/9] w-full overflow-hidden bg-stone-200 shadow-xl"
            >
              <img
                src={activeRoom.imageUrl}
                alt={activeRoom.name}
                className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Room Details Split Layout */}
            <div data-suite-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

              {/* Left: Detailed Description */}
              <div className="lg:col-span-7 flex flex-col justify-center" data-suite-reveal>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-4 md:mb-6">{activeRoom.name}</h3>
                <div className="h-[1px] w-16 bg-teak-accent mb-8"></div>
                <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed mb-10">
                  {activeRoom.description}
                </p>
                <div>
                  <button
                    ref={ctaRef}
                    onClick={() => handleRoomInquiry(activeRoom.name)}
                    onMouseEnter={handleCtaEnter}
                    onMouseLeave={handleCtaLeave}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest bg-charcoal text-white px-6 py-3 md:px-8 md:py-4 hover:bg-teak-accent hover:gap-4 transition-all duration-300"
                  >
                    <span>Reserve via WhatsApp</span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path d="M12.04 2C6.56 2 2.1 6.48 2.1 11.96c0 1.9.5 3.77 1.48 5.4L2 22l4.75-1.52a9.9 9.9 0 0 0 5.29 1.51h.01c5.48 0 9.94-4.48 9.94-9.96C22 6.48 17.53 2 12.04 2zm5.8 14.2c-.24.68-1.42 1.3-1.96 1.38-.5.08-1.12.11-1.8-.1-.4-.12-.92-.3-1.59-.6-2.8-1.22-4.62-4.2-4.76-4.4-.13-.2-1.14-1.53-1.14-2.92 0-1.38.72-2.05.98-2.33.24-.28.56-.35.75-.35.18 0 .37 0 .53.01.18.01.42-.07.66.5.24.58.82 2 .9 2.15.07.15.12.32.02.52-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.32-.13.62.17.3.76 1.25 1.63 2.02 1.12.98 2.06 1.29 2.36 1.43.3.14.48.12.66-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.28.1 1.76.83 2.06.98.3.15.5.23.58.36.07.12.07.72-.17 1.4z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right: Dedicated Amenities Grid */}
              <div className="lg:col-span-5" data-suite-reveal>
                <div className="bg-white/90 p-8 border border-white/70 shadow-coastal h-full backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Suite Features</span>
                    <Star className="w-4 h-4 text-teak-accent/50" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeRoom.features.map((feature, idx) => {
                      const Icon = getIconComponent(feature);
                      return (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors group">
                          <div className="mt-0.5 text-stone-400 group-hover:text-teak-accent transition-colors">
                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                          <span className="text-xs text-stone-600 font-medium uppercase tracking-wide leading-relaxed group-hover:text-stone-900">
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Suites;
