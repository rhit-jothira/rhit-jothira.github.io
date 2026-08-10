import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center px-6 md:px-12">
      <div className="mx-auto max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >
          <span className='inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-xs font-bold text-indigo-300 uppercase tracking-widest'>Available for Internships</span>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
            Hardware engineer <br className="hidden md:block" />
            building <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300'>power electronics.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-col items-start gap-8 md:mt-12 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl text-lg text-slate-400 md:text-xl">
            I'm an Electrical Engineering student looking for internship opportunities. 
            Passionate about power electronics, PCB design, digital logic, and bringing functional hardware to life.
          </p>
          
          <a 
            href="#projects" 
            className="group flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-95"
          >
            View selected work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
