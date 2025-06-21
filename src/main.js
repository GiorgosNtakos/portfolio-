import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { renderAbout } from './components/AboutSection.js';
import { renderContact } from './components/ContactSection.js';
import { renderHome } from './components/HomeSection.js';
import { renderResume } from './components/ResumeSection.js';
import { renderProjects } from './components/ProjectsSection.js';
import { renderTimeline } from './components/TimelineSection.js';
import { SidebarNav } from './components/SidebarNav.js';
import { registerSkillToggleListeners } from './components/AboutSection.js';
import { translations } from './Translation.js';
import { setupProjectTabs } from './components/ProjectsSection.js';
import { setLanguageJustChanged } from './state.js';

let currentLang = localStorage.getItem("lang") || "en";
let languageJustChanged = false;

function renderAllSections(lang) {
  document.querySelector('#app').innerHTML = `
    ${SidebarNav()}
    <main class="bg-slate-950 text-white ml-20">
      ${renderHome(lang, translations)}
      ${renderAbout(lang, translations)}
      ${renderResume(lang, translations)}
      ${renderProjects(lang, translations)}
      ${renderTimeline(lang, translations)}
      ${renderContact(lang, translations)}
    </main>
  `;
}

function updateNavbarLabels(lang) {
  const t = translations[lang];
  document.getElementById("nav-home").innerText = t.home;
  document.getElementById("nav-about").innerText = t.about;
  document.getElementById("nav-resume").innerText = t.resume;
  document.getElementById("nav-work").innerText = t.work;
  document.getElementById("nav-timeline").innerText = t.timeline;
  document.getElementById("nav-contact").innerText = t.contact;
  document.getElementById("nav-lang").innerText = t.langToggle;
}

function applyTranslations(lang) {
  updateNavbarLabels(lang);

  // Επανεμφάνιση sections
  document.getElementById("home").outerHTML = renderHome(lang, translations);
  document.getElementById("about-section").outerHTML = renderAbout(lang, translations);
  document.getElementById("resume").outerHTML = renderResume(lang, translations);
  document.getElementById("projects").outerHTML = renderProjects(lang, translations);
  document.getElementById("timeline").outerHTML = renderTimeline(lang, translations);
  document.getElementById("contact").outerHTML = renderContact(lang, translations);

  setupProjectTabs(lang, translations);
  registerSkillToggleListeners();

  // Ενημέρωση κουμπιών "Read more"
  setTimeout(() => {
    document.querySelectorAll(".read-more-btn").forEach(btn => {
      const id = btn.getAttribute("data-target");
      const hidden = document.getElementById(`more-${id}`)?.classList.contains("hidden");
      btn.textContent = hidden
        ? translations[lang].readMore
        : translations[lang].readLess;
    });

    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, 100);

  window.scrollTo({ top: 0, behavior: 'smooth' });
  languageJustChanged = false;
}

// Αρχικό render
renderAllSections(currentLang);
updateNavbarLabels(currentLang); // ✅ αυτό προστέθηκε
setupProjectTabs(currentLang, translations);
registerSkillToggleListeners();

// Μετά από μικρό delay, κάνε scroll στο home και refresh τα animations
window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }

  setTimeout(() => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'auto' });
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, 100);
});

// Clear session
window.addEventListener("beforeunload", () => {
  sessionStorage.clear();
});

// Translation toggle
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "gr" : "en";
    localStorage.setItem("lang", currentLang);
    setLanguageJustChanged(true);
    applyTranslations(currentLang);
  });

  // Tab underline styling
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.replace("text-yellow-300", "text-cyan-400"));
      button.classList.replace("text-cyan-400", "text-yellow-300");
    });
  });
});

// Read more functionality
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("read-more-btn")) {
    const targetId = e.target.getAttribute("data-target");
    const extended = document.getElementById(`more-${targetId}`);
    const isHidden = extended.classList.toggle("hidden");

    e.target.textContent = isHidden
      ? translations[currentLang].readMore
      : translations[currentLang].readLess;
  }
});
