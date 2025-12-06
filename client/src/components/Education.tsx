import { motion } from "framer-motion";
import { GraduationCap, Calendar, Building } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Software Engineering</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Building className="w-4 h-4 mr-2" />
                    <span>Egyptian Korean Faculty of Technological Industry and Energy</span>
                  </div>
                </div>
                <div className="flex items-center text-primary text-sm font-mono bg-primary/10 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3 h-3 mr-2" />
                  2020 - 2024
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Specialized in Computer Engineering with focus on software development, algorithms, and system design.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary px-2 py-1 rounded border border-border">Data Structures</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded border border-border">Algorithms</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded border border-border">System Design</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded border border-border">Web Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
