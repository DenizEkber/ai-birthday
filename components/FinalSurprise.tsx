import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const FinalSurprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Trigger confetti multiple times
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFC0CB', '#FFD700', '#FF69B4']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFC0CB', '#FFD700', '#FF69B4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="gift-box"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="cursor-pointer group"
            onClick={handleOpen}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Simple CSS/SVG Gift Box */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl filter group-hover:brightness-110 transition-all">
                    {/* Box Base */}
                    <rect x="20" y="40" width="60" height="50" fill="#F472B6" rx="2" />
                    {/* Ribbon Vertical */}
                    <rect x="45" y="40" width="10" height="50" fill="#FDE047" />
                    {/* Box Lid */}
                    <rect x="15" y="30" width="70" height="15" fill="#EC4899" rx="2" />
                    {/* Ribbon Vertical Lid */}
                    <rect x="45" y="30" width="10" height="15" fill="#FDE047" />
                    {/* Bow */}
                    <path d="M50 30 C 50 10, 20 10, 45 30 C 20 10, 20 40, 45 32" fill="none" stroke="#FDE047" strokeWidth="5" />
                    <path d="M50 30 C 50 10, 80 10, 55 30 C 80 10, 80 40, 55 32" fill="none" stroke="#FDE047" strokeWidth="5" />
                </svg>
                <div className="absolute top-full left-0 w-full text-center mt-4">
                    <p className="font-body text-rose-500 animate-bounce">Click to Open!</p>
                </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cake"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center"
          >
             {/* Big Birthday Cake SVG */}
             <div className="w-64 h-64 md:w-96 md:h-96 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Plate */}
                    <ellipse cx="100" cy="170" rx="80" ry="20" fill="#E5E7EB" />
                    
                    {/* Cake Base */}
                    <path d="M40 120 L40 160 Q100 180 160 160 L160 120" fill="#FBCFE8" />
                    <ellipse cx="100" cy="120" rx="60" ry="15" fill="#F9A8D4" />
                    
                    {/* Cake Top Layer */}
                    <path d="M50 80 L50 120 Q100 140 150 120 L150 80" fill="#F9A8D4" />
                    <ellipse cx="100" cy="80" rx="50" ry="12" fill="#F472B6" />
                    
                    {/* Icing Drips */}
                    <path d="M50 80 Q60 100 70 80 Q80 100 90 80 Q100 100 110 80 Q120 100 130 80 Q140 100 150 80" fill="#F472B6" stroke="#F472B6" strokeWidth="2" />

                    {/* Candles */}
                    <rect x="70" y="50" width="6" height="30" fill="#60A5FA" />
                    <rect x="97" y="50" width="6" height="30" fill="#A78BFA" />
                    <rect x="124" y="50" width="6" height="30" fill="#34D399" />

                    {/* Flames (Animated CSS) */}
                    <circle cx="73" cy="45" r="4" fill="#FCD34D" className="animate-[candle-flicker_0.8s_infinite] origin-center" />
                    <circle cx="100" cy="45" r="4" fill="#FCD34D" className="animate-[candle-flicker_1.1s_infinite] origin-center" />
                    <circle cx="127" cy="45" r="4" fill="#FCD34D" className="animate-[candle-flicker_0.9s_infinite] origin-center" />
                </svg>
             </div>

             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-heading text-5xl md:text-7xl text-rose-600 text-center mt-8 drop-shadow-md"
             >
                Happy Birthday, Teacher!
             </motion.h1>
             
             <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-4 font-body text-xl text-gray-600"
             >
                Make a wish! 🕯️
             </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalSurprise;