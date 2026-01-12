import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  MessageCircle,
  Cpu,
  Zap,
  Cloud,
  Rocket,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Application Development",
      description:
        "Custom web applications, SaaS platforms, admin dashboards, and internal business tools built with modern technologies.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "MongoDB"],
      benefits: [
        "Scalable web applications",
        "Real-time collaboration features",
        "Responsive design",
        "High-performance optimization",
      ],
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile Application Development",
      description:
        "Native and cross-platform Android & iOS apps with API-driven architecture and seamless user experience.",
      technologies: ["React Native", "Flutter", "Node.js", "Firebase", "iOS", "Android"],
      benefits: [
        "Cross-platform compatibility",
        "Native performance",
        "Offline functionality",
        "Push notifications",
      ],
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "AI Chatbots & Automation",
      description:
        "Intelligent website chatbots, internal AI assistants, and customer support automation powered by modern LLMs.",
      technologies: ["LLM APIs", "LangChain", "Node.js", "Python", "OpenAI", "Anthropic"],
      benefits: [
        "24/7 customer support",
        "Reduced response time",
        "Cost-effective automation",
        "Multi-language support",
      ],
    },
    {
      id: 4,
      icon: Cpu,
      title: "AI Developer Tools",
      description:
        "Custom AI coding assistants, code suggestion tools, and AI-powered developer productivity solutions.",
      technologies: ["LLM APIs", "Node.js", "Python", "IDE Integration", "AST Analysis"],
      benefits: [
        "Faster development cycles",
        "Code quality improvement",
        "Reduced debugging time",
        "Team productivity boost",
      ],
    },
    {
      id: 5,
      icon: Zap,
      title: "Workflow Automation & API Integration",
      description:
        "Business workflow automation, third-party API integrations, payment gateways, and CRM/ERP integrations.",
      technologies: ["Node.js", "REST APIs", "Zapier", "Webhooks", "Payment APIs"],
      benefits: [
        "Automated business processes",
        "Seamless integrations",
        "Reduced manual work",
        "Better data flow",
      ],
    },
    {
      id: 6,
      icon: Cloud,
      title: "DevOps & Cloud Services",
      description:
        "Dockerization, CI/CD pipelines, cloud deployments, monitoring, and maintenance on AWS, DigitalOcean, and more.",
      technologies: ["Docker", "Kubernetes", "AWS", "DigitalOcean", "GitHub Actions", "Jenkins"],
      benefits: [
        "Automated deployments",
        "High availability",
        "Cost optimization",
        "Security & compliance",
      ],
    },
    {
      id: 7,
      icon: Rocket,
      title: "MVP & Startup Solutions",
      description:
        "Rapid prototyping, idea validation, and scalable architecture designed specifically for startup growth.",
      technologies: ["MERN Stack", "Next.js", "Supabase", "Firebase", "Docker"],
      benefits: [
        "Quick time to market",
        "Flexible & scalable",
        "Cost-effective",
        "Future-proof architecture",
      ],
    },
    {
      id: 8,
      icon: GraduationCap,
      title: "Consulting & Training",
      description:
        "Architecture consulting, tech stack selection, and developer training in MERN, AI, DevOps, and modern practices.",
      technologies: ["Industry Best Practices", "Architecture Patterns", "Code Quality", "Security"],
      benefits: [
        "Expert guidance",
        "Team upskilling",
        "Best practices implementation",
        "Knowledge transfer",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive software solutions tailored to your business needs.
            From web development to AI automation, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure project success from
              start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description:
                  "We understand your business goals, requirements, and target audience to create a comprehensive plan.",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description:
                  "Expert architects design scalable, secure, and user-friendly solutions tailored to your needs.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Our developers build high-quality code following best practices with rigorous testing at every stage.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We deploy your solution with zero downtime and provide ongoing support and optimization.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "FixBitAI delivered our MVP in record time. Their team understood our vision perfectly and executed it flawlessly.",
                author: "Sarah Johnson",
                role: "CEO, TechStartup Co",
              },
              {
                quote:
                  "The quality of their code and attention to detail is exceptional. They're true professionals who genuinely care about results.",
                author: "Michael Chen",
                role: "CTO, Digital Solutions Inc",
              },
              {
                quote:
                  "We've worked with FixBitAI on multiple projects. They consistently deliver beyond expectations and provide excellent support.",
                author: "Emma Williams",
                role: "Founder, Innovation Labs",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Let's discuss your project and find the perfect service solution for
            your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
