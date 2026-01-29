import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { ROOMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
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
  MessageCircle,
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

const Rooms: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState(ROOMS[0].id);
  const activeRoom = ROOMS.find(r => r.id === activeRoomId) || ROOMS[0];

  // Refs for scroll handling
  const tabsRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleRoomInquiry = (roomName: string) => {
    const message = `Hello Villa VB, I am interested in the specific suite: *${roomName}*. Could you please provide availability and rates?`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Section id="rooms" className="bg-stone-50 overflow-hidden">
      <div className="flex flex-col gap-12 min-h-[800px]">

        {/* Header Section (Full Width) */}
        <div className="max-w-3xl">
          <span className="text-ocean-deep text-xs tracking-[0.3em] uppercase font-bold mb-4 block">Accommodation</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
            The Private Sanctuaries
          </h2>
          <p className="text-stone-500 font-light mt-6 text-sm leading-relaxed max-w-2xl">
            Four distinct suites, each designed to frame the landscape differently.
            Select a room to uncover its unique character.
          </p>
        </div>

        {/* Horizontal Tab Navigation Container */}
        <div className="relative border-b border-stone-200">

          {/* Left Navigation Arrow (Mobile/Tablet) */}
          <AnimatePresence>
            {showLeftArrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 bottom-0 z-20 flex items-center pr-8 bg-gradient-to-r from-stone-50 via-stone-50 to-transparent"
              >
                <button
                  onClick={() => scrollTabs('left')}
                  className="bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-600" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scrollable Tabs */}
          <div
            ref={tabsRef}
            onScroll={checkScroll}
            className="flex gap-8 md:gap-12 overflow-x-auto no-scrollbar pb-1 px-1 scroll-smooth"
          >
            {ROOMS.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                className={`group relative pb-4 min-w-max transition-colors duration-500 ${activeRoomId === room.id ? 'text-stone-800' : 'text-stone-400 hover:text-stone-600'
                  }`}
              >
                <div className="flex items-baseline gap-3 px-2">
                  <span className={`text-[10px] tracking-widest uppercase ${activeRoomId === room.id ? 'text-teak-accent' : 'text-stone-300'}`}>
                    0{index + 1}
                  </span>
                  <span className="font-serif text-lg tracking-wide">
                    {room.name}
                  </span>
                </div>

                {/* Animated Bottom Border */}
                {activeRoomId === room.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-teak-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            {/* Spacer to ensure last item isn't covered by right arrow gradient */}
            <div className="min-w-[40px] h-1 shrink-0"></div>
          </div>

          {/* Right Navigation Arrow (Mobile/Tablet) */}
          <AnimatePresence>
            {showRightArrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-0 bottom-0 z-20 flex items-center pl-8 bg-gradient-to-l from-stone-50 via-stone-50 to-transparent"
              >
                <button
                  onClick={() => scrollTabs('right')}
                  className="bg-white border border-stone-200 rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4 text-stone-600" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content Display */}
        <div className="relative mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-10"
            >
              {/* Image Container - Larger Aspect Ratio 16:9 */}
              <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden bg-stone-200 shadow-xl">
                <img
                  src={activeRoom.imageUrl}
                  alt={activeRoom.name}
                  className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Room Details Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                {/* Left: Detailed Description */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">{activeRoom.name}</h3>
                  <div className="h-[1px] w-16 bg-teak-accent mb-8"></div>
                  <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed mb-10">
                    {activeRoom.description}
                  </p>
                  <div>
                    <button
                      onClick={() => handleRoomInquiry(activeRoom.name)}
                      className="inline-flex items-center gap-3 text-xs uppercase tracking-widest bg-stone-900 text-white px-8 py-4 hover:bg-stone-700 hover:gap-4 transition-all duration-300"
                    >
                      <span>Reserve via WhatsApp</span>
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right: Dedicated Amenities Grid */}
                <div className="lg:col-span-5">
                  <div className="bg-white p-8 border border-stone-100 shadow-sm h-full">
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
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </Section>
  );
};

export default Rooms;