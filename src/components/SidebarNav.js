export function SidebarNav() {
  return `
    <!-- Mobile Toggle Button -->
    <button id="sidebar-toggle" class="fixed top-4 left-4 z-50 sm:hidden bg-slate-800 p-2 rounded-md shadow-md text-white">
      <i class="fas fa-bars text-xl"></i>
    </button>

    <!-- Sidebar -->
    <aside id="sidebar" class="fixed top-0 left-0 h-full w-3/4 max-w-xs sm:w-20 bg-slate-900 shadow-md flex flex-col items-center py-6 z-40 space-y-6 transform -translate-x-full sm:translate-x-0 transition-transform duration-300 ease-in-out">

      <!-- Close (only mobile) -->
      <button id="sidebar-close" class="absolute top-4 right-4 sm:hidden text-white text-xl">
        <i class="fas fa-times"></i>
      </button>

      <!-- Navigation -->
      <nav class="mt-12 sm:mt-0 flex flex-col gap-6 items-center text-slate-400">
        <a href="#home" class="group nav-icon">
          <i class="fas fa-home text-lg mb-1"></i>
          <span id="nav-home" class="text-xs">Home</span>
        </a>
        <a href="#about-section" class="group nav-icon">
          <i class="fas fa-user text-lg mb-1"></i>
          <span id="nav-about" class="text-xs">About</span>
        </a>
        <a href="#resume" class="group nav-icon">
          <i class="fas fa-file-alt text-lg mb-1"></i>
          <span id="nav-resume" class="text-xs">Resume</span>
        </a>
        <a href="#projects" class="group nav-icon">
          <i class="fas fa-briefcase text-lg mb-1"></i>
          <span id="nav-work" class="text-xs">Work</span>
        </a>
        <a href="#timeline" class="group nav-icon">
          <i class="fas fa-clock text-lg mb-1"></i>
          <span id="nav-timeline" class="text-xs">Timeline</span>
        </a>
        <a href="#contact" class="group nav-icon">
          <i class="fas fa-envelope text-lg mb-1"></i>
          <span id="nav-contact" class="text-xs">Contact</span>
        </a>
        <button id="lang-toggle" class="nav-icon focus:outline-none">
          <i class="fas fa-globe text-lg mb-1"></i>
          <span id="nav-lang" class="text-xs">EN / GR</span>
        </button>
      </nav>
    </aside>
  `;
}
