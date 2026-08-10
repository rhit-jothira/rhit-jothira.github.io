import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#020617]/50 px-6 py-4 backdrop-blur-xl md:px-12"
    >
      <a href="#" className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2">
        <div className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center font-bold text-sm">AJ</div>
        Arjun.
      </a>
      
      <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="https://www.linkedin.com/in/arjun-jothiramalingamlakshmi-140639344/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <span className="sr-only">LinkedIn</span>
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </motion.nav>
  );
}
