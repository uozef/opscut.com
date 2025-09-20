import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Download,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  Star,
  Play,
  Globe,
  MessageCircle,
  Code,
  Lightbulb,
  TrendingUp,
  Shield
} from "lucide-react";

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: string;
  readTime?: string;
  date?: string;
  link: string;
  featured?: boolean;
}

function ResourceCard({ icon, title, description, type, readTime, date, link, featured }: ResourceCardProps) {
  return (
    <Card className={`group transition-all duration-500 hover:shadow-glow-lg ${
      featured ? 'border-primary shadow-glow' : 'border-border/40'
    } bg-card/80 backdrop-blur-sm`}>
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-info/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-info/30 transition-colors">
            {icon}
          </div>
          <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-info/10 text-primary border-primary/20">
            {type}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {readTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </div>
            )}
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" className="group-hover:text-primary">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function Resources() {
  const featuredResources = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Complete Guide to Cloud Cost Optimization",
      description: "Learn proven strategies to reduce your cloud costs by 50-70% without compromising performance.",
      type: "Guide",
      readTime: "15 min read",
      date: "Dec 2024",
      link: "#",
      featured: true
    },
    {
      icon: <Video className="w-6 h-6 text-info" />,
      title: "Infrastructure as Code Best Practices",
      description: "Master the art of IaC with our comprehensive video series covering Terraform, CloudFormation, and more.",
      type: "Video Series",
      readTime: "2 hours",
      date: "Nov 2024",
      link: "#"
    },
    {
      icon: <FileText className="w-6 h-6 text-success" />,
      title: "Multi-Cloud Migration Strategies",
      description: "Step-by-step playbook for migrating workloads across cloud providers with zero downtime.",
      type: "Whitepaper",
      readTime: "20 min read",
      date: "Dec 2024",
      link: "#"
    }
  ];

  const documentationSections = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "API Documentation",
      description: "Comprehensive API reference with examples and SDKs",
      items: ["REST API Reference", "Python SDK", "Node.js SDK", "CLI Tools"]
    },
    {
      icon: <Play className="w-6 h-6 text-info" />,
      title: "Getting Started",
      description: "Quick start guides and tutorials for new users",
      items: ["5-minute Quickstart", "Platform Overview", "First Scan Tutorial", "Dashboard Guide"]
    },
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Security & Compliance",
      description: "Security documentation and compliance frameworks",
      items: ["Security Overview", "SOC 2 Report", "GDPR Compliance", "Data Protection"]
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-warning" />,
      title: "Best Practices",
      description: "Industry best practices and optimization tips",
      items: ["Cost Optimization", "Security Hardening", "Performance Tuning", "Migration Strategies"]
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp",
      industry: "SaaS",
      savings: "$2.4M annually",
      description: "Reduced AWS costs by 65% while improving performance and security posture."
    },
    {
      company: "FinanceFlow",
      industry: "Fintech", 
      savings: "$890K annually",
      description: "Multi-cloud optimization across AWS and Azure with automated compliance."
    },
    {
      company: "HealthTech Inc",
      industry: "Healthcare",
      savings: "$1.2M annually",
      description: "HIPAA-compliant infrastructure optimization with 99.99% uptime maintained."
    }
  ];

  const communityStats = [
    { metric: "15K+", label: "Community Members" },
    { metric: "500+", label: "Published Resources" },
    { metric: "24/7", label: "Community Support" },
    { metric: "98%", label: "Satisfaction Rate" }
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
              Resources & Learning
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-info bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, tutorials, and resources to help you master cloud cost optimization 
              and get the most out of the OpsCut platform.
            </p>
          </div>

          {/* Featured Resources */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-6 h-6 text-primary" />
              Featured Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Documentation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documentationSections.map((section, index) => (
                <Card key={index} className="border-border/40 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-info/20 rounded-xl flex items-center justify-center mb-3">
                      {section.icon}
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Customer Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-border/40 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-lg">{study.company}</CardTitle>
                      <Badge variant="outline">{study.industry}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-success">{study.savings}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                      Read full case study <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <Card className="mb-16 border-border/40 bg-card/80 backdrop-blur-sm shadow-glow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Join Our Community</CardTitle>
                  <p className="text-muted-foreground">Connect with cloud optimization experts and peers</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.metric}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <MessageCircle className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Discord Community</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get real-time help from our community of cloud experts.
                    </p>
                    <Button variant="outline" size="sm">Join Discord</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <Globe className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Knowledge Base</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Searchable database of tutorials and troubleshooting guides.
                    </p>
                    <Button variant="outline" size="sm">Browse Articles</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-border/40">
                  <CardContent className="p-6">
                    <Video className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Webinar Series</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Monthly webinars covering advanced optimization techniques.
                    </p>
                    <Button variant="outline" size="sm">Register Now</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="inline-block p-8 border-border/40 bg-gradient-to-br from-primary/5 to-info/5 backdrop-blur-sm shadow-glow">
              <h3 className="text-2xl font-bold mb-4">Need Personalized Help?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Our team of cloud optimization experts is ready to help you succeed with OpsCut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 shadow-lg">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resources
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}