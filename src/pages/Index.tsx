import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Microscope, HeartPulse, Stethoscope, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  const products = [
    {
      icon: HeartPulse,
      title: "CardioSync Pro",
      description: "Advanced cardiac monitoring system with real-time analytics and AI-powered diagnostics.",
    },
    {
      icon: Microscope,
      title: "NeuraScan 360",
      description: "High-resolution neurological imaging device for precise diagnostic capabilities.",
    },
    {
      icon: Stethoscope,
      title: "VitalGuard Monitor",
      description: "Comprehensive patient monitoring solution with seamless EHR integration.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "FDA Approved",
      description: "All devices meet rigorous regulatory standards for safety and efficacy.",
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized excellence in medical device innovation and reliability.",
    },
    {
      icon: Activity,
      title: "Clinical Precision",
      description: "Engineered for accuracy that healthcare professionals can trust.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-subtle">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Advancing Healthcare Technology
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Precision Medical Devices for{" "}
              <span className="text-primary">Modern Healthcare</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
              AUSCORA develops innovative medical devices that empower healthcare professionals 
              to deliver exceptional patient care with confidence and precision.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative gradient blob */}
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Product Highlights */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Medical Devices
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cutting-edge solutions designed for the demands of modern clinical environments.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary">
                  <product.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <Link 
                  to="/products" 
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AUSCORA */}
      <section className="border-y border-border bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose AUSCORA
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trusted by healthcare professionals worldwide for quality and innovation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-primary p-10 text-center md:p-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Transform Patient Care?
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Connect with our team to discover how AUSCORA devices can enhance your clinical practice.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;