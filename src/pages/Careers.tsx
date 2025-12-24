import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Heart, Lightbulb, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Careers = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage bold ideas and creative problem-solving to push the boundaries of medical technology.",
    },
    {
      icon: Heart,
      title: "Patient Impact",
      description: "Everything we build is driven by our commitment to improving patient outcomes and healthcare delivery.",
    },
    {
      icon: Code,
      title: "Engineering Excellence",
      description: "We value clean code, thoughtful architecture, and continuous learning in our engineering culture.",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Tech",
      description: "Work with the latest technologies and methodologies in medical device development.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Join Our Team
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Build the Future of Healthcare
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for talented engineers who are passionate about making a 
              difference in healthcare through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Join AUSCORA
            </h2>
            <p className="mt-4 text-muted-foreground">
              Be part of a team that's shaping the future of medical technology.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-y border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Open Opportunities
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're continuously looking for talented engineers to join our mission.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Code className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Engineering Positions
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We're always open to hearing from talented engineers with experience in 
                    medical device development, embedded systems, software engineering, or 
                    related fields. If you're passionate about healthcare technology, we'd 
                    love to connect.
                  </p>
                  <div className="mt-6">
                    <Button asChild className="gap-2">
                      <a href="mailto:auscoradk@gmail.com?subject=Engineering%20Opportunity%20at%20AUSCORA">
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-primary p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Make an Impact?
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Send us your resume and tell us about yourself. We're excited to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <a href="mailto:auscoradk@gmail.com?subject=Career%20Inquiry%20-%20AUSCORA">
                  <Mail className="h-4 w-4" />
                  auscoradk@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
