import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight,
  Sparkles,
  Crown,
  Building2,
  Phone
} from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  badge?: string;
  icon: React.ReactNode;
  features: string[];
  cta: string;
  popular?: boolean;
  enterprise?: boolean;
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups getting started with cloud optimization.",
      price: {
        monthly: 99,
        yearly: 79
      },
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Up to 50 cloud resources",
        "Infrastructure discovery & mapping",
        "Basic cost optimization recommendations",
        "Monthly reports",
        "Email support",
        "1 cloud provider",
        "Basic security scanning"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Advanced optimization for growing companies with complex infrastructure.",
      price: {
        monthly: 299,
        yearly: 239
      },
      badge: "Most Popular",
      popular: true,
      icon: <Star className="w-6 h-6" />,
      features: [
        "Up to 500 cloud resources",
        "Multi-cloud support (AWS, Azure, GCP)",
        "AI-powered optimization recommendations",
        "Automated cost optimization",
        "Weekly reports & insights",
        "Infrastructure as Code generation",
        "Priority support (24/7)",
        "Advanced security & compliance",
        "Custom dashboards",
        "API access"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations with mission-critical infrastructure.",
      price: {
        monthly: 999,
        yearly: 799
      },
      badge: "Best Value",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Unlimited cloud resources",
        "All cloud providers supported",
        "Real-time optimization & monitoring",
        "Automated infrastructure deployment",
        "Custom migration strategies",
        "Dedicated success manager",
        "SLA guarantees",
        "Advanced compliance frameworks",
        "White-label options",
        "Custom integrations",
        "On-premises deployment options"
      ],
      cta: "Contact Sales",
      enterprise: true
    }
  ];

  const enterpriseFeatures = [
    {
      title: "Dedicated Support",
      description: "24/7 dedicated support team with guaranteed response times"
    },
    {
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing tools and workflows"
    },
    {
      title: "SLA Guarantees",
      description: "99.9% uptime SLA with performance guarantees"
    },
    {
      title: "Advanced Compliance",
      description: "HIPAA, PCI DSS, SOX, and custom compliance frameworks"
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
              Pricing Plans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-info bg-clip-text text-transparent">
              Choose Your Optimization Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Start saving immediately with our transparent pricing. 
              All plans include a 14-day free trial with no credit card required.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`${!isYearly ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`${isYearly ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              <Badge variant="secondary" className="ml-2 bg-success/10 text-success border-success/20">
                Save 20%
              </Badge>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative transition-all duration-500 ${
                  plan.popular 
                    ? 'border-primary shadow-glow-lg scale-105' 
                    : 'border-border/40 hover:shadow-glow'
                } bg-card/80 backdrop-blur-sm`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-info text-white' 
                        : 'bg-gradient-to-r from-success to-emerald-600 text-white'
                    }`}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-primary to-info text-white' 
                        : 'bg-gradient-to-br from-primary/20 to-info/20 text-primary'
                    }`}>
                      {plan.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-success">
                        Save ${(plan.price.monthly - plan.price.yearly) * 12}/year
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 shadow-lg' 
                        : plan.enterprise
                        ? 'bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white'
                        : ''
                    }`}
                    variant={plan.popular ? "default" : plan.enterprise ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    {!plan.enterprise && <ArrowRight className="w-4 h-4 ml-2" />}
                    {plan.enterprise && <Phone className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Features */}
          <Card className="mb-16 border-border/40 bg-card/80 backdrop-blur-sm shadow-glow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Enterprise Solutions</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Tailored solutions for large organizations with complex infrastructure needs.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-info/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-12">
              <div>
                <h4 className="font-semibold mb-2">How does the free trial work?</h4>
                <p className="text-sm text-muted-foreground">
                  Get full access to all features for 14 days. No credit card required. 
                  Cancel anytime during the trial period.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I change plans anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. 
                  Changes take effect immediately with prorated billing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's included in support?</h4>
                <p className="text-sm text-muted-foreground">
                  All plans include comprehensive documentation, video tutorials, 
                  and access to our community. Higher tiers include priority support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is my data secure?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We're SOC 2 Type II certified with end-to-end encryption. 
                  Your infrastructure data never leaves your secure environment.
                </p>
              </div>
            </div>
            
            <Card className="inline-block p-6 border-border/40 bg-gradient-to-br from-primary/5 to-info/5 backdrop-blur-sm shadow-glow">
              <h4 className="font-semibold mb-2">Still have questions?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is here to help you choose the right plan for your needs.
              </p>
              <Button variant="outline">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}