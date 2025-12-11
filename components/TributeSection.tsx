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
      case 'smile': return <Smile color="#f43f5e" size={32} />;
      case 'star': return <Star color="#eab308" size={32} />;
      case 'heart': return <Heart color="#ec4899" size={32} />;
      case 'sun': return <Sun color="#f97316" size={32} />;
      default: return <Heart />;
    }
  };

  return (
    <section className="section tribute-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="tribute-heading"
      >
        With Love, From Your Students ❤️
      </motion.h2>

      <div className="tribute-grid">
        {tributes.map((tribute, index) => (
          <motion.div
            key={tribute.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card tribute-card"
          >
            <div className="tribute-icon-wrapper" style={{ animationDelay: `${index}s` }}>
              {getIcon(tribute.icon)}
            </div>
            <h3 className="tribute-name">{tribute.name}</h3>
            <p className="tribute-msg">"{tribute.message}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TributeSection;