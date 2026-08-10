export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-transparent px-6 py-12 md:px-12 relative z-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row text-[10px] text-slate-500 font-medium tracking-widest uppercase">
        <p className="flex items-center gap-2">
          <span className="font-display text-sm font-bold text-slate-300 tracking-normal capitalize">Arjun.</span>
          &copy; {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/arjun-jothiramalingamlakshmi-140639344/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
