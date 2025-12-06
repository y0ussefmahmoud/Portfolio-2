import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioThumb from "@assets/generated_images/professional_3d_developer_avatar.png"; 
import hardwareThumb from "@assets/generated_images/project_thumbnail_for_hardware_store.png";
import aiThumb from "@assets/generated_images/project_thumbnail_for_ai_assistant.png";

const projects = [
  {
    title: "Y0 Hardware",
    category: "E-Commerce",
    description: "A modern e-commerce platform for computer hardware with a sleek dark mode design.",
    image: hardwareThumb,
    tags: ["HTML5", "CSS3", "JavaScript", "E-commerce"],
    links: { demo: "#", code: "#" },
    featured: true,
  },
  {
    title: "Y0 AI Assistant",
    category: "AI Application",
    description: "Smart AI-powered chat assistant featuring a futuristic UI and real-time responses.",
    image: aiThumb,
    tags: ["Next.js", "TypeScript", "OpenAI", "NestJS"],
    links: { demo: "#", code: "#" },
    featured: true,
  },
  {
    title: "My Portfolio",
    category: "Personal Brand",
    description: "The previous iteration of my portfolio showcasing my early web development skills.",
    image: portfolioThumb,
    tags: ["HTML5", "CSS3", "JavaScript"],
    links: { demo: "https://y0ussefmahmoud.github.io/Portfolio/", code: "https://github.com/y0ussefmahmoud/Portfolio" },
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold mb-2">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-muted-foreground">
            A selection of my recent work in web and mobile development.
          </p>
        </div>
        <Button variant="outline" className="hidden md:flex gap-2 border-primary/20 hover:bg-primary/10">
          <Github className="w-4 h-4" /> View All on GitHub
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-xl overflow-hidden bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                     <ExternalLink className="w-4 h-4" />
                   </a>
                   <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="p-2 bg-background text-foreground rounded-full hover:bg-background/80">
                     <Github className="w-4 h-4" />
                   </a>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="text-[10px] uppercase tracking-wider font-mono text-primary mb-2">{project.category}</div>
              <h3 className="text-lg font-bold mb-2 leading-tight">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] rounded bg-secondary/50 text-secondary-foreground border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center md:hidden pt-4">
        <Button variant="outline" className="w-full gap-2">
          <Github className="w-4 h-4" /> View All on GitHub
        </Button>
      </div>
    </div>
  );
}
