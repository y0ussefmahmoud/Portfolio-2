import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-heading font-bold mb-4">Let's Work <span className="text-primary">Together</span></h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Ready to start your next project? I'm currently available for freelance work and full-time opportunities.
          </p>
        </div>

        <div className="space-y-4">
          <ContactCard 
            icon={<Mail className="w-5 h-5" />}
            title="Email"
            value="youssef11mahmoud112002@gmail.com"
            href="mailto:youssef11mahmoud112002@gmail.com"
          />
          <ContactCard 
            icon={<Linkedin className="w-5 h-5" />}
            title="LinkedIn"
            value="linkedin.com/in/y0ussefmahmoud"
            href="https://linkedin.com/in/y0ussefmahmoud"
          />
          <ContactCard 
            icon={<Github className="w-5 h-5" />}
            title="GitHub"
            value="github.com/Y0ussefMahmoud"
            href="https://github.com/Y0ussefMahmoud"
          />
        </div>
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-lg h-full">
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="John Doe" className="bg-background/50 border-white/10" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input placeholder="john@example.com" type="email" className="bg-background/50 border-white/10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Input placeholder="Project inquiry..." className="bg-background/50 border-white/10" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea 
              placeholder="Tell me about your project..." 
              className="min-h-[120px] bg-background/50 border-white/10 resize-none" 
            />
          </div>

          <Button className="w-full h-10 text-base gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
            Send Message <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 rounded-xl bg-card/50 border border-white/5 hover:border-primary/50 transition-colors gap-4 group"
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</div>
        <div className="text-sm text-foreground font-medium truncate max-w-[200px] md:max-w-xs">{value}</div>
      </div>
    </a>
  );
}
