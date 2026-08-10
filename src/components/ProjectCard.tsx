import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { Project } from '../types';
import React, { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const images = project.imageUrls && project.imageUrls.length > 0 
    ? project.imageUrls 
    : [project.imageUrl];
    
  const media = [];
  if (project.videoUrl) media.push({ type: 'video', url: project.videoUrl });
  images.forEach(img => {
    if (img) media.push({ type: 'image', url: img });
  });

  const hasMultipleMedia = media.length > 1;

  const handleNextMedia = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMultipleMedia) {
      setCurrentMediaIndex((prev) => (prev + 1) % media.length);
    }
  };

  const handlePrevMedia = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMultipleMedia) {
      setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-6 transition-all duration-500 group relative origin-center hover:bg-white/10 hover:shadow-2xl hover:z-30"
    >
      <div 
        className="relative w-full overflow-hidden rounded-2xl bg-[#0a0f1c] shadow-inner transition-all duration-700 ease-in-out flex items-center justify-center h-[280px] sm:h-[350px] md:h-[450px]"
      >
        {media.map((item, i) => {
          if (item.type === 'video') {
            return (
              <video
                key={item.url}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-out ${
                  i === currentMediaIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                } group-hover:scale-[1.02]`}
              >
                <source src={item.url} type="video/mp4" />
              </video>
            );
          } else {
            return (
              <img
                key={item.url}
                src={item.url}
                alt={`${project.title} - Media ${i + 1}`}
                className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out ${
                  i === currentMediaIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                } ${
                  hasMultipleMedia ? 'object-contain p-2 md:p-4 group-hover:scale-[1.02]' : 'object-cover group-hover:scale-105'
                }`}
              />
            );
          }
        })}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 z-20 pointer-events-none" />
        
        {hasMultipleMedia ? (
          <>
            <button 
              onClick={handlePrevMedia}
              className="absolute top-4 right-18 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 focus:outline-none opacity-0 group-hover:opacity-100"
              aria-label="Previous media"
              style={{ right: '80px' }}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={handleNextMedia}
              className="absolute top-4 right-4 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-300 hover:bg-white/30 hover:-translate-y-1 focus:outline-none opacity-0 group-hover:opacity-100"
              aria-label="Next media"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </>
        ) : (
          <div className="absolute top-4 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all duration-300 group-hover:bg-white/20 group-hover:-translate-y-1">
            <ArrowUpRight className="h-6 w-6" />
          </div>
        )}

        {hasMultipleMedia && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-black/20 px-2 py-1.5 backdrop-blur-sm">
            {media.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentMediaIndex ? 'w-4 bg-cyan-400' : 'w-1.5 bg-white/40'}`} 
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-300 uppercase tracking-widest">{project.date}</span>
        </div>
        <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 text-xs font-medium text-indigo-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
