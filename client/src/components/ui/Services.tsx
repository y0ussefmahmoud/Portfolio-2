import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Container, Database, Briefcase } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and dashboards built with clean, maintainable code.",
    icon: <Globe className="w-6 h-6" />,
    features: ["Responsive Design", "SEO Friendly", "Performance Optimization"],
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform apps with Flutter focusing on performance and user experience.",
    icon: <Smartphone className="w-6 h-6" />,
    features: ["iOS & Android", "Native Performance", "Offline First"],
  },
  {
    title: "APIs & Integrations",
    description: "RESTful APIs, authentication, and third-party integrations for robust backends.",
    icon: <Server className="w-6 h-6" />,
    features: ["RESTful Design", "Secure Auth", "Scalable Architecture"],
  },
  {
    title: "Docker & DevOps",
    description: "Containerized deployments and scalable setups using Docker best practices.",
    icon: <Container className="w-6 h-6" />,
    features: ["CI/CD Pipelines", "Cloud Deployment", "Monitoring"],
  },
  {
    title: "Database Design",
    description: "MySQL schema design, optimization, and data modeling for real-world scale.",
    icon: <Database className="w-6 h-6" />,
    features: ["Schema Design", "Query Optimization", "Data Migration"],
  },
  {
    title: "Freelance Projects",
    description: "End-to-end delivery with clear communication, timelines, and documentation.",
    icon: <Briefcase className="w-6 h-6" />,
    features: ["Project Planning", "Quality Assurance", "Post-launch Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My <span className="text-primary">Services</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl hover:bg-secondary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
