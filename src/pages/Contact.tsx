"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { config } from '../lib/config';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24">
      {/* Slimmer Hero Section */}
      <section className="py-10 md:py-12 bg-collective-beige/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">Get in Touch</h1>
              <p className="text-lg opacity-75 max-w-xl">
                Send us your proposal or book a 30-minute call to discuss your ideas.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline">
                <a href={`mailto:${config.email}`}>Email us <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-collective-beige/50">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <p className="opacity-75 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Your company" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project..." 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="opacity-75 mb-8">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-collective-black text-collective-beige p-3 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-collective-orange hover:underline">
                        <a href={`mailto:${config.email}`}>
                          {config.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-collective-black text-collective-beige p-3 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Global Team</h3>
                      <p className="opacity-75">
                        We're a remote-first team with members across Europe, North America, and Latin America.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-collective-black text-collective-beige p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Book a Call</h3>
                <p className="opacity-75 mb-6">
                  Schedule a 30-minute call with our team to discuss your project in detail.
                </p>
                <Button variant="outline" className="w-full border-collective-beige text-collective-beige bg-transparent hover:bg-collective-beige/10">
                  Schedule Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto">
              Have questions? We've got answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FaqItem 
              question="What is your typical project timeline?"
              answer="Project timelines vary based on scope and complexity. We work in 2-week sprints and typically deliver small to medium projects within 2-3 months. Larger projects may take 4-6 months or more."
            />
            <FaqItem 
              question="Do you work with clients internationally?"
              answer="Yes, we're a remote-first team with experience working with clients across different time zones. We adapt our communication and meeting schedules to ensure smooth collaboration regardless of location."
            />
            <FaqItem 
              question="What is your approach to security and privacy?"
              answer="Security and privacy are foundational to everything we build. We implement industry best practices, conduct regular security audits, and design systems with privacy-by-design principles from the start."
            />
            <FaqItem 
              question="How do you handle project management and communication?"
              answer="While experienced with tools like Slack, Asana, Jira, and Notion, we prefer open-source alternatives like Rocket.Chat, Affine, and Jitsi. We adapt our tool stack to your preferences while maintaining efficient collaboration and regular updates."
            />
            <FaqItem 
              question="What technologies do you specialize in?"
              answer="We're technology generalists with expertise across the full stack, including mobile development (iOS, Android), DevOps, Web3, AI/ML, modern JavaScript (React, Next.js, Node.js), cloud platforms (AWS, GCP, Azure), and specialized domains like AgTech, traceability, and secure systems."
            />
            <FaqItem 
              question="Do you provide support after project completion?"
              answer="Yes, we offer ongoing maintenance and support packages tailored to your needs. We're committed to the long-term success of your project and can provide regular updates, bug fixes, and feature enhancements."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-collective-black/5">
      <h3 className="text-lg font-bold mb-3">{question}</h3>
      <p className="opacity-75">{answer}</p>
    </div>
  );
};

export default Contact;
