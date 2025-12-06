import { motion } from "framer-motion";
import { Home, BookOpen, Briefcase, Mail, User } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "courses", label: "My Course", icon: <BookOpen className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 p-2 bg-background/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative px-4 py-3 rounded-full flex flex-col items-center gap-1 transition-all duration-300 group ${
              activeTab === item.id 
                ? "text-primary bg-primary/10" 
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
              {item.icon}
            </div>
            <span className={`text-[10px] font-medium transition-all duration-300 absolute -top-8 bg-background/90 px-2 py-1 rounded border border-white/10 ${
              activeTab === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            }`}>
              {item.label}
            </span>
            
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>
    </div>
  );
}
