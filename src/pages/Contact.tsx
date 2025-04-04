"use client";

import { Send, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ZodError } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";

import { config } from "../lib/config";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      contactFormSchema.shape[name].parse(value);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors[0]?.message || "Invalid input";
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      }
      return false;
    }
  };

  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactFormData, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate all fields before submission
      const validatedData = contactFormSchema.parse(formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (response.status === 429) {
        const resetTime = new Date(data.remainingTime);
        const timeUntilReset = Math.ceil((resetTime.getTime() - Date.now()) / (1000 * 60));

        toast({
          title: "Rate Limit Exceeded",
          description: `You've reached the maximum number of messages. Please try again in ${timeUntilReset} minutes.`,
          variant: "destructive",
        });
        return;
      }

      if (data.success) {
        toast({
          title: "Message sent!",
          description:
            data.remainingAttempts > 0
              ? `We'll get back to you as soon as possible. You have ${data.remainingAttempts} messages remaining.`
              : "We'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        setErrors({});
      } else {
        if (data.errors) {
          const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
          data.errors.forEach((err: { field: keyof ContactFormData; message: string }) => {
            newErrors[err.field] = err.message;
          });
          setErrors(newErrors);
        }
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message || "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Slimmer Hero Section */}
      <section className="bg-collective-beige/30 py-10 md:py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <h1 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">Get in Touch</h1>
              <p className="max-w-xl text-lg opacity-75">
                Send us your proposal or book a 30-minute call to discuss your ideas.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline">
                <a href={`mailto:${config.email}`}>
                  Email us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-collective-beige/50">
        <div className="section-inner">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Send us a message</h2>
              <p className="mb-8 opacity-75">
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
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
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
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
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
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting || hasErrors()} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="-ml-1 mr-3 h-4 w-4 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
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
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <p className="mb-8 opacity-75">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-collective-black p-3 text-collective-beige">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-collective-orange hover:underline">
                        <a href={`mailto:${config.email}`}>{config.email}</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-collective-black p-3 text-collective-beige">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">Global Team</h3>
                      <p className="opacity-75">
                        We're a remote-first team with members across Europe, North America, and
                        Latin America.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-collective-black p-8 text-collective-beige">
                <h3 className="mb-4 text-xl font-bold">Book a Call</h3>
                <p className="mb-6 opacity-75">
                  Schedule a 30-minute call with our team to discuss your project in detail.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-collective-beige bg-transparent text-collective-beige hover:bg-collective-beige/10"
                >
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
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg opacity-75">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
    <div className="rounded-lg border border-collective-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-3 text-lg font-bold">{question}</h3>
      <p className="opacity-75">{answer}</p>
    </div>
  );
};

export default Contact;
