import { SectionTitle } from './SectionTitle.js';
import { startTypewriter } from './TypeWriter.js';
import { manageAOS } from '../helpers/helperAOS.js'

export const renderHome = (lang, translations) => {
  manageAOS('home');
  setTimeout(() => startTypewriter(translations[lang].typewriter), 500);

  const name = lang === "gr" ? "Γεώργιος Ντάκος" : "Georgios Ntakos";

  return `
    <section id="home" class="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white sm:text-left w-full"
      style="background-image: url('/portfolio-/images/vecteezy_close-up-of-circuit-board-electronic-computer-hardware_26769533.jpg');">

      <div class="max-w-7xl w-full mx-auto px-4 py-12 space-y-8">
        <div data-aos="fade-down">
          ${SectionTitle(name, "text-cyan-400 text-shadow-neon", "left")}
        </div>

        <div class="space-y-4 sm:pl-2">
         <p class="text-base sm:text-xl font-mono text-cyan-300 break-words w-full">
  <span id="typing-text" class="border-r-2 border-cyan-400"></span>
</p>
          <p 
            id="home-quote" 
            class="italic text-cyan-200 text-sm sm:text-base max-w-xl bg-black/30 px-4 py-2 rounded-md w-fit shadow-lg shadow-cyan-400/40" 
            data-aos="fade-right" 
            data-aos-delay="300">
            ${translations[lang].homeQuote}
          </p>

          <a 
            id="home-resume-btn" 
            href="#resume" 
            class="inline-block mt-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm sm:text-base"
            data-aos="zoom-in" 
            data-aos-delay="400">
            ${translations[lang].viewResume}
          </a>
        </div>
      </div>
    </section>
  `;
};

