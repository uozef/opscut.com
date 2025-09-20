import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, Zap, Shield, TrendingDown, Sparkles, Bot, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onScanDomain: (domain: string) => void;
}

export function Hero({ onScanDomain }: HeroProps) {
  const [domain, setDomain] = useState("");
  
  const handleScan = () => {
    if (domain.trim()) {
      onScanDomain(domain.trim());
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-info/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Badge */}
            <Badge className="bg-gradient-to-r from-primary/10 to-info/10 text-primary border-primary/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Cloud Optimization
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Cut Cloud Costs by
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-info to-success bg-clip-text text-transparent">
                  70% Instantly
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover hidden costs in your cloud infrastructure with our AI-powered analysis. 
                Get actionable optimization recommendations in seconds, not weeks.
              </p>
            </div>
            
            <Card className="p-8 space-y-6 bg-gradient-to-r from-background to-accent/20 border-2 border-primary/10 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-info rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">Free Infrastructure Scan</h3>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your domain (e.g., example.com)"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="flex-1 h-12 text-lg bg-background border-2 border-border focus:border-primary transition-colors"
                  onKeyPress={(e) => e.key === 'Enter' && handleScan()}
                />
                <Button 
                  onClick={handleScan} 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 text-lg font-semibold px-8 h-12 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Scan Now
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-success" />
                  No signup required
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-info" />
                  Results in 30 seconds
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-primary" />
                  100% secure & private
                </div>
              </div>
            </Card>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-success/10 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingDown className="w-8 h-8 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">70%</p>
                  <p className="text-sm text-muted-foreground">Average Cost Reduction</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">30s</p>
                  <p className="text-sm text-muted-foreground">Instant Analysis</p>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-info/20 to-info/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-info" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-info">99.9%</p>
                  <p className="text-sm text-muted-foreground">Security Score</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwc2VydmVycyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzU4MzM4NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud Infrastructure"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating Cost Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="p-6 backdrop-blur-xl bg-background/90 border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Current Monthly Cost</span>
                      <span className="text-2xl font-bold text-destructive">$15,430</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">After Optimization</span>
                      <span className="text-2xl font-bold text-success">$4,629</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Monthly Savings</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-success to-info bg-clip-text text-transparent">
                          $10,801
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-success/90 text-white border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Optimized
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}