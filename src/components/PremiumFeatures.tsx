import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Shield, 
  Zap, 
  BarChart3, 
  GitBranch, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

interface PremiumFeaturesProps {
  onStartDemo: () => void;
}

export function PremiumFeatures({ onStartDemo }: PremiumFeaturesProps) {
  const migrationSteps = [
    { step: "Infrastructure Analysis", status: "completed", time: "2 min" },
    { step: "Resource Replication", status: "completed", time: "15 min" },
    { step: "Testing & Validation", status: "in-progress", time: "5 min" },
    { step: "DNS Migration", status: "pending", time: "1 min" },
    { step: "Cleanup & Optimization", status: "pending", time: "3 min" }
  ];

  const savingsData = [
    { month: 'Jan', current: 15430, optimized: 4629 },
    { month: 'Feb', current: 16200, optimized: 4850 },
    { month: 'Mar', current: 15800, optimized: 4740 },
    { month: 'Apr', current: 17100, optimized: 5130 },
    { month: 'May', current: 16500, optimized: 4950 },
    { month: 'Jun', current: 15900, optimized: 4770 }
  ];

  const devopsMetrics = [
    { time: '00:00', incidents: 12, automated: 3 },
    { time: '04:00', incidents: 8, automated: 7 },
    { time: '08:00', incidents: 15, automated: 12 },
    { time: '12:00', incidents: 6, automated: 18 },
    { time: '16:00', incidents: 9, automated: 22 },
    { time: '20:00', incidents: 4, automated: 25 }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Premium Features</Badge>
            <h2 className="text-4xl font-bold mb-4">
              AI-Powered Infrastructure Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of DevOps with automated infrastructure optimization, 
              zero-downtime migrations, and intelligent cost management.
            </p>
          </div>

          {/* Migration Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-primary" />
                Automated Migration Progress
                <Badge variant="outline" className="ml-auto">Live Demo</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0">
                      {step.status === 'completed' && (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      )}
                      {step.status === 'in-progress' && (
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      )}
                      {step.status === 'pending' && (
                        <div className="w-6 h-6 border-2 border-muted-foreground/30 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{step.step}</h4>
                        <span className="text-sm text-muted-foreground">{step.time}</span>
                      </div>
                      {step.status === 'in-progress' && (
                        <Progress value={65} className="mt-2 h-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button onClick={onStartDemo} size="lg" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Charts Dashboard */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Cost Savings Over Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={savingsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value, name) => [
                          `$${value.toLocaleString()}`, 
                          name === 'current' ? 'Current Cost' : 'Optimized Cost'
                        ]} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="current" 
                        stackId="1" 
                        stroke="#ef4444" 
                        fill="#ef4444" 
                        fillOpacity={0.3}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="optimized" 
                        stackId="2" 
                        stroke="#22c55e" 
                        fill="#22c55e" 
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  DevOps Automation Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={devopsMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="incidents" 
                        stroke="#ef4444" 
                        name="Manual Incidents"
                        strokeWidth={2}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="automated" 
                        stroke="#22c55e" 
                        name="Automated Resolutions"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Premium Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-10 translate-x-10" />
              <CardHeader>
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Enhanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Automated security hardening, compliance monitoring, and threat detection.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>SOC2 & ISO27001 compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Automated vulnerability patching</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full -translate-y-10 translate-x-10" />
              <CardHeader>
                <Clock className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle>Zero Downtime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Seamless migrations and updates without service interruption.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Blue-green deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Automated rollback capability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-full -translate-y-10 translate-x-10" />
              <CardHeader>
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Centralized DevOps dashboard with role-based access control.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Multi-team workspaces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Audit trails & reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Calculator */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Your Potential ROI</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Infrastructure Savings</span>
                      <span className="font-semibold text-green-600">$10,801</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>DevOps Time Savings (80hrs/month)</span>
                      <span className="font-semibold text-green-600">$8,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Security & Compliance Benefits</span>
                      <span className="font-semibold text-green-600">$3,200</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total Monthly Savings</span>
                        <span className="text-green-600">$22,001</span>
                      </div>
                      <div className="flex justify-between items-center text-2xl font-bold mt-2">
                        <span>Annual ROI</span>
                        <span className="text-green-600">$264,012</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">OpsCut Premium Cost</div>
                    <div className="text-4xl font-bold">$99<span className="text-base font-normal">/month</span></div>
                    <div className="text-sm text-green-600">First month free</div>
                  </div>
                  
                  <Button size="lg" className="w-full mb-4">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground">
                    No credit card required • Cancel anytime • 30-day money-back guarantee
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}