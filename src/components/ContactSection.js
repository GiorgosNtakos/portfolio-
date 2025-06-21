import { manageAOS } from '../helpers/helperAOS.js';

export const renderContact = (lang, translations) => {
  manageAOS('contact')
  const t = translations[lang].contactSection;

  return `
  <section id="contact" class="min-h-screen flex items-center justify-center bg-slate-800 px-4">
    <form action="https://formspree.io/f/mjkrwepg" method="POST"
      class="bg-slate-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-4" 
      data-aos="fade-up" data-aos-delay="200" novalidate>
      
      <!-- Τίτλος -->
      <h2 class="text-3xl font-bold text-cyan-300 text-center">${t.title}</h2>

      <!-- Honeypot για bots -->
      <input type="text" name="_gotcha" style="display:none" />

      <!-- Ονομα -->
      <input 
        type="text" 
        name="name" 
        placeholder="${t.namePlaceholder}" 
        required 
        autocomplete="name"
        class="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 
               focus:outline-none focus:ring-2 focus:ring-cyan-500" 
      />

      <!-- Email -->
      <input 
        type="email" 
        name="email" 
        placeholder="${t.emailPlaceholder}" 
        required 
        autocomplete="email"
        class="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 
               focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <!-- Μήνυμα -->
      <textarea 
        name="message" 
        rows="5" 
        placeholder="${t.messagePlaceholder}" 
        required
        class="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 
               focus:outline-none focus:ring-2 focus:ring-cyan-500"
      ></textarea>

      <!-- Submit Button -->
      <button 
        type="submit"
        class="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded transition"
      >
        ${t.sendButton}
      </button>

      <!-- Social Icons -->
      <div class="mt-12 flex flex-wrap justify-center gap-6">
        ${renderIcon("mailto:g_ntakos.dev@gmail.com", t.tooltipEmail, 250, "email")}
        ${renderIcon("https://github.com/GiorgosNtakos", t.tooltipGitHub, 400, "github")}
        ${renderIcon("https://linkedin.com/in/giorgos-dakos-28b294272/", t.tooltipLinkedIn, 550, "linkedin")}
      </div>
    </form>
  </section>
`;
};

// Βοηθητική συνάρτηση για social icons
function renderIcon(href, tooltip, delay, type) {
  const config = {
    email: {
      bg: "bg-cyan-500 hover:bg-cyan-400",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    },
    github: {
      bg: "bg-slate-800 hover:bg-slate-700",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.74-1.34-1.74-1.1-.75.08-.74.08-.74 1.22.1 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.31 3.53 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.67.25 2.9.12 3.2.77.84 1.24 1.92 1.24 3.24 0 4.63-2.82 5.65-5.5 5.95.44.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57A12 12 0 0012 0z" clip-rule="evenodd"/></svg>`
    },
    linkedin: {
      bg: "bg-cyan-500 hover:bg-cyan-400",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V149.1h92.88zm-46.44-338C24.24 110 0 85.77 0 56.72A56.66 56.66 0 0 1 56.68 0c31.23 0 56.47 24.23 56.47 56.68 0 29.05-25.24 53.28-56.47 53.32zM447.92 448h-92.6V304.4c0-34.25-.71-78.21-47.65-78.21-47.66 0-54.95 37.26-54.95 75.7V448h-92.56V149.1h88.84v40.8h1.28c12.39-23.49 42.64-48.27 87.79-48.27 93.92 0 111.21 61.85 111.21 142.3V448z"/></svg>`
    }
  };

  const { bg, icon } = config[type];
  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer"
       data-aos="fade-up" data-aos-delay="${delay}"
       class="group relative flex items-center justify-center w-12 h-12 rounded-full ${bg} transition shadow-lg"
       aria-label="${type}">
      <span class="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition duration-200">
        ${tooltip}
      </span>
      ${icon}
    </a>
  `;
}
