// Updated AboutSection.js with corrected responsive image/text layout
import { SectionTitle } from './SectionTitle.js';
import { manageAOS } from '../helpers/helperAOS.js';

export function registerSkillToggleListeners() {
  document.querySelectorAll('[data-skill-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-skill-toggle');
      const section = document.getElementById(id);
      const icon = button.querySelector('span:last-child');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', !isExpanded);

      if (section.style.maxHeight) {
        section.style.maxHeight = null;
        icon.textContent = '+';
        icon.classList.remove('text-yellow-300');
        icon.classList.add('text-cyan-400');
      } else {
        section.style.maxHeight = section.scrollHeight + 'px';
        icon.textContent = '−';
        icon.classList.remove('text-cyan-400');
        icon.classList.add('text-yellow-300');
      }
    });
  });
}

function renderSkill(name, percent) {
  return `
    <div class="flex flex-col justify-between h-full">
      <div class="flex justify-between mb-1 text-sm break-words">
        <span class="break-words whitespace-normal">${name}</span>
        <span>${percent}%</span>
      </div>
      <div class="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div class="bg-cyan-400 h-3 rounded-full" style="width: ${percent}%"></div>
      </div>
    </div>
  `;
}

function renderSkillGroup(title, skills, delay = 0) {
  const id = title.toLowerCase().replace(/\s+/g, '-');
  return `
    <div class="flex flex-col h-full" data-aos="zoom-in-up" data-aos-delay="${delay}">
      <button 
        class="w-full text-left font-semibold text-slate-200 bg-slate-800 px-4 py-3 rounded-md hover:bg-slate-700 transition flex justify-between items-center"
        data-skill-toggle="${id}"
        aria-expanded="false"
        aria-controls="${id}"
      >
        <span>${title}</span>
        <span class="text-cyan-400 text-xl">+</span>
      </button>
      <div id="${id}" class="overflow-hidden max-h-0 transition-all duration-500 ease-in-out pt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          ${skills.map(s => renderSkill(s.name, s.percent)).join('')}
        </div>
      </div>
    </div>
  `;
}

export function renderAbout(lang = 'en', translations) {
  manageAOS('about-section')
  const t = translations[lang].aboutSection;

  return `
    <section id="about-section" class="bg-slate-800 py-20 px-4 text-white">
      <div class="max-w-6xl mx-auto space-y-16">
        <div data-aos="fade-down">
          ${SectionTitle(t.title, 'text-yellow-300', 'left')}
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="flex justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="100">
            <img src="/portfolio-/images/my_photo.jpg" alt="Profile photo"
              class="rounded-lg shadow-xl w-full sm:w-4/5 md:w-[500px] lg:w-[1440px] xl:w-[1440px] 2xl:w-[1440px] h-auto object-cover border-4 border-cyan-500" />
          </div>

          <div class="space-y-4 text-left text-base sm:text-lg text-slate-200" data-aos="fade-left" data-aos-delay="200">
            <p>${t.nameIntro}</p>
            <p>${t.motivation}</p>
            <p>${t.studies}</p>
            <p>${t.goal}</p>

            <div class="grid grid-cols-2 gap-x-6 gap-y-3 text-sm pt-4" data-aos="fade-up" data-aos-delay="300">
              <p><span class="font-semibold text-cyan-400">${t.info.birthday}:</span> ${t.labels.birthday}</p>
              <p><span class="font-semibold text-cyan-400">${t.info.degree}:</span> ${t.labels.degree}</p>
              <p><span class="font-semibold text-cyan-400">${t.info.city}:</span> ${t.labels.city}</p>
              <p><span class="font-semibold text-cyan-400">${t.info.email}:</span> g_ntakos.dev[at]gmail.com</p>
              <p><span class="font-semibold text-cyan-400">${t.info.age}:</span> 26</p>
              <p><span class="font-semibold text-cyan-400">${t.info.availability}:</span> ${t.labels.availability}</p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-cyan-400" data-aos="fade-up" data-aos-delay="400">
            ${t.skillsTitle}
          </h3>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 items-start">
            ${renderSkillGroup("HDL", [
              { name: "VHDL", percent: 90 },
              { name: "Verilog / SystemVerilog", percent: 76 }
            ], 0)}
            ${renderSkillGroup("Programming Languages", [
              { name: "C", percent: 85 },
              { name: "Java", percent: 85 },
              { name: "SQL", percent: 75 }
            ], 100)}
            ${renderSkillGroup("EDA Tools", [
              { name: "Synopsys Tools", percent: 80 },
              { name: "Vivado", percent: 85 },
              { name: "ModelSim", percent: 80 },
              { name: "Cadence", percent: 73 }
            ], 200)}
            ${renderSkillGroup("Software & OS", [
              { name: "Visual Studio", percent: 80 },
              { name: "Microchip Studio", percent: 68 },
              { name: "Linux OS", percent: 77 }
            ], 300)}
            ${renderSkillGroup("Others", [
              { name: "LATEX", percent: 75 },
              { name: "Git / Bash", percent: 73 },
              { name: "TCL Scripting", percent: 62 }
            ], 400)}
          </div>
        </div>
      </div>
    </section>
  `;
}
