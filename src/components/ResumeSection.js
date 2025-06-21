// src/components/ProjectsSection.js
import { SectionTitle } from './SectionTitle.js';
import { manageAOS } from '../helpers/helperAOS.js';

export function renderResume(lang, translations) {
  manageAOS('resume')
  const t = translations[lang];

  return `
    <section id="resume" 
             class="min-h-screen bg-slate-900 px-4 py-24 flex flex-col justify-start text-white">

      <div class="max-w-7xl w-full mx-auto" data-aos="fade-down" data-aos-delay="100">
        ${SectionTitle(t.resume, "text-cyan-300", "left")}
      </div>

      <div class="flex-grow flex flex-col items-center justify-center mt-12" data-aos="zoom-in" data-aos-delay="200">
        <div class="max-w-2xl text-center space-y-8">
          <p class="text-slate-300 text-lg">
            ${t.resumeIntro}
          </p>

          <a href="/portfolio-/files/${lang === 'gr' ? 'cv_gr.pdf' : 'cv_en.pdf'}" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded transition shadow-lg hover:scale-105 duration-300"
             data-aos="fade-up" data-aos-delay="400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4v16m8-8H4" />
            </svg>
            ${t.viewResume}
          </a>
        </div>
      </div>
    </section>
  `;
}
