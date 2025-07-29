export function SidebarNav() {
  return `
    <!-- Burger button -->
    <button id="sidebar-toggle" class="fixed top-4 left-4 z-50 sm:hidden bg-slate-800 p-2 rounded-md shadow-md text-white">
      <i class="fas fa-bars text-xl"></i>
    </button>

    <!-- Sidebar -->
    <aside
  id="sidebar"
  class="fixed top-0 left-0 h-full w-[40%] max-w-[260px] sm:w-20 bg-slate-900/90 backdrop-blur-sm rounded-r-xl shadow-lg flex flex-col items-center py-6 z-40 space-y-6 transition-all duration-300 ease-in-out transform scale-95 opacity-0 -translate-x-full sm:translate-x-0 sm:scale-100 sm:opacity-100"
>


      <button id="sidebar-close" class="absolute top-4 right-4 sm:hidden text-white text-xl">
        <i class="fas fa-times"></i>
      </button>

      <nav class="mt-12 sm:mt-0 flex flex-col gap-6 items-center text-slate-400">
        <a href="#home" class="group nav-icon"><i class="fas fa-home mb-1"></i><span class="text-xs" id="nav-home">Home</span></a>
        <a href="#about-section" class="group nav-icon"><i class="fas fa-user mb-1"></i><span class="text-xs" id="nav-about">About</span></a>
        <a href="#resume" class="group nav-icon"><i class="fas fa-file-alt mb-1"></i><span class="text-xs" id="nav-resume">Resume</span></a>
        <a href="#projects" class="group nav-icon"><i class="fas fa-briefcase mb-1"></i><span class="text-xs" id="nav-work">Work</span></a>
        <a href="#timeline" class="group nav-icon"><i class="fas fa-clock mb-1"></i><span class="text-xs" id="nav-timeline">Timeline</span></a>
        <a href="#contact" class="group nav-icon"><i class="fas fa-envelope mb-1"></i><span class="text-xs" id="nav-contact">Contact</span></a>
        <button id="lang-toggle" class="nav-icon"><i class="fas fa-globe mb-1"></i><span class="text-xs" id="nav-lang">EN / GR</span></button>
      </nav>
    </aside>
  `;
}
