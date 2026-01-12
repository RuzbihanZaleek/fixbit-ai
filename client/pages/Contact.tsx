import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, this is just a dummy submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a question or ready to start your project? We'd love to hear
            from you. Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:contact@fixbitai.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@fixbitai.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+94770000000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +94 77 000 0000
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-secondary/50 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-4">
                  Business Hours
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-semibold">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </p>
                  </div>
                )}
              </form>

              {/* Form Note */}
              <p className="text-sm text-muted-foreground mt-6">
                This contact form is currently a demonstration. For immediate
                assistance, please email us directly or call our phone number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary based on complexity and scope. Most MVPs take 4-8 weeks, while larger projects may take 3-6 months.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes! We provide maintenance, updates, and optimization services to ensure your software continues to perform optimally.",
              },
              {
                question: "What's your development process?",
                answer:
                  "We follow Agile methodology with regular sprints, client communication, and iterative improvements.",
              },
              {
                question: "Can you work with our existing systems?",
                answer:
                  "Absolutely! We specialize in integrating with existing systems and APIs to extend functionality.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-lg p-6"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Don't wait any longer. Let's schedule a consultation to discuss your
            vision and how we can help bring it to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Link to="/contact">
              Schedule a Call
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
