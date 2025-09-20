import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { Zap, Menu, Sparkles } from "lucide-react";

export function Header() {
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
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Platform
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Resources
            </a>
            <a href="#enterprise" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Enterprise
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="font-medium">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 font-medium shadow-lg">
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