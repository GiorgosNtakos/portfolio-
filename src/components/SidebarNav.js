// src/components/SidebarNav.js
export function SidebarNav() {
    return `
      <aside class="fixed top-0 left-0 h-full w-20 bg-slate-900 shadow-md flex flex-col items-center py-6 z-50 space-y-6">
  
        <!-- Home -->
        <a href="#home" class="group">
          <div class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V14a2 2 0 00-2-2H5a2 2 0 00-2 2v6" />
            </svg>
            <span id="nav-home" class="text-xs">Home</span>
          </div>
        </a>
  
        <!-- About -->
        <a href="#about-section" class="group">
          <div class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.29.534 6.121 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span id="nav-about" class="text-xs">About</span>
          </div>
        </a>
  
        <!-- Resume -->
        <a href="#resume" class="group">
          <div class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 16h8M8 12h8M9 8h6M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
            </svg>
            <span id="nav-resume"  class="text-xs">Resume</span>
          </div>
        </a>
  
        <!-- Work -->
        <a href="#projects" class="group">
          <div class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7V3H8v4M3 21h18V7H3v14z" />
            </svg>
            <span id="nav-work" class="text-xs">Work</span>
          </div>
        </a>
  
        <!-- Timeline -->
        <a href="#timeline" class="group">
          <div class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span id="nav-timeline" class="text-xs">Timeline</span>
          </div>
        </a>
  
        <!-- Contact -->
        <a href="#contact" class="group">
          <div class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span id="nav-contact" class="text-xs">Contact</span>
          </div>
        </a>
        
       <!-- Language Switcher with Font Awesome -->
<button id="lang-toggle" class="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition focus:outline-none">
  <i class="fas fa-globe text-xl mb-1"></i>
  <span id="nav-lang" class="text-xs">EN / GR</span>
</button>

      </aside>
    `;
  }
  