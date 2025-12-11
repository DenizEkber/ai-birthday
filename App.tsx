import React, { useRef } from 'react';
import FloatingParticles from './components/FloatingParticles';
import ClickSparkle from './components/ClickSparkle';
import AudioPlayer from './components/AudioPlayer';
import IntroSection from './components/IntroSection';
import MessageSection from './components/MessageSection';
import TributeSection from './components/TributeSection';
import FinalSurprise from './components/FinalSurprise';

const App: React.FC = () => {
  const messageRef = useRef<HTMLDivElement>(null);

  const scrollToMessage = () => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Background Ambience */}
      <FloatingParticles />
      <ClickSparkle />
      <AudioPlayer />

      {/* Main Content Sections */}
      <main className="main-content">
        <IntroSection onScrollDown={scrollToMessage} />
        
        <div ref={messageRef}>
          <MessageSection />
        </div>
        
        <TributeSection />
        <FinalSurprise />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p className="footer-text">
          Made with ❤️ by your students
        </p>
      </footer>
    </div>
  );
};

export default App;