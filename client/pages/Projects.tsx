import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HorizontalTestimonialScroll from "@/components/HorizontalTestimonialScroll";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Users,
  Award,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TradeSense AI Dashboard",
      description:
        "AI-powered trading analytics platform with real-time market insights and automated trading signals.",
      tech: ["React", "Node.js", "PostgreSQL", "AI APIs"],
      href: "/projects/1",
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
      metrics: {
        improvement: "156%",
        label: "Avg. User ROI",
      },
      testimonial: {
        author: "Michael Chen",
        title: "Portfolio Manager",
        text: "TradeSense transformed our trading strategy. We've increased ROI significantly with AI-driven insights.",
        rating: 5,
      },
      beforeAfter: {
        before: "Manual analysis took 8+ hours daily",
        after: "Real-time insights in seconds",
      },
    },
    {
      id: 2,
      title: "AutoSupport Chatbot",
      description:
        "Intelligent customer support chatbot integrated with websites for 24/7 customer assistance.",
      tech: ["Node.js", "LangChain", "AI APIs", "React"],
      href: "/projects/2",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      metrics: {
        improvement: "85%",
        label: "Support Cost Reduction",
      },
      testimonial: {
        author: "Sarah Williams",
        title: "Customer Success Manager",
        text: "Our support team now handles complex issues while the chatbot manages routine questions efficiently.",
        rating: 5,
      },
      beforeAfter: {
        before: "10 support staff handling 1000+ queries/day",
        after: "4 staff + AI handling 5000+ queries/day",
      },
    },
    {
      id: 3,
      title: "StartupFlow MVP",
      description:
        "Comprehensive project management tool designed specifically for startup teams and rapid collaboration.",
      tech: ["MERN Stack", "Docker", "AWS", "Tailwind"],
      href: "/projects/3",
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      metrics: {
        improvement: "340%",
        label: "Team Productivity",
      },
      testimonial: {
        author: "David Kumar",
        title: "Startup Founder",
        text: "StartupFlow streamlined our team's workflow. We went from scattered tools to a unified platform.",
        rating: 5,
      },
      beforeAfter: {
        before: "5 different tools causing workflow friction",
        after: "Single platform with unified workflows",
      },
    },
    {
      id: 4,
      title: "DevAssist Copilot",
      description:
        "AI-powered coding assistant that helps developers write better code faster with intelligent suggestions.",
      tech: ["Java", "Node.js", "AI APIs", "VS Code"],
      href: "/projects/4",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      metrics: {
        improvement: "42%",
        label: "Development Speed",
      },
      testimonial: {
        author: "Emma Rodriguez",
        title: "Lead Developer",
        text: "DevAssist Copilot reduced our development time significantly. The code suggestions are incredibly accurate.",
        rating: 5,
      },
      beforeAfter: {
        before: "Manual code review cycle took 3-4 days",
        after: "Real-time suggestions during development",
      },
    },
    {
      id: 5,
      title: "SecureVault",
      description:
        "Enterprise-grade password management and credential storage solution with zero-knowledge architecture.",
      tech: ["React", "Go", "PostgreSQL", "Encryption"],
      href: "/projects/5",
      image: "bg-gradient-to-br from-red-500 to-rose-600",
      metrics: {
        improvement: "100%",
        label: "Security Compliance",
      },
      testimonial: {
        author: "James Patterson",
        title: "Security Director",
        text: "SecureVault exceeded our security standards. Our team feels confident about credential management.",
        rating: 5,
      },
      beforeAfter: {
        before: "Multiple password managers with compliance gaps",
        after: "Zero-trust, fully compliant centralized system",
      },
    },
    {
      id: 6,
      title: "AnalyticsPro",
      description:
        "Real-time business intelligence platform with customizable dashboards and predictive analytics.",
      tech: ["Vue", "Python", "BigQuery", "D3.js"],
      href: "/projects/6",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      metrics: {
        improvement: "220%",
        label: "Business Insights",
      },
      testimonial: {
        author: "Lisa Johnson",
        title: "Data Analyst",
        text: "AnalyticsPro enabled us to discover insights we never knew existed. Decision-making is now data-driven.",
        rating: 5,
      },
      beforeAfter: {
        before: "Static monthly reports",
        after: "Real-time dashboards with AI predictions",
      },
    },
  ];

  const testimonials = [
    {
      author: "Michael Chen",
      title: "Portfolio Manager",
      company: "Global Trading Group",
      text: "TradeSense transformed our trading strategy. We've increased ROI significantly with AI-driven insights. Highly recommended!",
      rating: 5,
      image: "MC",
    },
    {
      author: "Sarah Williams",
      title: "Customer Success Manager",
      company: "TechWave Solutions",
      text: "AutoSupport chatbot reduced our support costs by 85%. Customer satisfaction improved dramatically. Amazing platform!",
      rating: 5,
      image: "SW",
    },
    {
      author: "David Kumar",
      title: "Startup Founder",
      company: "InnovateLabs",
      text: "StartupFlow streamlined our entire workflow. We went from 5 tools to 1 unified platform. Game-changer!",
      rating: 5,
      image: "DK",
    },
    {
      author: "Emma Rodriguez",
      title: "Lead Developer",
      company: "CodeFlow Inc.",
      text: "DevAssist Copilot reduced development time by 42%. The code suggestions are incredibly accurate and context-aware.",
      rating: 5,
      image: "ER",
    },
    {
      author: "James Patterson",
      title: "Security Director",
      company: "SecureVault Ltd",
      text: "SecureVault exceeded our security standards. Zero-trust architecture gives us complete peace of mind.",
      rating: 5,
      image: "JP",
    },
    {
      author: "Lisa Johnson",
      title: "Data Analyst",
      company: "Analytics Corp",
      text: "AnalyticsPro enabled us to discover insights we never knew existed. Decision-making is now truly data-driven.",
      rating: 5,
      image: "LJ",
    },
    {
      author: "Marcus Thompson",
      title: "CTO",
      company: "TechVentures Inc",
      text: "The team's technical expertise is unmatched. They delivered our project 2 weeks ahead of schedule. Exceptional!",
      rating: 5,
      image: "MT",
    },
    {
      author: "Priya Desai",
      title: "Product Manager",
      company: "InnovateSoft",
      text: "Working with FixBitAI was a breeze. Their communication, technical skills, and commitment to quality are outstanding.",
      rating: 5,
      image: "PD",
    },
    {
      author: "Robert Wilson",
      title: "Operations Manager",
      company: "Global Logistics",
      text: "FixBitAI transformed our operations. The custom solution they built saved us thousands monthly. Highly satisfied!",
      rating: 5,
      image: "RW",
    },
    {
      author: "Nina Patel",
      title: "Founder",
      company: "Startup Hub",
      text: "As a startup, we needed affordable yet powerful solutions. FixBitAI delivered beyond expectations. Fantastic team!",
      rating: 5,
      image: "NP",
    },
    {
      author: "Alex Chen",
      title: "Engineering Lead",
      company: "CloudScale Systems",
      text: "Their AI expertise is world-class. They integrated cutting-edge AI into our platform seamlessly. Brilliant work!",
      rating: 5,
      image: "AC",
    },
    {
      author: "Sofia Martinez",
      title: "VP Product",
      company: "FinTech Innovations",
      text: "FixBitAI's attention to detail and user-centric approach is refreshing. Our product is now industry-leading!",
      rating: 5,
      image: "SM",
    },
  ];

  const companyStats = [
    {
      icon: Award,
      stat: "50+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      stat: "100+",
      label: "Happy Clients",
    },
    {
      icon: TrendingUp,
      stat: "12M+",
      label: "Revenue Impact",
    },
    {
      icon: Clock,
      stat: "99.9%",
      label: "Uptime Average",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the projects we've built that showcase our expertise and
            commitment to excellence. See real results from real clients.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.href}
                className="group h-full"
              >
                <div className="bg-white border border-border rounded-lg overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:border-primary">
                  {/* Project Image Placeholder */}
                  <div
                    className={`h-48 ${project.image} flex items-center justify-center text-white text-2xl font-bold`}
                  >
                    {project.title.split(" ")[0]}
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Before/After Metrics */}
                    <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">
                            BEFORE
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {project.beforeAfter.before}
                          </p>
                        </div>
                        <div className="h-12 w-0.5 bg-border" />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">
                            AFTER
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {project.beforeAfter.after}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="mb-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">
                        KEY METRIC
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {project.metrics.improvement}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {project.metrics.label}
                      </p>
                    </div>

                    {/* Client Testimonial Preview */}
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex gap-1 mb-2">
                        {[...Array(project.testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-3">
                        "{project.testimonial.text.substring(0, 80)}..."
                      </p>
                      <p className="text-xs font-semibold text-foreground">
                        {project.testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {project.testimonial.title}
                      </p>
                    </div>

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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            What Our Clients Say
          </h2>
          <HorizontalTestimonialScroll testimonials={testimonials} scrollSpeed={0.5} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Case Studies
          </h2>
          <div className="space-y-8">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to={project.href}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                    <h4 className="font-semibold text-foreground mb-4">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6">
                      {project.beforeAfter.before}
                    </p>

                    <h4 className="font-semibold text-foreground mb-4">
                      Solution
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {project.tech.map((tech) => (
                        <li key={tech} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-4">
                      Results
                    </h4>
                    <div className="mb-6">
                      <p className="text-4xl font-bold text-primary">
                        {project.metrics.improvement}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.metrics.label}
                      </p>
                    </div>

                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Outcome
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.beforeAfter.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} to={project.href}>
                <div className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
                  <div
                    className={`${project.image} w-full h-full flex items-center justify-center text-white text-lg font-semibold group-hover:scale-105 transition-transform duration-300`}
                  >
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 text-gray-100">
            Let's collaborate and bring your vision to life. Our proven track
            record speaks for itself.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
