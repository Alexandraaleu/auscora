import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone, Handshake, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { submitLead, type LeadType } from "@/lib/submitLead";
import Layout from "@/components/Layout";

const leadOptions: { value: LeadType; label: string; icon: typeof Handshake }[] = [
  { value: "waitlist", label: "Join the waiting list", icon: ListChecks },
  { value: "partner", label: "Partner with us", icon: Handshake },
];

const leadCopy: Record<LeadType, { heading: string; text: string; button: string; busy: string; placeholder: string }> = {
  waitlist: {
    heading: "Ready to Make an Impact?",
    text: "Join our waiting list and make sure you are shortlisted when our product is on the market.",
    button: "Join Waiting List",
    busy: "Joining...",
    placeholder: "Comments (optional)",
  },
  partner: {
    heading: "Let's Build This Together",
    text: "Clinicians, hospitals, investors or industry partners — tell us a bit about yourself and how you'd like to collaborate.",
    button: "Send Partnership Request",
    busy: "Sending...",
    placeholder: "Who are you and how would you like to partner? (optional)",
  },
};

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
  const [searchParams] = useSearchParams();
  const [leadType, setLeadType] = useState<LeadType>(
    searchParams.get("type") === "partner" ? "partner" : "waitlist",
  );
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistComment, setWaitlistComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);
  const copy = leadCopy[leadType];
  const calendarButtonRef = useRef<HTMLDivElement>(null);
  const buttonInitialized = useRef(false);

  useEffect(() => {
    if (window.location.hash === "#join") {
      document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
    if (!waitlistEmail.trim() || !consent) return;

    setIsWaitlistSubmitting(true);
    try {
      await submitLead({
        type: leadType,
        email: waitlistEmail.trim(),
        comment: waitlistComment.trim(),
        consent,
        website: honeypot,
      });

      toast(
        leadType === "partner"
          ? { title: "Thanks for reaching out!", description: "Our team will get back to you shortly." }
          : { title: "You're on the list!", description: "We'll notify you when our product is ready." },
      );

      setWaitlistEmail("");
      setWaitlistComment("");
      setConsent(false);
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again, or email us at auscoradk@gmail.com.",
      });
    } finally {
      setIsWaitlistSubmitting(false);
    }
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
            <div id="join" className="scroll-mt-24 rounded-3xl bg-primary p-8 md:p-12 flex flex-col justify-center">
              <div
                role="radiogroup"
                aria-label="What would you like to do?"
                className="mb-8 grid grid-cols-2 gap-1 rounded-xl bg-primary-foreground/10 p-1"
              >
                {leadOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={leadType === opt.value}
                    onClick={() => setLeadType(opt.value)}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      leadType === opt.value
                        ? "bg-primary-foreground text-primary shadow-sm"
                        : "text-primary-foreground/80 hover:text-primary-foreground",
                    )}
                  >
                    <opt.icon className="h-4 w-4 shrink-0" />
                    {opt.label}
                  </button>
                ))}
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                {copy.heading}
              </h2>
              <p className="mt-4 text-primary-foreground/80">{copy.text}</p>
              <form onSubmit={handleWaitlistSubmit} className="mt-8 flex flex-col gap-4">
                {/* Honeypot: hidden from humans, bots tend to fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />
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
                  placeholder={copy.placeholder}
                  value={waitlistComment}
                  onChange={(e) => setWaitlistComment(e.target.value)}
                  maxLength={1000}
                  rows={3}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <label className="flex items-start gap-3 text-sm text-primary-foreground/80 cursor-pointer">
                  <Checkbox
                    checked={consent}
                    onCheckedChange={(v) => setConsent(v === true)}
                    required
                    className="mt-0.5 border-primary-foreground/60 data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"
                  />
                  <span>
                    I agree that AUSCORA may store my email and comment to contact me about{" "}
                    {leadType === "partner" ? "partnership opportunities" : "the product launch"}. I can ask
                    for my data to be deleted at any time by emailing auscoradk@gmail.com.
                  </span>
                </label>
                <Button
                  size="lg"
                  variant="secondary"
                  type="submit"
                  disabled={isWaitlistSubmitting || !consent}
                  className="self-start"
                >
                  {isWaitlistSubmitting ? copy.busy : copy.button}
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