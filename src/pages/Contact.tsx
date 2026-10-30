import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const Contact = () => {
  const { toast } = useToast();
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistComment, setWaitlistComment] = useState("");
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);
  const calendarButtonRef = useRef<HTMLDivElement>(null);
  const buttonInitialized = useRef(false);

  useEffect(() => {
    if (buttonInitialized.current) return;

    const initButton = () => {
      if (window.calendar && calendarButtonRef.current && !buttonInitialized.current) {
        buttonInitialized.current = true;
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ16gcU31mcua5u0S2DSxLuAb9GpgzEJ64JUI7WXtf0FuYaQj3DYGZw_oYeDg7UD4laatdPwyYfo?gv=true',
          color: '#f0f1f5',
          label: 'Book an appointment',
          target: calendarButtonRef.current,
        });
      }
    };

    // Add CSS if not present
    if (!document.getElementById('gcal-css')) {
      const link = document.createElement("link");
      link.id = 'gcal-css';
      link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Add script if not present, otherwise just init
    if (!document.getElementById('gcal-script')) {
      const script = document.createElement("script");
      script.id = 'gcal-script';
      script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = initButton;
      document.head.appendChild(script);
    } else if (window.calendar) {
      initButton();
    }
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    
    setIsWaitlistSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're on the list!",
      description: "We'll notify you when our product is ready.",
    });

    setWaitlistEmail("");
    setWaitlistComment("");
    setIsWaitlistSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "auscoradk@gmail.com",
      href: "mailto:auscoradk@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+45 50 29 98 13",
      href: "tel:+4550299813",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Centrifugevej 374, 2800 Kongens Lyngby",
      href: null,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions about our medical devices? We're here to help. 
              Reach out to our team for product information, demos, or partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Waiting List & Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Waiting List */}
            <div className="rounded-3xl bg-primary p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Ready to Make an Impact?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Join our waiting list and make sure you are shortlisted when our product is on the market.
              </p>
              <form onSubmit={handleWaitlistSubmit} className="mt-8 flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  required
                  maxLength={255}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Textarea
                  placeholder="Comments (optional)"
                  value={waitlistComment}
                  onChange={(e) => setWaitlistComment(e.target.value)}
                  maxLength={500}
                  rows={3}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button size="lg" variant="secondary" type="submit" disabled={isWaitlistSubmitting} className="self-start">
                  {isWaitlistSubmitting ? "Joining..." : "Join Waiting List"}
                </Button>
              </form>
              <div className="mt-6" ref={calendarButtonRef} />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Prefer to reach out directly? Contact us through any of these channels.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.label}</h3>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-6">
                <h3 className="font-display font-semibold text-foreground">
                  For Healthcare Professionals
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Request a product demonstration or consultation with our clinical specialists. 
                  We offer on-site and virtual demo sessions tailored to your facility's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;