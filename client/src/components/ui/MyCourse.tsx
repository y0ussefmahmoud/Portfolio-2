import { motion } from "framer-motion";
import { BookOpen, Video, Award, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Full-Stack Web Development Bootcamp",
    platform: "Udemy",
    progress: 100,
    status: "Completed",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
    description: "Comprehensive bootcamp covering MongoDB, Express, React, and Node.js."
  },
  {
    title: "Advanced Flutter Architecture",
    platform: "Coursera",
    progress: 75,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    description: "Deep dive into clean architecture, state management with Bloc, and testing."
  },
  {
    title: "Docker & Kubernetes Mastery",
    platform: "Pluralsight",
    progress: 30,
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0560?q=80&w=1000&auto=format&fit=crop",
    description: "Containerization and orchestration for scalable microservices."
  }
];

export default function MyCourse() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-heading font-bold mb-2">My <span className="text-primary">Learning Journey</span></h2>
        <p className="text-muted-foreground">Continuously upgrading my skills through top-tier courses.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card/50 border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="h-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img src={course.image} alt={course.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-2 right-2 z-20 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium border border-white/10">
                {course.platform}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className={course.status === "Completed" ? "text-primary" : "text-yellow-500"}>
                    {course.status}
                  </span>
                  <span>{course.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${course.status === "Completed" ? "bg-primary" : "bg-yellow-500"}`} 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/20 rounded-full text-primary">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Certified Developer</h3>
            <p className="text-sm text-muted-foreground">View my verified certificates and credentials.</p>
          </div>
        </div>
        <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
          View Certificates
        </Button>
      </div>
    </div>
  );
}
