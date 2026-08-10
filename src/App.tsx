import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { SideNavigation } from './components/SideNavigation';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-clip">
      {/* Frosted Glass Background Orbs */}
      <div className='fixed -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none -z-10'></div> 
      <div className='fixed top-1/2 -right-24 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none -z-10'></div> 
      <div className='fixed -bottom-24 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10'></div>
      
      <Navbar />
      <SideNavigation />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <ProjectGallery />
      </main>

      <Footer />
    </div>
  );
}
