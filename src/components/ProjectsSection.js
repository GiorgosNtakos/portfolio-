// src/components/ProjectsSection.js
import { SectionTitle } from './SectionTitle.js';
import AOS from 'aos';
import { manageAOS } from '../helpers/helperAOS.js';

// ProjectsSection.js

export function renderProjects(lang, translations) {
  manageAOS('projects')
  const t = translations[lang];

  return `
    <section id="projects" class="min-h-screen bg-slate-800 px-4 py-24">
      <div class="max-w-7xl mx-auto space-y-20">
        <div data-aos="fade-down" data-aos-delay="100">
          ${SectionTitle(t.projectsTitle, "text-yellow-300", "left")}
        </div>

        <div class="max-w-5xl mx-auto text-center">
          <div class="flex justify-center mt-8 gap-10 text-lg sm:text-xl font-semibold" data-aos="fade-up" data-aos-delay="200">
            <button id="work-tab" class="tab-button text-cyan-400 relative pb-1 border-b-2 border-transparent hover:border-cyan-400 transition px-4 py-2">${t.workTab}</button>
            <button id="projects-tab" class="tab-button text-cyan-400 relative pb-1 border-b-2 border-transparent hover:border-cyan-400 transition px-4 py-2">${t.projectsTab}</button>
            <button id="conferences-tab" class="tab-button text-cyan-400 relative pb-1 border-b-2 border-transparent hover:border-cyan-400 transition px-4 py-2">${t.conferencesTab}</button>
          </div>

          <div id="tab-content" class="mt-10 text-slate-300 text-center"></div>
        </div>
      </div>
    </section>
  `;
}




export function renderWorkExperience(lang, translation) {
  const experiences = translation[lang].workExperience;

  return `
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[525px] gap-y-6 justify-items-center mt-12">
      ${experiences.map((exp, i) => `
        <div class="bg-slate-900 shadow-lg border border-cyan-700 rounded-xl p-6 w-[500px] flex flex-col justify-start text-left hover:shadow-cyan-500/20 transition-shadow duration-300"
             data-aos="fade-up" data-aos-delay="${i * 100}">
          <h3 class="text-lg font-semibold text-cyan-400">${exp.company}</h3>
          <h4 class="text-xl font-bold text-white mt-1">${exp.title}</h4>
          <p class="text-sm text-cyan-200 italic mt-1">${exp.duration}</p>
          <p class="text-slate-300 text-[17px] mt-4 leading-relaxed whitespace-pre-line">
            ${exp.description.trim()}
          </p>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderConferences(lang, translation) {
  const events = translation[lang].conferences;

  return `
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[525px] gap-y-6 justify-items-center mt-12">
      ${events.map((event, i) => `
        <div class="bg-slate-900 shadow-lg border border-cyan-700 rounded-xl p-6 w-[500px] flex flex-col justify-start text-left hover:shadow-cyan-500/20 transition-shadow duration-300"
             data-aos="fade-up" data-aos-delay="${i * 100}">
          <h3 class="text-lg font-semibold text-cyan-400">${event.title}</h3>
          <h4 class="text-xl font-bold text-white mt-1">${event.role}</h4>
          <p class="text-sm text-cyan-200 italic mt-1">${event.date}</p>
          <p class="text-slate-300 text-[17px] mt-4 leading-relaxed whitespace-pre-line">
            ${event.description.trim()}
          </p>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderProjectsTab(lang, translations) {
  const t = translations[lang];
  const projects = translations[lang].projectsList;

  return `
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[525px] gap-y-6 justify-items-center mt-12">
      ${projects.map((item, index) => `
        <div class="bg-slate-900 shadow-lg border border-cyan-700 rounded-xl p-6 w-[500px] flex flex-col justify-start text-left hover:shadow-cyan-500/20 transition-shadow duration-300"
             data-aos="fade-up" data-aos-delay="${index * 100}">
          <div class="flex flex-wrap gap-2 mb-3">
            ${item.tech.map(tag => `<span class="bg-cyan-800 text-cyan-100 text-xs font-semibold px-2 py-1 rounded">${tag}</span>`).join('')}
          </div>
          <h3 class="text-xl font-bold text-cyan-400 mb-1">${item.title}</h3>
          <p class="text-slate-300 text-[17px] mt-2 leading-relaxed whitespace-pre-line">${item.description.trim()}</p>
          <p id="more-${index}" class="text-slate-300 text-[17px] mt-2 leading-relaxed whitespace-pre-line hidden">${item.extended.trim()}</p>
          <button data-target="${index}" class="read-more-btn mt-2 text-sm text-cyan-400 hover:underline">${t.readMore}</button>
        </div>
      `).join('')}
    </div>
  `;
}

export function setupProjectTabs(lang, translations) {
  const tabContent = document.getElementById("tab-content");

  const setupTab = (tabId, renderFn) => {
    document.getElementById(tabId).addEventListener("click", () => {
      tabContent.innerHTML = renderFn(lang, translations);
      requestAnimationFrame(() => AOS.refresh());

      document.querySelectorAll(".tab-button").forEach(btn =>
        btn.classList.replace("text-yellow-300", "text-cyan-400")
      );
      document.getElementById(tabId).classList.replace("text-cyan-400", "text-yellow-300");
    });
  };

  setupTab("projects-tab", renderProjectsTab);
  setupTab("work-tab", renderWorkExperience);
  setupTab("conferences-tab", renderConferences);

  // ⏱ Default ενεργό tab
  tabContent.innerHTML = renderWorkExperience(lang, translations);
  requestAnimationFrame(() => AOS.refresh());
  document.getElementById("work-tab").classList.replace("text-cyan-400", "text-yellow-300");
}




