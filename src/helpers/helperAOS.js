// helperAOS.js
import { languageJustChanged } from '../state.js';

export function manageAOS(sectionId) {
  if (!languageJustChanged && sessionStorage.getItem(`animated_${sectionId}`)) {
    setTimeout(() => {
      document.querySelectorAll(`#${sectionId} [data-aos]`).forEach(el => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-delay');
      });
    }, 0);
  } else {
    sessionStorage.setItem(`animated_${sectionId}`, '1');
  }
}
