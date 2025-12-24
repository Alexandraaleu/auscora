import { Link } from "react-router-dom";
import { Linkedin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Team = () => {
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
              <Users className="h-4 w-4" />
              Our Team
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet the People Behind AUSCORA
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A passionate team dedicated to revolutionizing healthcare technology through innovation and precision engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              Join Our Team
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're always looking for talented individuals who share our passion for 
              advancing healthcare through innovation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/careers">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
