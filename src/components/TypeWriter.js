let phrases = [];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let typewriterTimeoutId = null; // ✅ χρησιμοποιείται για τον έλεγχο του loop

export function startTypewriter(translatedPhrases) {
  if (typewriterTimeoutId) {
    clearTimeout(typewriterTimeoutId); // ✅ σταματά προηγούμενο loop
  }

  phrases = translatedPhrases;
  currentPhrase = 0;
  currentChar = 0;
  isDeleting = false;

  type();
}

function type() {
  const el = document.getElementById("typing-text");
  if (!el || phrases.length === 0) return;

  const text = phrases[currentPhrase];
  const visible = isDeleting ? text.substring(0, currentChar--) : text.substring(0, currentChar++);

  el.textContent = visible;

  if (!isDeleting && currentChar === text.length) {
    isDeleting = true;
    typewriterTimeoutId = setTimeout(type, 1500);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    typewriterTimeoutId = setTimeout(type, 400);
  } else {
    typewriterTimeoutId = setTimeout(type, isDeleting ? 40 : 80);
  }
}
