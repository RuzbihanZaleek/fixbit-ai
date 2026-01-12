import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Heart,
  Handshake,
  Award,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly explore new technologies and methodologies to stay at the forefront of software development.",
    },
    {
      icon: Target,
      title: "Quality",
      description:
        "Every line of code, design decision, and feature undergoes rigorous testing and refinement.",
    },
    {
      icon: Heart,
      title: "Transparency",
      description:
        "Open communication and honesty are fundamental to how we work with our clients.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description:
        "We view our clients as partners and are committed to their continued success beyond project delivery.",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "15+ years in software development and entrepreneurship. Led teams at Fortune 500 companies before founding FixBitAI.",
      expertise: ["Strategy", "Full-Stack Dev", "AI/ML"],
      image: "AM",
    },
    {
      name: "Dr. Priya Patel",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science specializing in AI and machine learning. Published researcher with 12+ years of tech leadership.",
      expertise: ["AI/ML", "Cloud Architecture", "DevOps"],
      image: "PP",
    },
    {
      name: "James Chen",
      role: "VP of Product",
      bio: "Product strategist with a track record of launching successful SaaS products. Focused on customer-centric design.",
      expertise: ["Product Design", "UX/UI", "Strategy"],
      image: "JC",
    },
    {
      name: "Maya Rodriguez",
      role: "Lead Full-Stack Developer",
      bio: "Expert in modern web technologies and scalable architectures. Passionate about mentoring junior developers.",
      expertise: ["React", "Node.js", "PostgreSQL"],
      image: "MR",
    },
    {
      name: "Ravi Kapoor",
      role: "AI/ML Engineer",
      bio: "Specialized in building intelligent systems and neural networks. Previously at leading AI research labs.",
      expertise: ["Python", "TensorFlow", "LLMs"],
      image: "RK",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Client Success",
      bio: "Customer-focused leader dedicated to ensuring client success and satisfaction. 10+ years in account management.",
      expertise: ["Client Relations", "Project Management", "Support"],
      image: "SJ",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to make AI accessible to businesses of all sizes.",
    },
    {
      year: "2020",
      title: "First 10 Clients",
      description: "Delivered solutions to early adopters in fintech and e-commerce sectors.",
    },
    {
      year: "2021",
      title: "Series A Milestone",
      description: "Reached $1M in annual revenue and expanded team to 15 members.",
    },
    {
      year: "2022",
      title: "50+ Projects Delivered",
      description: "Successfully completed projects across 12 different industries.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named one of the Top 10 AI Solution Providers by TechCrunch.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across North America, Europe, and Asia.",
    },
  ];

  const awards = [
    {
      icon: Award,
      title: "Best AI Solution Provider",
      issuer: "TechCrunch Awards",
      year: "2023",
    },
    {
      icon: Zap,
      title: "Excellence in Innovation",
      issuer: "Global Tech Summit",
      year: "2023",
    },
    {
      icon: Award,
      title: "Top Startup to Watch",
      issuer: "Forbes",
      year: "2022",
    },
    {
      icon: Zap,
      title: "Best Customer Service",
      issuer: "G2 Reviews",
      year: "2023",
    },
  ];

  const companyStats = [
    {
      icon: Users,
      number: "100+",
      label: "Satisfied Clients",
      description: "From startups to enterprises",
    },
    {
      icon: TrendingUp,
      number: "50+",
      label: "Projects Completed",
      description: "Across diverse industries",
    },
    {
      icon: Award,
      number: "30+",
      label: "Team Members",
      description: "World-class experts",
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Client Satisfaction",
      description: "Average rating across all projects",
    },
  ];

  const culturePillars = [
    {
      title: "Continuous Learning",
      description:
        "We invest in our team's growth through courses, conferences, and mentorship programs. Every quarter, team members learn new technologies and skills.",
      highlight: "50+ hours of learning per employee annually",
    },
    {
      title: "Work-Life Balance",
      description:
        "We believe great work comes from rested minds. Flexible schedules, remote work options, and wellness programs are core to our culture.",
      highlight: "4-week PTO + flexible hours",
    },
    {
      title: "Inclusive & Diverse",
      description:
        "Our team brings together talented individuals from 15+ countries. We celebrate diversity and foster an inclusive environment where everyone thrives.",
      highlight: "40% women in technical roles",
    },
    {
      title: "Innovation & Autonomy",
      description:
        "We encourage our team to experiment, take risks, and lead projects. Innovation is rewarded and autonomy is trusted.",
      highlight: "20% time for side projects",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            About FixBitAI
          </h1>
          <p className="text-xl text-muted-foreground">
            We're a team of passionate software engineers and AI experts
            dedicated to building smart, scalable solutions for modern
            businesses.
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
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At FixBitAI, we build smart, scalable, and AI-powered software
                solutions to help businesses grow. We believe that great
                technology should be accessible to all companies, regardless of
                size.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower businesses with cutting-edge software
                and AI solutions that solve real problems, improve efficiency,
                and unlock new growth opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To become the trusted partner for businesses seeking innovative,
                reliable, and scalable software solutions powered by artificial
                intelligence.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a future where every business, regardless of size or
                industry, has access to world-class software and AI technologies
                that drive their success.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company History & Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Company History & Milestones
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8`}>
                  <div className="md:w-1/2">
                    <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <p className="text-primary font-bold text-lg">
                        {milestone.year}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Team
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Exceptional people driving exceptional results. Our diverse team
            brings together world-class expertise across software development,
            AI, and product strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Avatar Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold">
                  {member.image}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {award.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {award.issuer}
                      </p>
                      <p className="text-primary font-semibold text-sm mt-2">
                        {award.year}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Culture
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            At FixBitAI, we've built a culture where innovation thrives,
            people grow, and impact matters. This is where great ideas become
            reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {culturePillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/50 to-secondary border border-border rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mb-4">{pillar.description}</p>
                <div className="bg-white border border-border rounded-lg p-4">
                  <p className="text-sm font-semibold text-primary">
                    {pillar.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Culture Photos Grid */}
          <div className="bg-white rounded-lg border border-border overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { bg: "bg-gradient-to-br from-blue-400 to-blue-600", label: "Team Collaboration" },
                { bg: "bg-gradient-to-br from-green-400 to-green-600", label: "Learning & Growth" },
                { bg: "bg-gradient-to-br from-purple-400 to-purple-600", label: "Company Events" },
                { bg: "bg-gradient-to-br from-pink-400 to-pink-600", label: "Innovation Hub" },
                { bg: "bg-gradient-to-br from-yellow-400 to-yellow-600", label: "Remote Flexibility" },
                { bg: "bg-gradient-to-br from-indigo-400 to-indigo-600", label: "Wellness Programs" },
                { bg: "bg-gradient-to-br from-teal-400 to-teal-600", label: "Diversity & Inclusion" },
                { bg: "bg-gradient-to-br from-orange-400 to-orange-600", label: "Community Impact" },
              ].map((image, index) => (
                <div
                  key={index}
                  className={`${image.bg} h-40 sm:h-48 flex items-center justify-center text-white font-semibold text-center p-4 border-b border-r border-white/20 text-sm cursor-pointer hover:brightness-110 transition-all`}
                >
                  {image.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Technical Expertise",
                description:
                  "Our team consists of seasoned developers with expertise across multiple frameworks, languages, and platforms.",
              },
              {
                title: "AI-First Approach",
                description:
                  "We integrate AI and machine learning into our solutions to provide intelligent, adaptive systems.",
              },
              {
                title: "Customer-Centric Design",
                description:
                  "Every project starts with understanding your business, goals, and users to deliver meaningful solutions.",
              },
              {
                title: "Scalability at Core",
                description:
                  "We design systems that grow with your business, from MVP to enterprise-level applications.",
              },
              {
                title: "Proven Track Record",
                description:
                  "We've successfully delivered hundreds of projects for startups, SMBs, and established companies.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Your success doesn't end at launch. We provide continuous support, maintenance, and optimization.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Let's discuss how we can help your business achieve its goals with
            smart software solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
