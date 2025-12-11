import React from 'react';
import { motion } from 'framer-motion';
import { StudentTribute } from '../types';
import { Smile, Star, Heart, Sun } from 'lucide-react';

const tributes: StudentTribute[] = [
  { id: 1, name: "The Students", message: "Thank you for everything", icon: "smile" },
  { id: 2, name: "Class of '24", message: "You inspire us daily", icon: "star" },
  { id: 3, name: "Grateful Minds", message: "We appreciate you", icon: "heart" },
  { id: 4, name: "Future Leaders", message: "You're the best teacher!", icon: "sun" },
];

const TributeSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'smile': return <Smile className="w-8 h-8 text-rose-500" />;
      case 'star': return <Star className="w-8 h-8 text-yellow-500" />;
      case 'heart': return <Heart className="w-8 h-8 text-pink-500" />;
      case 'sun': return <Sun className="w-8 h-8 text-orange-500" />;
      default: return <Heart />;
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-transparent to-purple-50">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-heading text-3xl md:text-5xl text-rose-800 mb-16 text-center"
      >
        With Love, From Your Students ❤️
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {tributes.map((tribute, index) => (
          <motion.div
            key={tribute.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner mb-4 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: `${index}s` }}>
              {getIcon(tribute.icon)}
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-800 mb-2">{tribute.name}</h3>
            <p className="font-body text-gray-600 italic">"{tribute.message}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TributeSection;