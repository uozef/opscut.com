import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { Zap, Menu, Sparkles } from "lucide-react";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage = 'landing' }: HeaderProps) {
  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-info rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                OpsCut
              </span>
              <Badge variant="secondary" className="text-xs font-medium px-2 py-0.5 bg-gradient-to-r from-primary/10 to-info/10 text-primary border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate?.('features')}
              className={`transition-colors font-medium ${
                currentPage === 'features' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Platform
            </button>
            <button 
              onClick={() => onNavigate?.('pricing')}
              className={`transition-colors font-medium ${
                currentPage === 'pricing' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => onNavigate?.('resources')}
              className={`transition-colors font-medium ${
                currentPage === 'resources' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => onNavigate?.('enterprise')}
              className={`transition-colors font-medium ${
                currentPage === 'enterprise' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Enterprise
            </button>
          </nav>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="font-medium">
              Sign In
            </Button>
            <Button 
              size="sm" 
              onClick={() => onNavigate?.('landing')}
              className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 font-medium shadow-lg"
            >
              Start Free Scan
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}