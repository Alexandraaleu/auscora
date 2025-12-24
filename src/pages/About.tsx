import { Link } from "react-router-dom";
import { Target, Eye, Users, ShieldCheck, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      description: "Every device undergoes rigorous testing to meet the highest standards of medical safety and reliability.",
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "We engineer our products with meticulous attention to detail, ensuring accuracy in every measurement.",
    },
    {
      icon: Users,
      title: "Clinical Partnership",
      description: "We collaborate closely with healthcare professionals to understand real-world clinical needs.",
    },
  ];

  const team = [
    {
      name: "Alexandra Leu",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/alexandra-leu-236a9621a",
    },
    {
      name: "Balavignesh Baskar",
      role: "CMO",
      linkedin: "https://www.linkedin.com/in/balavignesh-baskar-3609a0356/",
    },
    {
      name: "Mariana Contente",
      role: "COO",
      linkedin: "https://www.linkedin.com/in/mariana-contente/",
    },
    {
      name: "Valentina Trolese",
      role: "Head of ML",
      linkedin: "https://www.linkedin.com/in/valentina-trolese-2aa932380/",
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
              Pioneering medical device innovation to advance patient care worldwide.
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
                Advancing Healthcare Through Innovation
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                AUSCORA was founded with a singular vision: to create medical devices that empower 
                healthcare professionals to deliver exceptional patient care. Our team of engineers, 
                clinicians, and researchers work together to develop solutions that address the most 
                pressing challenges in modern medicine.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From initial concept to final product, every AUSCORA device is designed with the 
                end user in mind—ensuring intuitive operation, reliable performance, and seamless 
                integration into clinical workflows.
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
                  To develop precision medical devices that enhance diagnostic accuracy and patient outcomes.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To be the global leader in innovative medical technology that transforms patient care.
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

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
              Our Team
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the People Behind AUSCORA
            </h2>
            <p className="mt-4 text-muted-foreground">
              A passionate team dedicated to revolutionizing healthcare technology.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-6">
                  <span className="font-display text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground text-center">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-primary font-medium text-center">
                  {member.role}
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" />
                    <span>Connect</span>
                  </div>
                </div>
              </a>
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