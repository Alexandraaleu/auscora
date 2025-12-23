import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Microscope, Stethoscope, Activity, Syringe, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Products = () => {
  const products = [
    {
      id: "cardiosync-pro",
      icon: HeartPulse,
      name: "CardioSync Pro",
      category: "Cardiac Monitoring",
      description: "Advanced cardiac monitoring system with real-time analytics and AI-powered diagnostics for comprehensive heart health assessment.",
      features: ["Real-time ECG monitoring", "AI-powered arrhythmia detection", "Wireless connectivity", "Cloud data sync"],
    },
    {
      id: "neurascan-360",
      icon: Microscope,
      name: "NeuraScan 360",
      category: "Neurological Imaging",
      description: "High-resolution neurological imaging device providing precise diagnostic capabilities for comprehensive brain and nervous system analysis.",
      features: ["4K resolution imaging", "3D reconstruction", "Automated analysis", "DICOM compatible"],
    },
    {
      id: "vitalguard-monitor",
      icon: Stethoscope,
      name: "VitalGuard Monitor",
      category: "Patient Monitoring",
      description: "Comprehensive patient monitoring solution with seamless EHR integration for continuous vital signs tracking.",
      features: ["Multi-parameter monitoring", "EHR integration", "Alert customization", "Remote access"],
    },
    {
      id: "pulsewave-analyzer",
      icon: Activity,
      name: "PulseWave Analyzer",
      category: "Vascular Assessment",
      description: "Non-invasive vascular assessment device for arterial stiffness and cardiovascular risk evaluation.",
      features: ["Pulse wave velocity", "Arterial stiffness index", "Risk stratification", "Trend analysis"],
    },
    {
      id: "precisionject",
      icon: Syringe,
      name: "PrecisionJect System",
      category: "Drug Delivery",
      description: "Automated drug delivery system ensuring precise medication administration with real-time monitoring.",
      features: ["Dose accuracy ±1%", "Infusion protocols", "Safety interlocks", "Barcode scanning"],
    },
    {
      id: "clinivue-display",
      icon: Monitor,
      name: "CliniVue Display",
      category: "Clinical Visualization",
      description: "Medical-grade display system for surgical and diagnostic imaging with exceptional color accuracy.",
      features: ["DICOM calibrated", "Anti-glare coating", "Touch interface", "Multi-modality support"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-subtle py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Medical Devices
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Precision-engineered solutions for modern healthcare environments. 
              Each device is designed for reliability, accuracy, and seamless clinical integration.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-card hover:border-primary/20"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6 flex-1">
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-foreground">Key Features</h3>
                  <ul className="mt-3 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button variant="ghost" className="w-full justify-between group-hover:text-primary" asChild>
                    <Link to="/contact">
                      Request Information
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Need Custom Solutions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our team works with healthcare facilities to develop tailored medical device solutions 
              that meet specific clinical requirements.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;