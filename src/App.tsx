import React, { useState, useEffect } from 'react';
import { ScreenType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PlatformView } from './components/PlatformView';
import { ArchitectureView } from './components/ArchitectureView';
import { CopilotView } from './components/CopilotView';
import { DemoView } from './components/DemoView';
import { SolutionsView } from './components/SolutionsView';
import { UseCasesView } from './components/UseCasesView';
import { SignInModal } from './components/SignInModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('platform');
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Scroll to top upon navigating to a different screen
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setNotification(`Authenticated as ${email}`);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e]">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#00120a] text-white px-4 py-2.5 rounded-xl border border-emerald-500/50 shadow-2xl text-xs font-mono flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-[#6cf8bb] animate-ping" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenSignIn={() => setSignInModalOpen(true)}
        onOpenDemo={() => setCurrentScreen('demo')}
      />

      {/* Screen Views */}
      <main className="flex-1">
        {currentScreen === 'platform' && (
          <PlatformView
            onNavigate={handleNavigate}
            onOpenDemo={() => setCurrentScreen('demo')}
            onOpenSignIn={() => setSignInModalOpen(true)}
          />
        )}

        {currentScreen === 'architecture' && (
          <ArchitectureView
            onNavigate={handleNavigate}
            onOpenDemo={() => setCurrentScreen('demo')}
          />
        )}

        {currentScreen === 'copilot' && (
          <CopilotView onNavigate={handleNavigate} />
        )}

        {currentScreen === 'demo' && (
          <DemoView onNavigate={handleNavigate} />
        )}

        {currentScreen === 'solutions' && (
          <SolutionsView
            onNavigate={handleNavigate}
            onOpenDemo={() => setCurrentScreen('demo')}
          />
        )}

        {currentScreen === 'use-cases' && (
          <UseCasesView
            onNavigate={handleNavigate}
            onOpenDemo={() => setCurrentScreen('demo')}
          />
        )}
      </main>

      {/* Global Enterprise Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sign In SSO Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
