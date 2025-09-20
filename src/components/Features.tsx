import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Server, 
  Shield, 
  Zap, 
  BarChart3, 
  DollarSign, 
  Cloud,
  Database,
  Network,
  Lock,
  TrendingUp,
  Cpu,
  HardDrive,
  Activity,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Globe
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

function FeatureCard({ icon, title, description, features, badge }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-glow-lg transition-all duration-500 border-border/40 bg-card/80 backdrop-blur-sm">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-info/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-info/30 transition-colors">
            {icon}
          </div>
          {badge && (
            <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-info/10 text-primary border-primary/20">
              {badge}
            </Badge>
          )}
        </div>
        <div>
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Features() {
  const coreFeatures = [
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Real-time Infrastructure Discovery",
      description: "Automatically scan and map your entire cloud infrastructure in minutes, not days.",
      features: [
        "Multi-cloud support (AWS, Azure, GCP)",
        "Real-time resource detection",
        "Dependency mapping",
        "Security posture analysis"
      ],
      badge: "AI-Powered"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-success" />,
      title: "Intelligent Cost Optimization",
      description: "AI-driven recommendations that automatically identify and implement cost savings.",
      features: [
        "Right-sizing recommendations", 
        "Unused resource detection",
        "Reserved instance optimization",
        "Storage tier optimization"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-info" />,
      title: "Security & Compliance",
      description: "Ensure your optimized infrastructure maintains the highest security standards.",
      features: [
        "Security policy enforcement",
        "Compliance framework support",
        "Vulnerability scanning",
        "Access control optimization"
      ]
    },
    {
      icon: <Zap className="w-6 h-6 text-warning" />,
      title: "Automated Infrastructure as Code",
      description: "Generate clean, production-ready IaC templates for your optimized infrastructure.",
      features: [
        "Terraform generation",
        "CloudFormation support", 
        "Kubernetes manifests",
        "Version control integration"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Advanced Analytics & Monitoring",
      description: "Comprehensive insights into your infrastructure performance and costs.",
      features: [
        "Cost trend analysis",
        "Performance metrics",
        "Predictive analytics", 
        "Custom dashboards"
      ]
    },
    {
      icon: <Globe className="w-6 h-6 text-info" />,
      title: "Seamless Migration & Cutover",
      description: "Zero-downtime migration to your optimized infrastructure with DNS automation.",
      features: [
        "Blue-green deployments",
        "DNS automation",
        "Rollback capabilities",
        "Migration validation"
      ]
    }
  ];

  const platformBenefits = [
    {
      metric: "50-70%",
      label: "Average Cost Reduction",
      description: "Typical savings achieved through AI-driven optimization"
    },
    {
      metric: "15 min",
      label: "Deployment Time",
      description: "From scan to optimized infrastructure deployment"
    },
    {
      metric: "99.9%",
      label: "Uptime Guarantee",
      description: "Maintained during migration and optimization"
    },
    {
      metric: "24/7",
      label: "Continuous Monitoring",
      description: "AI-powered monitoring and auto-optimization"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-info/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Platform Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-info bg-clip-text text-transparent">
              Complete Infrastructure Optimization Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              OpsCut combines AI-powered analysis, automated optimization, and seamless deployment 
              to transform your cloud infrastructure into a cost-efficient, high-performance environment.
            </p>
          </div>

          {/* Platform Benefits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {platformBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border/40 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.metric}</div>
                  <div className="font-semibold mb-1">{benefit.label}</div>
                  <div className="text-sm text-muted-foreground">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Technical Specifications */}
          <Card className="mb-16 border-border/40 bg-card/80 backdrop-blur-sm shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Server className="w-7 h-7 text-primary" />
                Technical Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-primary" />
                    Cloud Providers
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Amazon Web Services (AWS)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Microsoft Azure
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Google Cloud Platform (GCP)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Hybrid & Multi-cloud
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Supported Services
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Compute (EC2, VMs, GCE)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Storage (S3, Blob, Cloud Storage)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Databases (RDS, SQL, Cloud SQL)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      Networking & Load Balancers
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Security & Compliance
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      SOC 2 Type II Certified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      GDPR Compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      ISO 27001 Certified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      End-to-end Encryption
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="inline-block p-8 border-border/40 bg-gradient-to-br from-primary/5 to-info/5 backdrop-blur-sm shadow-glow">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Infrastructure?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join thousands of companies already saving millions with OpsCut's AI-powered optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 shadow-lg">
                  Start Free Analysis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Book Demo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}