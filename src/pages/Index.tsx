import { Link } from "react-router-dom";
import { ArrowRight, Activity, AudioWaveform, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import dtuSkylabLogo from "@/assets/partners/dtu-skylab.png";
import websummitLogo from "@/assets/partners/websummit.png";
import mikrolegatLogo from "@/assets/partners/mikrolegat.png";
import techbbqLogo from "@/assets/partners/techbbq.png";
import sduRioLogo from "@/assets/partners/sdu-rio.png";

const partners = [
  { name: "DTU Skylab", logo: dtuSkylabLogo },
  { name: "Mikrolegat", logo: mikrolegatLogo },
  { name: "SDU RIO", logo: sduRioLogo },
  { name: "TechBBQ", logo: techbbqLogo },
  { name: "Web Summit", logo: websummitLogo },
];

const pillars = [
  {
    icon: Activity,
    title: "The Problem",
    description: "Pulmonary diseases affect hundreds of millions globally. ",
  },
  {
    icon: AudioWaveform,
    title: "Our Approach",
    description: "AI that learns the sound signature of disease and delivers a decision-support signal.",
  },
  {
    icon: TrendingUp,
    title: "The Opportunity",
    description:
      "AI-powered disease diagnosis is already valued at roughly USD 4 billion and growing at about 20%+ annually.",
  },
];

const milestones = [
  "Early-stage with a working prototype",
  "Clinical partnership at Hospital Da Luz",
  "Validating with physicians on pulmonary conditions",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-subtle">
        <div className="container mx-auto px-4 py-24 md:px-6 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Acoustic AI for Pulmonary Health
            </div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Listen to the Future
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              AI-Powered Detection of{" "}
              <span className="text-primary">Pulmonary Disease</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
              AUSCORA analyses lung sounds and provides physicians with clinical decision support, without radiation and without waiting for imaging.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative gradient blob */}
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Problem / Approach / Opportunity */}
      <section className="border-y border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/20"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where We Are
            </h2>
            <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row">
              {milestones.map((milestone) => (
                <div
                  key={milestone}
                  className="flex-1 rounded-xl border border-border bg-card px-6 py-5 text-sm text-muted-foreground shadow-soft"
                >
                  {milestone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-primary p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Connect with our team to learn more about AUSCORA and explore partnership opportunities.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-10">
            Supported By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-16 items-center justify-center px-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
