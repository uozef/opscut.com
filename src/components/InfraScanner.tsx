import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  ArrowRight
} from "lucide-react";

interface ScannerProps {
  domain: string;
  onComplete: (results: any) => void;
}

export function InfraScanner({ domain, onComplete }: ScannerProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [discoveries, setDiscoveries] = useState<string[]>([]);

  const scanSteps = [
    { step: "DNS Resolution", duration: 800, discovery: "AWS Route 53 detected" },
    { step: "Infrastructure Discovery", duration: 1200, discovery: "12 EC2 instances found" },
    { step: "Database Analysis", duration: 1000, discovery: "3 RDS instances (over-provisioned)" },
    { step: "Load Balancer Check", duration: 900, discovery: "ALB with unused listeners" },
    { step: "Security Assessment", duration: 1100, discovery: "5 security groups need optimization" },
    { step: "Cost Analysis", duration: 800, discovery: "Estimated 68% cost reduction possible" },
  ];

  useEffect(() => {
    let stepIndex = 0;
    let totalTime = 0;

    const runScan = () => {
      if (stepIndex < scanSteps.length) {
        const step = scanSteps[stepIndex];
        setCurrentStep(step.step);
        
        setTimeout(() => {
          setDiscoveries(prev => [...prev, step.discovery]);
          totalTime += step.duration;
          stepIndex++;
          setProgress((stepIndex / scanSteps.length) * 100);
          
          if (stepIndex < scanSteps.length) {
            runScan();
          } else {
            setTimeout(() => {
              onComplete({
                domain,
                totalServers: 12,
                databases: 3,
                currentCost: 15430,
                optimizedCost: 4629,
                savings: 10801,
                savingsPercent: 70,
                issues: [
                  { type: "Over-provisioned", count: 8, severity: "high" },
                  { type: "Unused resources", count: 5, severity: "medium" },
                  { type: "Security gaps", count: 3, severity: "high" },
                  { type: "Inefficient networking", count: 2, severity: "low" }
                ]
              });
            }, 500);
          }
        }, step.duration);
      }
    };

    runScan();
  }, [domain, onComplete]);

  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-info/10 text-primary px-4 py-2 rounded-full mb-4 border border-primary/20">
              <Zap className="w-4 h-4" />
              AI Analysis in Progress
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Analyzing Infrastructure for{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                {domain}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our advanced AI is scanning your infrastructure and identifying optimization opportunities
            </p>
          </div>

          <Card className="mb-8 border-2 border-primary/20 shadow-xl bg-gradient-to-r from-background to-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-info rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white animate-pulse" />
                </div>
                {currentStep}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progress} className="h-4" />
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-medium">AI Analysis in Progress...</span>
                  <span className="font-bold text-primary">{Math.round(progress)}% Complete</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-success/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-6 h-6 bg-success/20 rounded-lg flex items-center justify-center">
                    <Server className="w-4 h-4 text-success" />
                  </div>
                  Infrastructure Discovered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discoveries.map((discovery, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="font-medium">{discovery}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-warning/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-6 h-6 bg-warning/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-warning" />
                  </div>
                  Optimization Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-xl border border-destructive/20">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      <span className="font-medium">Over-provisioned instances</span>
                    </div>
                    <Badge variant="destructive" className="font-semibold">High Impact</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-warning/10 rounded-xl border border-warning/20">
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-warning" />
                      <span className="font-medium">Unused database capacity</span>
                    </div>
                    <Badge className="bg-warning/20 text-warning border-warning/30 font-semibold">Medium Impact</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-info/10 rounded-xl border border-info/20">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-info" />
                      <span className="font-medium">Security optimizations</span>
                    </div>
                    <Badge className="bg-info/20 text-info border-info/30 font-semibold">Security</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}