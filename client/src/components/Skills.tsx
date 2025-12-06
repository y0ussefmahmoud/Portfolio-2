import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, GitBranch, Terminal, Server, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-blue-400" />,
    items: ["React.js", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8 text-green-400" />,
    items: ["Node.js", "Express.js", "NestJS", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    items: ["Flutter", "Dart", "React Native", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    icon: <Terminal className="w-8 h-8 text-orange-400" />,
    items: ["Docker", "Git", "VS Code", "Postman", "Figma", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit I use to build scalable and performant applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="mb-4 p-3 bg-background rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-border">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-heading">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium font-mono border border-transparent hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
