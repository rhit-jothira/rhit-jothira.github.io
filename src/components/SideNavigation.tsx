import { projects } from '../data';
import { ArrowUp, ArrowDown, ChevronUp, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SideNavigation() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          // Find the one with the highest intersection ratio
          let maxRatio = 0;
          let active = '';
          visibleSections.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              active = id;
            }
          });
          if (active) {
            setActiveId(active);
          }
        }
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    projects.forEach((project) => {
      const el = document.getElementById(`project-${project.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    if (!activeId) {
      if (projects.length > 0) scrollTo(`project-${projects[0].id}`);
      return;
    }
    const currentId = activeId.replace('project-', '');
    const index = projects.findIndex(p => p.id === currentId);
    if (index > 0) {
      scrollTo(`project-${projects[index - 1].id}`);
    } else {
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (!activeId) {
      if (projects.length > 0) scrollTo(`project-${projects[0].id}`);
      return;
    }
    const currentId = activeId.replace('project-', '');
    const index = projects.findIndex(p => p.id === currentId);
    if (index !== -1 && index < projects.length - 1) {
      scrollTo(`project-${projects[index + 1].id}`);
    }
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:bg-white/10 transition-all backdrop-blur-md focus:outline-none hidden lg:flex"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:bg-white/10 transition-all backdrop-blur-md focus:outline-none"
          aria-label="Previous project"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-2 py-3 px-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => scrollTo(`project-${project.id}`)}
            className="group relative p-2 focus:outline-none flex items-center justify-center"
            aria-label={`Scroll to ${project.title}`}
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                activeId === `project-${project.id}`
                  ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]'
                  : 'w-2 h-2 bg-white/30 group-hover:bg-white/70'
              }`}
            />
            {/* Tooltip on hover */}
            <div className="absolute right-full mr-4 px-2 py-1 bg-black/80 text-white text-xs whitespace-nowrap rounded opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 border border-white/10">
              {project.title}
            </div>
          </button>
        ))}
      </div>
      
      <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-cyan-400 hover:bg-white/10 transition-all backdrop-blur-md focus:outline-none"
          aria-label="Next project"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
