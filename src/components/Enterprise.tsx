import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Building2, 
  Shield, 
  Users, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Crown,
  Lock,
  Clock,
  Headphones,
  Settings,
  Database,
  Network,
  BarChart3,
  Award,
  Phone,
  Mail,
  Calendar
} from "lucide-react";

export function Enterprise() {
  const enterpriseFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Enterprise Security",
      description: "Advanced security controls with SOC 2, HIPAA, and custom compliance frameworks.",
      features: [
        "Single Sign-On (SSO) integration",
        "Advanced audit logging",
        "Custom security policies",
        "End-to-end encryption"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-info" />,
      title: "Dedicated Support",
      description: "24/7 priority support with dedicated customer success managers and SLA guarantees.",
      features: [
        "Dedicated customer success manager",
        "Priority support queue",
        "99.9% uptime SLA",
        "Custom training programs"
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-success" />,
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing enterprise tools and workflows.",
      features: [
        "Custom API integrations",
        "Webhook support",
        "ITSM tool integration",
        "CI/CD pipeline integration"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-warning" />,
      title: "Private Cloud Deployment",
      description: "Deploy OpsCut in your own environment with complete data sovereignty.",
      features: [
        "On-premises deployment",
        "Private cloud hosting",
        "Air-gapped environments",
        "Custom data residency"
      ]
    }
  ];

  const industryUseCases = [
    {
      industry: "Financial Services",
      icon: <Building2 className="w-8 h-8 text-primary" />,
      challenges: [
        "Regulatory compliance requirements",
        "High availability demands",
        "Data sovereignty concerns",
        "Cost optimization at scale"
      ],
      solutions: [
        "GDPR & SOX compliance automation",
        "99.99% uptime SLA",
        "Regional data residency",
        "Automated cost governance"
      ]
    },
    {
      industry: "Healthcare",
      icon: <Shield className="w-8 h-8 text-success" />,
      challenges: [
        "HIPAA compliance requirements",
        "Patient data protection",
        "Legacy system integration",
        "Cost containment pressures"
      ],
      solutions: [
        "HIPAA-compliant infrastructure",
        "Advanced encryption & access controls",
        "Seamless legacy integration",
        "Transparent cost reporting"
      ]
    },
    {
      industry: "Government",
      icon: <Lock className="w-8 h-8 text-info" />,
      challenges: [
        "FedRAMP compliance",
        "Air-gapped environments",
        "Budget constraints",
        "Legacy modernization"
      ],
      solutions: [
        "FedRAMP authorized platform",
        "On-premises deployment options",
        "Cost optimization frameworks",
        "Migration planning & execution"
      ]
    }
  ];

  const supportTiers = [
    {
      title: "Standard Enterprise",
      features: [
        "24/7 email & chat support",
        "4-hour response time",
        "Monthly business reviews",
        "Standard onboarding"
      ]
    },
    {
      title: "Premium Enterprise",
      features: [
        "24/7 phone support",
        "1-hour response time",
        "Weekly optimization reviews",
        "White-glove onboarding"
      ]
    },
    {
      title: "Enterprise Plus",
      features: [
        "Dedicated success manager",
        "15-minute response time",
        "Real-time optimization alerts",
        "Custom implementation"
      ]
    }
  ];

  const stats = [
    { metric: "500+", label: "Enterprise Customers" },
    { metric: "$50M+", label: "Total Customer Savings" },
    { metric: "99.99%", label: "Enterprise SLA Uptime" },
    { metric: "30 days", label: "Average Implementation" }
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
              <Crown className="w-3 h-3 mr-1" />
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-info bg-clip-text text-transparent">
              Scale Your Cloud Optimization Enterprise-Wide
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Purpose-built for large organizations with complex infrastructure needs. 
              Get enterprise-grade security, compliance, and support with guaranteed ROI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border/40 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Features */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Enterprise-Grade Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <Card key={index} className="border-border/40 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-info/20 rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Use Cases */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Industry-Specific Solutions</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {industryUseCases.map((useCase, index) => (
                <Card key={index} className="border-border/40 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {useCase.icon}
                      <CardTitle className="text-xl">{useCase.industry}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Common Challenges</h4>
                      <ul className="space-y-2">
                        {useCase.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-success">Our Solutions</h4>
                      <ul className="space-y-2">
                        {useCase.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="text-sm flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Tiers */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Enterprise Support Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportTiers.map((tier, index) => (
                <Card key={index} className={`border-border/40 bg-card/80 backdrop-blur-sm transition-all duration-300 ${
                  index === 1 ? 'border-primary shadow-glow scale-105' : 'hover:shadow-glow'
                }`}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Headphones className="w-5 h-5 text-primary" />
                      {tier.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <Card className="mb-16 border-border/40 bg-card/80 backdrop-blur-sm shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BarChart3 className="w-7 h-7 text-primary" />
                Enterprise ROI Calculator
              </CardTitle>
              <p className="text-muted-foreground">
                See how much your organization could save with OpsCut Enterprise.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Cloud Spend</label>
                    <Input placeholder="$50,000" className="bg-input-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Cloud Resources</label>
                    <Input placeholder="500" className="bg-input-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Manual Optimization Hours/Month</label>
                    <Input placeholder="40" className="bg-input-background" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90">
                    Calculate Savings
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-info/5 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Estimated Annual Savings</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cost Optimization:</span>
                      <span className="font-semibold text-success">$360,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Operational Efficiency:</span>
                      <span className="font-semibold text-success">$120,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Reduced Downtime:</span>
                      <span className="font-semibold text-success">$80,000</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold">Total Annual Savings:</span>
                      <span className="font-bold text-success text-2xl">$560,000</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      *Based on average enterprise customer savings
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our enterprise team is ready to help you design a custom solution that meets 
                your organization's specific needs and compliance requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>enterprise@opscut.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Schedule a consultation</span>
                </div>
              </div>
            </div>

            <Card className="border-border/40 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Enterprise Sales</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Get a personalized demo and custom pricing for your organization.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" className="bg-input-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-input-background" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-input-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Acme Corp" className="bg-input-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Cloud Spend</label>
                  <Input placeholder="$50,000+" className="bg-input-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your needs</label>
                  <Textarea 
                    placeholder="Describe your infrastructure and optimization goals..."
                    className="bg-input-background min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90">
                  Request Enterprise Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}