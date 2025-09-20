import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ThemeToggle } from "./ThemeToggle";
import { 
  Activity,
  Server,
  Database,
  Shield,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  BarChart3,
  Settings,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PremiumDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isOptimizing, setIsOptimizing] = useState(false);

  const performanceData = [
    { time: '00:00', cpu: 45, memory: 62, network: 23 },
    { time: '04:00', cpu: 32, memory: 58, network: 19 },
    { time: '08:00', cpu: 78, memory: 71, network: 45 },
    { time: '12:00', cpu: 65, memory: 69, network: 38 },
    { time: '16:00', cpu: 52, memory: 64, network: 28 },
    { time: '20:00', cpu: 41, memory: 60, network: 22 }
  ];

  const costBreakdown = [
    { name: 'Compute', value: 2100, color: '#8b5cf6' },
    { name: 'Storage', value: 850, color: '#10b981' },
    { name: 'Networking', value: 420, color: '#ea580c' },
    { name: 'Database', value: 1259, color: '#f97316' }
  ];

  const infrastructureComponents = [
    { name: 'Web Servers', count: 6, status: 'healthy', utilization: 65 },
    { name: 'Database Servers', count: 2, status: 'optimized', utilization: 45 },
    { name: 'Load Balancers', count: 2, status: 'healthy', utilization: 30 },
    { name: 'Cache Servers', count: 3, status: 'healthy', utilization: 55 }
  ];

  const recentOptimizations = [
    { action: 'Downscaled EC2 instances', savings: '$1,200', time: '2 hours ago' },
    { action: 'Optimized RDS storage', savings: '$380', time: '5 hours ago' },
    { action: 'Cleaned unused EBS volumes', savings: '$150', time: '1 day ago' },
    { action: 'Rightsized load balancers', savings: '$280', time: '2 days ago' }
  ];

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => setIsOptimizing(false), 3000);
  };

  return (
    <section className="py-8 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">OpsCut Dashboard</h1>
              <p className="text-muted-foreground">
                Real-time infrastructure monitoring and optimization
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <ThemeToggle />
              <Badge variant="outline" className="flex items-center gap-1">
                <Activity className="w-3 h-3" />
                Live Monitoring
              </Badge>
              <Button 
                onClick={handleOptimize}
                disabled={isOptimizing}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90"
              >
                {isOptimizing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Auto-Optimize
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Monthly Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">$10,801</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% from last month
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">13</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Server className="w-3 h-3 mr-1" />
                  46% reduction achieved
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Security Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98/100</div>
                <div className="flex items-center text-xs text-green-600">
                  <Shield className="w-3 h-3 mr-1" />
                  Excellent rating
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Uptime
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.99%</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  Last 30 days
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="cpu" stroke="#8b5cf6" name="CPU %" />
                          <Line type="monotone" dataKey="memory" stroke="#10b981" name="Memory %" />
                          <Line type="monotone" dataKey="network" stroke="#ea580c" name="Network %" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Cost Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={costBreakdown}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            dataKey="value"
                          >
                            {costBreakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`$${value}`, 'Monthly Cost']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Optimizations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOptimizations.map((opt, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="font-medium">{opt.action}</div>
                            <div className="text-sm text-muted-foreground">{opt.time}</div>
                          </div>
                        </div>
                        <div className="text-green-600 font-semibold">{opt.savings}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="infrastructure" className="space-y-6">
              <div className="grid gap-6">
                {infrastructureComponents.map((component, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Server className="w-6 h-6 text-primary" />
                          <div>
                            <h3 className="font-semibold">{component.name}</h3>
                            <p className="text-sm text-muted-foreground">{component.count} instances</p>
                          </div>
                        </div>
                        <Badge 
                          variant={component.status === 'healthy' ? 'default' : 'secondary'}
                          className={component.status === 'optimized' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {component.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Utilization</span>
                          <span>{component.utilization}%</span>
                        </div>
                        <Progress value={component.utilization} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="costs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cost Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="cpu" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
                        <Area type="monotone" dataKey="memory" stackId="1" stroke="#10b981" fill="#10b981" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Auto-Optimization Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>CPU-based scaling</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Storage optimization</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cost anomaly detection</span>
                      <Button variant="outline" size="sm">Enabled</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Next Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <div className="font-medium">Database rightsizing</div>
                        <div className="text-sm text-muted-foreground">Estimated savings: $420/month</div>
                        <Button size="sm" className="mt-2">
                          Apply Optimization
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}