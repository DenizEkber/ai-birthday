import React from 'react';
import { motion } from 'framer-motion';

const MessageSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Bokeh effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-card max-w-3xl w-full p-8 md:p-12 rounded-3xl relative z-10"
      >
        <div className="absolute -top-6 -left-6 text-6xl rotate-[-15deg]">💐</div>
        
        <h2 className="font-heading text-3xl md:text-4xl text-rose-800 mb-8 text-center border-b-2 border-rose-200 pb-4">
            A Message For You
        </h2>

        <div className="font-handwriting text-2xl md:text-3xl text-gray-800 leading-relaxed space-y-4">
          <p>Dear Teacher,</p>
          <p>
            Today is not just your birthday — it is a celebration of all the knowledge,
            kindness, patience, and inspiration you share with us every day.
          </p>
          <p>
            You make learning meaningful, you make difficult things simple,
            and you make the classroom feel like a second home.
          </p>
          <p>
            Thank you for being the heart of our class.
          </p>
          <p>
            We wish you endless happiness, health, and success.
          </p>
          <p className="font-bold text-rose-600 mt-6 text-center text-4xl">
            Happy Birthday! 🎉
          </p>
        </div>
        
        <div className="absolute -bottom-6 -right-6 text-6xl rotate-[15deg]">💝</div>
      </motion.div>
    </section>
  );
};

export default MessageSection;