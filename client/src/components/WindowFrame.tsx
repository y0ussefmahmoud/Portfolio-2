import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { ReactNode } from "react";

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function WindowFrame({ title, children, onClose, className = "" }: WindowFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3, ease: "backOut" }}
      className={`relative flex flex-col w-full max-w-5xl h-[80vh] bg-card/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden ${className}`}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/30 border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer transition-colors" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer transition-colors" />
          </div>
          <span className="ml-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
           {/* Decorative UI elements */}
           <div className="h-1 w-16 bg-white/5 rounded-full" />
        </div>
      </div>

      {/* Window Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 relative custom-scrollbar">
        {children}
      </div>
      
      {/* Window Status Bar */}
      <div className="px-4 py-1.5 bg-secondary/20 border-t border-white/5 flex justify-between items-center text-[10px] text-muted-foreground font-mono">
        <span>READY</span>
        <span>MEM: 64KB OK</span>
      </div>
    </motion.div>
  );
}
