import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Resources } from "./components/Resources";
import { Enterprise } from "./components/Enterprise";
import { InfraScanner } from "./components/InfraScanner";
import { ScanResults } from "./components/ScanResults";
import { PremiumFeatures } from "./components/PremiumFeatures";
import { PremiumDashboard } from "./components/PremiumDashboard";

type AppState = 'landing' | 'features' | 'pricing' | 'resources' | 'enterprise' | 'scanning' | 'results' | 'premium' | 'dashboard';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [scanResults, setScanResults] = useState<any>(null);
  const [scannedDomain, setScannedDomain] = useState<string>("");

  const handleScanDomain = (domain: string) => {
    setScannedDomain(domain);
    setAppState('scanning');
  };

  const handleScanComplete = (results: any) => {
    setScanResults(results);
    setAppState('results');
  };

  const handleUpgrade = () => {
    setAppState('premium');
  };

  const handleStartDemo = () => {
    setAppState('dashboard');
  };

  const handleBackToLanding = () => {
    setAppState('landing');
    setScanResults(null);
    setScannedDomain("");
  };

  const handleNavigate = (page: string) => {
    setAppState(page as AppState);
  };

  return (
    <div className="min-h-screen bg-background">
      {appState !== 'dashboard' && (
        <Header onNavigate={handleNavigate} currentPage={appState} />
      )}
      
      {appState === 'landing' && (
        <Hero onScanDomain={handleScanDomain} />
      )}
      
      {appState === 'features' && (
        <Features />
      )}
      
      {appState === 'pricing' && (
        <Pricing />
      )}
      
      {appState === 'resources' && (
        <Resources />
      )}
      
      {appState === 'enterprise' && (
        <Enterprise />
      )}
      
      {appState === 'scanning' && (
        <InfraScanner 
          domain={scannedDomain} 
          onComplete={handleScanComplete} 
        />
      )}
      
      {appState === 'results' && scanResults && (
        <ScanResults 
          results={scanResults} 
          onUpgrade={handleUpgrade} 
        />
      )}
      
      {appState === 'premium' && (
        <PremiumFeatures onStartDemo={handleStartDemo} />
      )}
      
      {appState === 'dashboard' && (
        <PremiumDashboard />
      )}

      {/* Footer - shown on all static pages */}
      {['landing', 'features', 'pricing', 'resources', 'enterprise'].includes(appState) && (
        <Footer onNavigate={handleNavigate} />
      )}

      {/* Navigation buttons for demo purposes */}
      {!['landing', 'features', 'pricing', 'resources', 'enterprise', 'dashboard'].includes(appState) && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={handleBackToLanding}
            className="px-6 py-3 bg-gradient-to-r from-primary to-info text-white rounded-xl shadow-xl hover:shadow-2xl hover:from-primary/90 hover:to-info/90 transition-all duration-300 font-semibold backdrop-blur-sm border border-white/20"
          >
            ← Back to Home
          </button>
        </div>
      )}

      {appState === 'dashboard' && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={() => setAppState('premium')}
            className="px-6 py-3 bg-gradient-to-r from-primary to-info text-white rounded-xl shadow-xl hover:shadow-2xl hover:from-primary/90 hover:to-info/90 transition-all duration-300 font-semibold backdrop-blur-sm border border-white/20"
          >
            ← Back to Features
          </button>
        </div>
      )}
    </div>
  );
}