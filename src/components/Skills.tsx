import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Code, 
  CircuitBoard, 
  Wrench, 
  Layers, 
  Radio, 
  PenTool, 
  Braces, 
  Terminal,
  Server,
  Activity
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Hardware & Electronics',
    icon: CircuitBoard,
    skills: ['PCB Design', 'KiCad', 'Power Electronics', 'Analog Circuits', 'Digital Logic', 'FPGA', 'Verilog', 'EMI/EMC', 'Signal Integrity']
  },
  {
    title: 'Embedded & Microcontrollers',
    icon: Cpu,
    skills: ['C/C++', 'Assembly', 'ESP32', 'PIC18F56Q24', '6502', 'MPLAB', 'Embedded Systems', 'RTOS']
  },
  {
    title: 'Software & Algorithms',
    icon: Code,
    skills: ['Java', 'MATLAB', 'OOP', 'Computer Vision', 'API Integration', 'System Design']
  },
  {
    title: 'Tools & Fabrication',
    icon: Wrench,
    skills: ['Soldering', 'Schematic Capture', 'Intel Quartus', 'Oscilloscopes', 'AWG']
  }
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12 relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-slate-400">
            A comprehensive overview of my expertise in hardware, firmware, and software engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {skill}
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
