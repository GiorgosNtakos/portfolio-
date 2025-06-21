import { SectionTitle } from './SectionTitle.js';
import { manageAOS } from '../helpers/helperAOS.js';


export function renderTimeline(lang, translations) {
  manageAOS('timeline')
  const events = translations[lang]?.timelineEvents;

  if (!Array.isArray(events)) {
    console.error("❌ timelineEvents not found or not an array");
    return "<section id='timeline'></section>";
  }

  return `
    <section id="timeline" class="min-h-screen bg-slate-900 py-24 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div data-aos="fade-down" data-aos-delay="100">
          ${SectionTitle(translations[lang].timeline, "text-cyan-400", "left")}
        </div>
        <div class="space-y-16 relative mt-12">
          <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-cyan-500 z-0"></div>
          ${events.map((event, index) => renderTimelineItem(event, index)).join("")}
        </div>
      </div>
    </section>
  `;
}




function renderTimelineItem({ year, title, description, side }, index) {
  const isLeft = side === 'left';
  const aos = isLeft ? "fade-right" : "fade-left";
  const delay = index * 100;

  return `
    <div class="flex items-center w-full relative" data-aos="${aos}" data-aos-delay="${delay}">
      ${isLeft ? timelineContent(year, title, description, 'right') : spacer()}
      <div class="w-[2px] bg-cyan-500 relative flex justify-center z-10">
        <div class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-400 border-2 border-white rounded-full z-10"></div>
        <div class="absolute top-1/2 transform -translate-y-1/2 ${isLeft ? 'right-full' : 'left-full'} w-16 sm:w-24 md:w-[160px] h-0.5 bg-cyan-500 z-0"></div>
      </div>
      ${!isLeft ? timelineContent(year, title, description, 'left') : spacer()}
    </div>
  `;
}





function timelineContent(year, title, description, align) {
  const justify = align === "left" ? "justify-start" : "justify-end";
  const marginSide = align === "left" ? "ml-[160px]" : "mr-[160px]"; // <-- προσθέτουμε λίγο spacing

  return `
    <div class="w-1/2 flex ${justify} relative">
      <div class="bg-slate-800 border border-cyan-500 rounded-md p-4 w-full max-w-md text-slate-200 ${marginSide}">
        <p class="text-cyan-400 text-sm">${year}</p>
        <h3 class="font-semibold text-lg">${title}</h3>
        <p class="text-sm mt-1">${description}</p>
      </div>
    </div>
  `;
}




function spacer() {
  return `<div class="w-1/2"></div>`;
}