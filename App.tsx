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
    <div className="relative min-h-screen bg-pink-50 selection:bg-rose-200">
      {/* Background Ambience */}
      <FloatingParticles />
      <ClickSparkle />
      <AudioPlayer />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <IntroSection onScrollDown={scrollToMessage} />
        
        <div ref={messageRef}>
          <MessageSection />
        </div>
        
        <TributeSection />
        <FinalSurprise />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center bg-white/40 backdrop-blur-sm">
        <p className="font-body text-rose-800 text-sm md:text-base">
          Made with ❤️ by your students
        </p>
      </footer>
    </div>
  );
};

export default App;