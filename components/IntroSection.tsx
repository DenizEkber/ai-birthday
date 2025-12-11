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
    <section className="section intro-container">
      <div className="intro-content">
        <motion.h1 className="intro-title">
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
            className="intro-button"
          >
            <span>Tap to Reveal Surprise</span>
            <span style={{ fontSize: '1.25rem' }}>🎁</span>
            <div className="intro-button-pulse"></div>
          </button>
        </motion.div>
      </div>

       {/* Decorative Balloons SVG */}
       <motion.div 
         animate={{ y: [0, -20, 0] }} 
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="balloon-svg balloon-1"
       >
         <svg width="100" height="120" viewBox="0 0 100 120">
            <path d="M50 0 C20 0 0 25 0 55 C0 85 20 100 48 100 L50 120 L52 100 C80 100 100 85 100 55 C100 25 80 0 50 0" fill="#FFB7B2" />
         </svg>
       </motion.div>

       <motion.div 
         animate={{ y: [0, -30, 0] }} 
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="balloon-svg balloon-2"
       >
         <svg width="80" height="100" viewBox="0 0 100 120">
            <path d="M50 0 C20 0 0 25 0 55 C0 85 20 100 48 100 L50 120 L52 100 C80 100 100 85 100 55 C100 25 80 0 50 0" fill="#E2F0CB" />
         </svg>
       </motion.div>

       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 2, repeat: Infinity }}
        className="scroll-indicator"
       >
          <ArrowDownCircle size={40} />
       </motion.div>
    </section>
  );
};

export default IntroSection;