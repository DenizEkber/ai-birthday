import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

interface IntroProps {
  onScrollDown: () => void;
}

const IntroSection: React.FC<IntroProps> = ({ onScrollDown }) => {
  const text = "Happy Birthday, Dear Teacher!";
  const letters = Array.from(text);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden p-6">
      <div className="text-center z-10">
        <motion.h1 className="font-heading text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 mb-8 leading-tight drop-shadow-sm">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <button
            onClick={onScrollDown}
            className="group relative px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-body font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span>Tap to Reveal Surprise</span>
            <span className="text-xl">🎁</span>
            <div className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-pulse"></div>
          </button>
        </motion.div>
      </div>

       {/* Decorative Balloons SVG */}
       <motion.div 
         animate={{ y: [0, -20, 0] }} 
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute left-10 top-20 md:left-20 opacity-80 pointer-events-none"
       >
         <svg width="100" height="120" viewBox="0 0 100 120">
            <path d="M50 0 C20 0 0 25 0 55 C0 85 20 100 48 100 L50 120 L52 100 C80 100 100 85 100 55 C100 25 80 0 50 0" fill="#FFB7B2" />
         </svg>
       </motion.div>

       <motion.div 
         animate={{ y: [0, -30, 0] }} 
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute right-10 bottom-40 md:right-32 opacity-80 pointer-events-none"
       >
         <svg width="80" height="100" viewBox="0 0 100 120">
            <path d="M50 0 C20 0 0 25 0 55 C0 85 20 100 48 100 L50 120 L52 100 C80 100 100 85 100 55 C100 25 80 0 50 0" fill="#E2F0CB" />
         </svg>
       </motion.div>

       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
       >
          <ArrowDownCircle className="text-rose-300 w-10 h-10" />
       </motion.div>
    </section>
  );
};

export default IntroSection;