import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code,
  Zap,
  Shield,
  Rocket,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Web & Mobile Development",
      description:
        "Custom web applications, SaaS platforms, and admin dashboards built with modern tech stack.",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      href: "/services",
    },
    {
      id: 2,
      title: "AI & Automation Solutions",
      description:
        "Website AI chatbots, internal assistants, and customer support automation powered by LLMs.",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      href: "/services",
    },
    {
      id: 3,
      title: "DevOps & Cloud Services",
      description:
        "Dockerization, CI/CD pipelines, cloud deployments, and monitoring on AWS & DigitalOcean.",
      icon: Shield,
      color: "from-green-500 to-green-600",
      href: "/services",
    },
    {
      id: 4,
      title: "MVP & Startup Solutions",
      description:
        "Rapid prototyping and scalable architecture to bring your startup idea to market fast.",
      icon: Rocket,
      color: "from-orange-500 to-orange-600",
      href: "/services",
    },
    {
      id: 5,
      title: "AI Developer Tools",
      description:
        "Custom AI coding assistants and AI-powered developer productivity tools for modern teams.",
      icon: TrendingUp,
      color: "from-pink-500 to-pink-600",
      href: "/services",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Full-Stack Engineers",
      description:
        "Our team has years of experience across web, mobile, AI, and DevOps technologies.",
    },
    {
      icon: Zap,
      title: "AI-Driven Solutions",
      description:
        "We leverage cutting-edge AI and machine learning to solve complex business problems.",
    },
    {
      icon: Shield,
      title: "Scalable & Secure Architecture",
      description:
        "Every solution is built with security, scalability, and performance in mind.",
    },
    {
      icon: Rocket,
      title: "Fast MVP Delivery",
      description:
        "Transform your ideas into working products in record time without compromising quality.",
    },
    {
      icon: Code,
      title: "Industry Best Practices",
      description:
        "We follow SOLID principles, clean code standards, and modern development practices.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Support",
      description:
        "We're committed to your success with ongoing maintenance, updates, and optimization.",
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "TradeSense AI Dashboard",
      description:
        "AI-powered trading analytics platform with real-time market insights and automated trading signals.",
      tech: ["React", "Node.js", "PostgreSQL", "AI APIs"],
      href: "/projects/1",
    },
    {
      id: 2,
      title: "AutoSupport Chatbot",
      description:
        "Intelligent customer support chatbot integrated with websites for 24/7 customer assistance.",
      tech: ["Node.js", "LangChain", "AI APIs", "React"],
      href: "/projects/2",
    },
    {
      id: 3,
      title: "StartupFlow MVP",
      description:
        "Comprehensive project management tool designed specifically for startup teams and rapid collaboration.",
      tech: ["MERN Stack", "Docker", "AWS", "Tailwind"],
      href: "/projects/3",
    },
    {
      id: 4,
      title: "DevAssist Copilot",
      description:
        "AI-powered coding assistant that helps developers write better code faster with intelligent suggestions.",
      tech: ["Java", "Node.js", "AI APIs", "VS Code"],
      href: "/projects/4",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/17483910/pexels-photo-17483910.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-secondary/30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              FixBitAI – Smart Software Solutions & AI Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We build scalable web, mobile, AI, and automation solutions for
              modern businesses. Transform your ideas into market-ready products
              with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs.
              From web development to AI automation, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.href}
                  className="group h-full"
                >
                  <div className="bg-white border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose FixBitAI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose FixBitAI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional results and building
              long-term partnerships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects that showcase our expertise
              and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={project.href}
                className="group h-full"
              >
                <div className="bg-white border border-border rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-primary">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Let's discuss your project and find the perfect solution for your
            needs. Our team is ready to help you succeed.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
