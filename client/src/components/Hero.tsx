import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@assets/generated_images/professional_3d_developer_avatar.png";

export default function Hero() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 text-center lg:text-left z-20"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2 backdrop-blur-sm">
          Available for Freelance & Full-time
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
          Hello, I'm <br />
          <span className="text-gradient-primary">Y0ussef Mahmoud</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-light">
          Full-Stack Developer & Project Engineer building scalable solutions with modern technologies.
        </p>
        
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base shadow-lg shadow-primary/20">
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/10 bg-background/50 backdrop-blur-sm">
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-muted-foreground">
          <SocialLink href="https://github.com/y0ussefmahmoud" icon={<Github />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/y0ussefmahmoud" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="mailto:youssef11mahmoud112002@gmail.com" icon={<Mail />} label="Email" />
          <SocialLink href="https://twitter.com/y0ussefmahmoud" icon={<Twitter />} label="Twitter" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block z-20"
      >
        <div className="relative w-[450px] h-[450px] mx-auto">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <img
            src={avatarImage}
            alt="Y0ussef Mahmoud"
            className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10 mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
          />
          
          {/* Floating Badge 1 */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 bg-card/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-sm font-medium">Node.js Expert</span>
          </motion.div>

          {/* Floating Badge 2 */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -left-8 bg-card/80 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="font-mono text-sm font-medium">React & Flutter</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full bg-background/50 backdrop-blur-sm border border-white/5"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
