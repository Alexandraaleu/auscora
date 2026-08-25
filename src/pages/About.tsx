import { Link } from "react-router-dom";
import { Target, Eye, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      description: "Our technology is developed to the highest standards of medical safety and reliability, so physicians can trust every signal it produces.",
    },
    {
      icon: Target,
      title: "Clinically Validated AI",
      description: "Our models are trained and evaluated on real patient sound data, so results hold up in the clinic and not just in the lab.",
    },
    {
      icon: Users,
      title: "Clinical Partnership",
      description: "We work directly with clinicians — including our partnership at Hospital Da Luz — to validate our approach on real pulmonary conditions.",
    },
  ];



  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About AUSCORA
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A MedTech startup building acoustic AI that detects pulmonary disease from sound.
            </p>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
                Our Story
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Advancing Respiratory Care Through Sound
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Pulmonary diseases such as COPD and pneumonia affect hundreds of millions of people
                worldwide, yet diagnosis still depends on imaging that is slow, expensive, radiative
                and often unavailable at the point of first contact. AUSCORA was founded to close
                that gap.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We are building an AI platform that analyses lung sounds and learns the acoustic
                signature of disease, returning a clinical decision-support signal in the time it
                takes to auscultate. We are currently working with Hospital Da Luz to validate the
                approach with physicians and bring our solution closer to the market.
              </p>
            </div>

            {/* Stats/Visual */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To make pulmonary diagnosis fast, radiation-free and available at the point of first contact.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Acoustic intelligence as a standard part of everyday respiratory care.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do at AUSCORA.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Partner With AUSCORA
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you're a healthcare facility, distributor, or research institution, 
              we'd love to explore how we can work together.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;