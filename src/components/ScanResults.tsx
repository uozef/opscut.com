import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  DollarSign, 
  Server, 
  Database, 
  Shield, 
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  ArrowRight,
  Crown
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ScanResultsProps {
  results: {
    domain: string;
    totalServers: number;
    databases: number;
    currentCost: number;
    optimizedCost: number;
    savings: number;
    savingsPercent: number;
    issues: Array<{
      type: string;
      count: number;
      severity: string;
    }>;
  };
  onUpgrade: () => void;
}

export function ScanResults({ results, onUpgrade }: ScanResultsProps) {
  const costData = [
    { name: 'Current', cost: results.currentCost, fill: '#ef4444' },
    { name: 'Optimized', cost: results.optimizedCost, fill: '#22c55e' }
  ];

  const resourceData = [
    { name: 'EC2 Instances', current: 12, optimized: 6 },
    { name: 'RDS Databases', current: 3, optimized: 2 },
    { name: 'Load Balancers', current: 4, optimized: 2 },
    { name: 'Storage (TB)', current: 15, optimized: 8 }
  ];

  const issueColors = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#3b82f6'
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-success to-info rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold">
                Analysis Complete for{" "}
                <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                  {results.domain}
                </span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI discovered significant optimization opportunities that could transform your infrastructure costs
            </p>
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mt-4">
              <CheckCircle className="w-4 h-4" />
              Optimization Plan Ready
            </div>
          </div>

          {/* Cost Savings Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="relative overflow-hidden border-2 border-success/20 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-success to-info rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  Monthly Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold bg-gradient-to-r from-success to-info bg-clip-text text-transparent">
                  ${results.savings.toLocaleString()}
                </div>
                <p className="text-lg font-semibold text-success">
                  {results.savingsPercent}% cost reduction
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-info rounded-lg flex items-center justify-center">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                  Resources Found
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary">
                  {results.totalServers + results.databases}
                </div>
                <p className="text-lg text-muted-foreground">
                  {results.totalServers} servers, {results.databases} databases
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-warning/20 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-warning/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-warning to-destructive rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  Issues Detected
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-warning">
                  {results.issues.reduce((sum, issue) => sum + issue.count, 0)}
                </div>
                <p className="text-lg text-muted-foreground">
                  Optimization opportunities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Cost Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={costData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Monthly Cost']} />
                      <Bar dataKey="cost" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={resourceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="current" fill="#ef4444" name="Current" />
                      <Bar dataKey="optimized" fill="#22c55e" name="Optimized" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Issues Breakdown */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Optimization Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.issues.map((issue, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: issueColors[issue.severity as keyof typeof issueColors] }}
                      />
                      <div>
                        <h4 className="font-medium">{issue.type}</h4>
                        <p className="text-sm text-muted-foreground">{issue.count} instances found</p>
                      </div>
                    </div>
                    <Badge 
                      variant={issue.severity === 'high' ? 'destructive' : issue.severity === 'medium' ? 'default' : 'secondary'}
                    >
                      {issue.severity} impact
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upgrade CTA */}
          <Card className="bg-gradient-to-br from-primary/10 via-info/5 to-success/10 border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left flex-1">
                  <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-info rounded-xl flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                      Ready to Transform Your Infrastructure?
                    </h3>
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">
                    Upgrade to OpsCut Premium and let AI implement these optimizations automatically
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="font-medium">Automated infrastructure replication</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="font-medium">Zero-downtime migration</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background/60 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="font-medium">24/7 AI monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-background/80 p-8 rounded-2xl border border-border/50 shadow-lg">
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Potential Monthly Savings</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-success to-info bg-clip-text text-transparent">
                      ${results.savings.toLocaleString()}
                    </div>
                    <div className="text-success font-semibold">saved every month</div>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={onUpgrade} 
                    className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 text-lg font-semibold px-8 py-4 h-auto shadow-xl"
                  >
                    Unlock Premium Features
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    ROI guaranteed or money back
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