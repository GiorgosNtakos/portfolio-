// src/components/SectionTitle.js
export function SectionTitle(text, color = 'text-cyan-400', align = 'left') {
    const alignment = align === 'center' ? 'text-center' : 'text-left';
  
    return `
      <h2 class="text-5xl font-extrabold ${color} ${alignment} mb-12 relative font-inter">
        ${text}
        <div class="mt-6 w-[320px] h-[24px] overflow-hidden ${align === 'center' ? 'mx-auto' : ''}">
          <svg
            viewBox="0 0 960 24"
            width="960"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="animate-wave-scroll"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color="#67e8f9" flood-opacity="1" />
              </filter>
            </defs>
            <path
              d="M0 12 H40 V0 H80 V24 H120 V12 H160 V0 H200 V24 H240 V12 H280 V0 H320 V24 H360 V12 H400 V0 H440 V24 H480 V12 H520 V0 H560 V24 H600 V12 H640 V0 H680 V24 H720 V12 H760 V0 H800 V24 H840 V12 H880 V0 H920 V24 H960"
              stroke="#67e8f9"
              filter="url(#glow)"
              stroke-width="3.5"
              fill="none"
              stroke-linecap="round"
              class="animate-flicker"
            />
          </svg>
        </div>
      </h2>
    `;
  }
  