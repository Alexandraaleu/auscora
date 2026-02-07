import { Link } from "react-router-dom";
import { Linkedin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import alexandraPhoto from "@/assets/team/alexandra.png";
import balavigneshPhoto from "@/assets/team/balavignesh.png";
import marianaPhoto from "@/assets/team/mariana.png";
import valentinaPhoto from "@/assets/team/valentina.png";

const Team = () => {
  const team = [
    {
      name: "Alexandra Leu",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/alexandra-leu-236a9621a",
      photo: alexandraPhoto,
    },
    {
      name: "Balavignesh Baskar",
      role: "CMO",
      linkedin: "https://www.linkedin.com/in/balavignesh-baskar-3609a0356/",
      photo: balavigneshPhoto,
    },
    {
      name: "Mariana Contente",
      role: "COO",
      linkedin: "https://www.linkedin.com/in/mariana-contente/",
      photo: marianaPhoto,
    },
    {
      name: "Valentina Trolese",
      role: "Head of ML",
      linkedin: "https://www.linkedin.com/in/valentina-trolese-2aa932380/",
      photo: valentinaPhoto,
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
                <div className="h-24 w-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
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
