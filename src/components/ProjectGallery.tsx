import { projects } from '../data';
import { ProjectCard } from './ProjectCard';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ProjectGallery() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;
      if (bottom) {
        setIsAtBottom(true);
      } else if (window.scrollY < 100) {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl w-full">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Selected Projects
          </h2>
        </div>
        
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex flex-col items-center">
              <div id={`project-${project.id}`} className="w-full relative z-0 hover:z-30">
                <ProjectCard project={project} index={index} />
              </div>
              {index < projects.length - 1 ? (
                <div className="py-8 flex flex-col items-center gap-1">
                  {isAtBottom ? (
                    <>
                      <ArrowUp className="h-10 w-10 text-cyan-400 animate-bounce drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                      <div className="w-1 h-16 bg-gradient-to-t from-transparent via-cyan-400/50 to-cyan-400/80 rounded-full" />
                    </>
                  ) : (
                    <>
                      <div className="w-1 h-16 bg-gradient-to-b from-transparent via-cyan-400/50 to-cyan-400/80 rounded-full" />
                      <ArrowDown className="h-10 w-10 text-cyan-400 animate-bounce drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                    </>
                  )}
                </div>
              ) : (
                <div className="py-10 text-cyan-400/60 flex flex-col items-center gap-2 mt-8">
                  <button onClick={scrollToTop} className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-2 focus:outline-none">
                    <span className="sr-only">Back to top</span>
                    <ArrowUp className="h-8 w-8 animate-bounce group-hover:animate-none group-hover:text-cyan-300 transition-colors" />
                    <div className="w-0.5 h-12 bg-gradient-to-t from-transparent via-cyan-400/30 to-cyan-400/60 rounded-full group-hover:via-cyan-300/50 group-hover:to-cyan-300 transition-colors" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
