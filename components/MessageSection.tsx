import React from 'react';
import { motion } from 'framer-motion';

const MessageSection: React.FC = () => {
  return (
    <section className="section">
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div className="message-background-blob blob-1"></div>
        <div className="message-background-blob blob-2"></div>
        <div className="message-background-blob blob-3"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-card message-card"
      >
        <div className="decoration-icon icon-tl">💐</div>
        
        <h2 className="message-heading">
            A Message For You
        </h2>

        <div className="message-body">
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
          <p className="message-footer">
            Happy Birthday! 🎉
          </p>
        </div>
        
        <div className="decoration-icon icon-br">💝</div>
      </motion.div>
    </section>
  );
};

export default MessageSection;