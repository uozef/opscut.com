import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Lock
} from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Features", action: () => onNavigate?.('features') },
        { label: "Pricing", action: () => onNavigate?.('pricing') },
        { label: "Enterprise", action: () => onNavigate?.('enterprise') },
        { label: "API Documentation", action: () => {} }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", action: () => onNavigate?.('resources') },
        { label: "Help Center", action: () => {} },
        { label: "Community", action: () => {} },
        { label: "Blog", action: () => {} }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", action: () => {} },
        { label: "Careers", action: () => {} },
        { label: "Contact", action: () => {} },
        { label: "Press Kit", action: () => {} }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", action: () => {} },
        { label: "Terms of Service", action: () => {} },
        { label: "Security", action: () => {} },
        { label: "Compliance", action: () => {} }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const certifications = [
    { icon: <Shield className="w-5 h-5" />, label: "SOC 2 Type II" },
    { icon: <Lock className="w-5 h-5" />, label: "ISO 27001" },
    { icon: <Award className="w-5 h-5" />, label: "GDPR Compliant" }
  ];

  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-info rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                    OpsCut
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  AI-powered cloud infrastructure optimization platform that helps companies 
                  reduce costs by 50-70% while improving security and performance.
                </p>
                
                {/* Newsletter Signup */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Stay Updated</h4>
                  <div className="flex gap-2 max-w-sm">
                    <Input 
                      placeholder="Enter your email" 
                      className="flex-1 bg-input-background"
                    />
                    <Button size="sm" className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Get the latest updates on cloud optimization best practices.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>hello@opscut.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              {/* Links Sections */}
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-semibold">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <button
                          onClick={link.action}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Separator className="opacity-20" />

          {/* Bottom Footer */}
          <div className="py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                © 2024 OpsCut. All rights reserved.
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                    {cert.icon}
                    <span>{cert.label}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-muted/50 hover:bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}