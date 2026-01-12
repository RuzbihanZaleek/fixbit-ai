import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();

  const projectsMap: { [key: string]: any } = {
    "1": {
      title: "TradeSense AI Dashboard",
      shortDesc: "AI-powered trading analytics platform",
      tech: ["React", "Node.js", "PostgreSQL", "AI APIs"],
      problem:
        "Traders needed real-time insights and automated signals to make better trading decisions in a fast-moving market.",
      solution:
        "We built an AI-powered dashboard that analyzes market data and provides actionable trading signals with machine learning predictions.",
      benefits: [
        "Reduced decision time by 70%",
        "Improved trading accuracy by 45%",
        "24/7 automated monitoring",
      ],
    },
    "2": {
      title: "AutoSupport Chatbot",
      shortDesc: "Intelligent customer support automation",
      tech: ["Node.js", "LangChain", "AI APIs", "React"],
      problem:
        "Customer support team was overwhelmed with repetitive queries, leading to long response times and customer dissatisfaction.",
      solution:
        "We implemented an AI chatbot that handles 80% of common queries automatically while seamlessly escalating complex issues to humans.",
      benefits: [
        "90% faster response time",
        "40% reduction in support costs",
        "24/7 availability",
      ],
    },
    "3": {
      title: "StartupFlow MVP",
      shortDesc: "Project management for startups",
      tech: ["MERN Stack", "Docker", "AWS", "Tailwind"],
      problem:
        "Startups needed a lightweight, affordable project management tool designed specifically for their fast-paced workflow.",
      solution:
        "We created StartupFlow, a collaborative project management tool with real-time updates, team communication, and task automation.",
      benefits: [
        "50% faster project delivery",
        "Improved team collaboration",
        "Cost-effective solution",
      ],
    },
    "4": {
      title: "DevAssist Copilot",
      shortDesc: "AI-powered coding assistant",
      tech: ["Java", "Node.js", "AI APIs", "VS Code"],
      problem:
        "Developers spent 30% of their time on repetitive coding tasks and debugging, reducing overall productivity.",
      solution:
        "We built an AI coding assistant that suggests code completions, identifies bugs, and optimizes performance in real-time.",
      benefits: [
        "30% faster coding",
        "Fewer bugs in production",
        "Better code quality",
      ],
    },
  };

  const project = projectsMap[id || "1"] || projectsMap["1"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Project Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Projects
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Problem & Solution */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  The Problem
                </h2>
                <p className="text-muted-foreground text-lg">
                  {project.problem}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground text-lg">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Results & Impact
              </h2>
              <div className="space-y-4">
                {project.benefits.map((benefit: string, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-border rounded-lg p-4"
                  >
                    <p className="text-foreground font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Expansion Prompt */}
          {/* <div className="mt-16 max-w-2xl bg-secondary/50 border border-border rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want More Details?
            </h3>
            <p className="text-muted-foreground mb-4">
              This project detail page currently shows a summary. I can expand
              it with:
            </p>
            <ul className="text-left text-muted-foreground space-y-2 max-w-sm mx-auto mb-6">
              <li>✓ Project gallery & screenshots</li>
              <li>✓ Technical architecture diagrams</li>
              <li>✓ Client testimonial video</li>
              <li>✓ Detailed timeline & milestones</li>
              <li>✓ Team members involved</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Let me know what additional details you'd like to add!
            </p>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Need Something Similar?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Let's discuss how we can build a custom solution tailored to your
            business needs.
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
