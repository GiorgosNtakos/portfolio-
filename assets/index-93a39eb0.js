(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var he={exports:{}};(function(e,o){(function(t,a){e.exports=a()})(Ee,function(){return function(t){function a(i){if(n[i])return n[i].exports;var l=n[i]={exports:{},id:i,loaded:!1};return t[i].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}var n={};return a.m=t,a.c=n,a.p="dist/",a(0)}([function(t,a,n){function i(d){return d&&d.__esModule?d:{default:d}}var l=Object.assign||function(d){for(var I=1;I<arguments.length;I++){var P=arguments[I];for(var B in P)Object.prototype.hasOwnProperty.call(P,B)&&(d[B]=P[B])}return d},b=n(1),S=(i(b),n(6)),c=i(S),h=n(7),u=i(h),p=n(8),m=i(p),y=n(9),T=i(y),$=n(10),J=i($),X=n(11),K=i(X),Z=n(14),Q=i(Z),L=[],U=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},H=function(){var d=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(d&&(U=!0),U)return L=(0,K.default)(L,v),(0,J.default)(L,v.once),L},G=function(){L=(0,Q.default)(),H()},s=function(){L.forEach(function(d,I){d.node.removeAttribute("data-aos"),d.node.removeAttribute("data-aos-easing"),d.node.removeAttribute("data-aos-duration"),d.node.removeAttribute("data-aos-delay")})},r=function(d){return d===!0||d==="mobile"&&T.default.mobile()||d==="phone"&&T.default.phone()||d==="tablet"&&T.default.tablet()||typeof d=="function"&&d()===!0},f=function(d){v=l(v,d),L=(0,Q.default)();var I=document.all&&!window.atob;return r(v.disable)||I?s():(v.disableMutationObserver||m.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?H(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){H(!0)}):document.addEventListener(v.startEvent,function(){H(!0)}),window.addEventListener("resize",(0,u.default)(H,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(H,v.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,J.default)(L,v.once)},v.throttleDelay)),v.disableMutationObserver||m.default.ready("[data-aos]",G),L)};t.exports={init:f,refresh:H,refreshHard:G}},function(t,a){},,,,,function(t,a){(function(n){function i(r,f,d){function I(g){var E=M,F=O;return M=O=void 0,N=g,A=r.apply(F,E)}function P(g){return N=g,x=setTimeout(R,f),_?I(g):A}function B(g){var E=g-j,F=g-N,me=f-E;return C?G(me,D-F):me}function q(g){var E=g-j,F=g-N;return j===void 0||E>=f||E<0||C&&F>=D}function R(){var g=s();return q(g)?oe(g):void(x=setTimeout(R,B(g)))}function oe(g){return x=void 0,w&&M?I(g):(M=O=void 0,A)}function ce(){x!==void 0&&clearTimeout(x),N=0,M=j=O=x=void 0}function ee(){return x===void 0?A:oe(s())}function V(){var g=s(),E=q(g);if(M=arguments,O=this,j=g,E){if(x===void 0)return P(j);if(C)return x=setTimeout(R,f),I(j)}return x===void 0&&(x=setTimeout(R,f)),A}var M,O,D,A,x,j,N=0,_=!1,C=!1,w=!0;if(typeof r!="function")throw new TypeError(p);return f=h(f)||0,b(d)&&(_=!!d.leading,C="maxWait"in d,D=C?H(h(d.maxWait)||0,f):D,w="trailing"in d?!!d.trailing:w),V.cancel=ce,V.flush=ee,V}function l(r,f,d){var I=!0,P=!0;if(typeof r!="function")throw new TypeError(p);return b(d)&&(I="leading"in d?!!d.leading:I,P="trailing"in d?!!d.trailing:P),i(r,f,{leading:I,maxWait:f,trailing:P})}function b(r){var f=typeof r>"u"?"undefined":u(r);return!!r&&(f=="object"||f=="function")}function S(r){return!!r&&(typeof r>"u"?"undefined":u(r))=="object"}function c(r){return(typeof r>"u"?"undefined":u(r))=="symbol"||S(r)&&v.call(r)==y}function h(r){if(typeof r=="number")return r;if(c(r))return m;if(b(r)){var f=typeof r.valueOf=="function"?r.valueOf():r;r=b(f)?f+"":f}if(typeof r!="string")return r===0?r:+r;r=r.replace(T,"");var d=J.test(r);return d||X.test(r)?K(r.slice(2),d?2:8):$.test(r)?m:+r}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},p="Expected a function",m=NaN,y="[object Symbol]",T=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,X=/^0o[0-7]+$/i,K=parseInt,Z=(typeof n>"u"?"undefined":u(n))=="object"&&n&&n.Object===Object&&n,Q=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,L=Z||Q||Function("return this")(),U=Object.prototype,v=U.toString,H=Math.max,G=Math.min,s=function(){return L.Date.now()};t.exports=l}).call(a,function(){return this}())},function(t,a){(function(n){function i(s,r,f){function d(w){var g=V,E=M;return V=M=void 0,j=w,D=s.apply(E,g)}function I(w){return j=w,A=setTimeout(q,r),N?d(w):D}function P(w){var g=w-x,E=w-j,F=r-g;return _?H(F,O-E):F}function B(w){var g=w-x,E=w-j;return x===void 0||g>=r||g<0||_&&E>=O}function q(){var w=G();return B(w)?R(w):void(A=setTimeout(q,P(w)))}function R(w){return A=void 0,C&&V?d(w):(V=M=void 0,D)}function oe(){A!==void 0&&clearTimeout(A),j=0,V=x=M=A=void 0}function ce(){return A===void 0?D:R(G())}function ee(){var w=G(),g=B(w);if(V=arguments,M=this,x=w,g){if(A===void 0)return I(x);if(_)return A=setTimeout(q,r),d(x)}return A===void 0&&(A=setTimeout(q,r)),D}var V,M,O,D,A,x,j=0,N=!1,_=!1,C=!0;if(typeof s!="function")throw new TypeError(u);return r=c(r)||0,l(f)&&(N=!!f.leading,_="maxWait"in f,O=_?v(c(f.maxWait)||0,r):O,C="trailing"in f?!!f.trailing:C),ee.cancel=oe,ee.flush=ce,ee}function l(s){var r=typeof s>"u"?"undefined":h(s);return!!s&&(r=="object"||r=="function")}function b(s){return!!s&&(typeof s>"u"?"undefined":h(s))=="object"}function S(s){return(typeof s>"u"?"undefined":h(s))=="symbol"||b(s)&&U.call(s)==m}function c(s){if(typeof s=="number")return s;if(S(s))return p;if(l(s)){var r=typeof s.valueOf=="function"?s.valueOf():s;s=l(r)?r+"":r}if(typeof s!="string")return s===0?s:+s;s=s.replace(y,"");var f=$.test(s);return f||J.test(s)?X(s.slice(2),f?2:8):T.test(s)?p:+s}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},u="Expected a function",p=NaN,m="[object Symbol]",y=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,J=/^0o[0-7]+$/i,X=parseInt,K=(typeof n>"u"?"undefined":h(n))=="object"&&n&&n.Object===Object&&n,Z=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,Q=K||Z||Function("return this")(),L=Object.prototype,U=L.toString,v=Math.max,H=Math.min,G=function(){return Q.Date.now()};t.exports=i}).call(a,function(){return this}())},function(t,a){function n(h){var u=void 0,p=void 0;for(u=0;u<h.length;u+=1)if(p=h[u],p.dataset&&p.dataset.aos||p.children&&n(p.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!i()}function b(h,u){var p=window.document,m=i(),y=new m(S);c=u,y.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function S(h){h&&h.forEach(function(u){var p=Array.prototype.slice.call(u.addedNodes),m=Array.prototype.slice.call(u.removedNodes),y=p.concat(m);if(n(y))return c()})}Object.defineProperty(a,"__esModule",{value:!0});var c=function(){};a.default={isSupported:l,ready:b}},function(t,a){function n(p,m){if(!(p instanceof m))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function p(m,y){for(var T=0;T<y.length;T++){var $=y[T];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(m,$.key,$)}}return function(m,y,T){return y&&p(m.prototype,y),T&&p(m,T),m}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,S=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function p(){n(this,p)}return l(p,[{key:"phone",value:function(){var m=i();return!(!b.test(m)&&!S.test(m.substr(0,4)))}},{key:"mobile",value:function(){var m=i();return!(!c.test(m)&&!h.test(m.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();a.default=new u},function(t,a){Object.defineProperty(a,"__esModule",{value:!0});var n=function(l,b,S){var c=l.node.getAttribute("data-aos-once");b>l.position?l.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!S&&c!=="true")&&l.node.classList.remove("aos-animate")},i=function(l,b){var S=window.pageYOffset,c=window.innerHeight;l.forEach(function(h,u){n(h,c+S,b)})};a.default=i},function(t,a,n){function i(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(a,"__esModule",{value:!0});var l=n(12),b=i(l),S=function(c,h){return c.forEach(function(u,p){u.node.classList.add("aos-init"),u.position=(0,b.default)(u.node,h.offset)}),c};a.default=S},function(t,a,n){function i(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(a,"__esModule",{value:!0});var l=n(13),b=i(l),S=function(c,h){var u=0,p=0,m=window.innerHeight,y={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(y.offset&&!isNaN(y.offset)&&(p=parseInt(y.offset)),y.anchor&&document.querySelectorAll(y.anchor)&&(c=document.querySelectorAll(y.anchor)[0]),u=(0,b.default)(c).top,y.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=m/2;break;case"bottom-center":u+=m/2+c.offsetHeight;break;case"center-center":u+=m/2+c.offsetHeight/2;break;case"top-top":u+=m;break;case"bottom-top":u+=c.offsetHeight+m;break;case"center-top":u+=c.offsetHeight/2+m}return y.anchorPlacement||y.offset||isNaN(h)||(p=h),u+p};a.default=S},function(t,a){Object.defineProperty(a,"__esModule",{value:!0});var n=function(i){for(var l=0,b=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)l+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),b+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:b,left:l}};a.default=n},function(t,a){Object.defineProperty(a,"__esModule",{value:!0});var n=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(l){return{node:l}})};a.default=n}])})})(he);var Le=he.exports;const de=$e(Le);function ie(e,o="text-cyan-400",t="left"){return`
      <h2 class="text-3xl sm:text-5xl font-extrabold ${o} ${t==="center"?"text-center":"text-left"} mb-12 relative font-inter">
        ${e}
        <div class="mt-6 w-[320px] h-[24px] overflow-hidden ${t==="center"?"mx-auto":""}">
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
    `}let be=!1;function je(e){be=e}function Y(e){!be&&sessionStorage.getItem(`animated_${e}`)?setTimeout(()=>{document.querySelectorAll(`#${e} [data-aos]`).forEach(o=>{o.removeAttribute("data-aos"),o.removeAttribute("data-aos-delay")})},0):sessionStorage.setItem(`animated_${e}`,"1")}function ye(){document.querySelectorAll("[data-skill-toggle]").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-skill-toggle"),t=document.getElementById(o),a=e.querySelector("span:last-child"),n=t.classList.contains("hidden");t.classList.toggle("hidden"),a.textContent=n?"−":"+"})})}function Me(e,o){return`
      <div>
        <div class="flex justify-between mb-1 text-sm">
          <span>${e}</span>
          <span>${o}%</span>
        </div>
        <div class="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div class="bg-cyan-400 h-3 rounded-full" style="width: ${o}%"></div>
        </div>
      </div>
    `}function te(e,o,t=0){const a=e.toLowerCase().replace(/\s+/g,"-");return`
      <div class="flex flex-col h-full" data-aos="zoom-in-up" data-aos-delay="${t}">
        <button 
          class="w-full text-left font-semibold text-slate-200 bg-slate-800 px-4 py-3 rounded-md hover:bg-slate-700 transition flex justify-between items-center"
          data-skill-toggle="${a}"
        >
          <span>${e}</span>
          <span class="text-cyan-400 text-xl">+</span>
        </button>
        <div id="${a}" class="hidden pt-4 transition-all duration-300">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${o.map(n=>Me(n.name,n.percent)).join("")}
          </div>
        </div>
      </div>
    `}function ve(e="en",o){Y("about-section");const t=o[e].aboutSection;return`
      <section id="about-section" class="bg-slate-800 py-24 px-4 text-white">
        <div class="max-w-7xl mx-auto space-y-20">
          <div data-aos="fade-down">
            ${ie(t.title,"text-yellow-300","left")}
          </div>
  
          <div class="grid md:grid-cols-2 gap-16 items-start">
            <div class="flex justify-center" data-aos="fade-right" data-aos-delay="100">
              <img src="/portfolio-/images/my_photo.jpg" alt="Profile photo"
                class="rounded-lg shadow-xl w-96 h-96 object-cover border-4 border-cyan-500" />
            </div>
  
            <div class="space-y-5 text-left text-lg text-slate-200" data-aos="fade-left" data-aos-delay="200">
              <p>${t.nameIntro}</p>
              <p>${t.motivation}</p>
              <p>${t.studies}</p>
              <p>${t.goal}</p>
  
              <div class="grid grid-cols-2 gap-x-8 gap-y-3 text-sm pt-6" data-aos="fade-up" data-aos-delay="300">
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
            <div class="grid md:grid-cols-2 gap-x-12 gap-y-6 items-start">
              ${te("HDL",[{name:"VHDL",percent:90},{name:"Verilog / SystemVerilog",percent:76}],0)}
              ${te("Programming Languages",[{name:"C",percent:85},{name:"Java",percent:85},{name:"SQL",percent:75}],100)}
              ${te("EDA Tools",[{name:"Synopsys Tools",percent:80},{name:"Vivado",percent:85},{name:"ModelSim",percent:80},{name:"Cadence",percent:73}],200)}
              ${te("Software & OS",[{name:"Visual Studio",percent:80},{name:"Microchip Studio",percent:68},{name:"Linux OS",percent:77}],300)}
              ${te("Others",[{name:"LATEX",percent:75},{name:"Git / Bash",percent:73},{name:"TCL Scripting",percent:62}],400)}
            </div>
          </div>
        </div>
      </section>
    `}const we=(e,o)=>{Y("contact");const t=o[e].contactSection;return`
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
        ${ue("mailto:g_ntakos.dev@gmail.com",t.tooltipEmail,250,"email")}
        ${ue("https://github.com/GiorgosNtakos",t.tooltipGitHub,400,"github")}
        ${ue("https://www.linkedin.com/in/giorgos-ntakos-28b294272/",t.tooltipLinkedIn,550,"linkedin")}
      </div>
    </form>
  </section>
`};function ue(e,o,t,a){const n={email:{bg:"bg-cyan-500 hover:bg-cyan-400",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},github:{bg:"bg-slate-800 hover:bg-slate-700",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.74-1.34-1.74-1.1-.75.08-.74.08-.74 1.22.1 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.31 3.53 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.53.12-3.2 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.67.25 2.9.12 3.2.77.84 1.24 1.92 1.24 3.24 0 4.63-2.82 5.65-5.5 5.95.44.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57A12 12 0 0012 0z" clip-rule="evenodd"/></svg>'},linkedin:{bg:"bg-cyan-500 hover:bg-cyan-400",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V149.1h92.88zm-46.44-338C24.24 110 0 85.77 0 56.72A56.66 56.66 0 0 1 56.68 0c31.23 0 56.47 24.23 56.47 56.68 0 29.05-25.24 53.28-56.47 53.32zM447.92 448h-92.6V304.4c0-34.25-.71-78.21-47.65-78.21-47.66 0-54.95 37.26-54.95 75.7V448h-92.56V149.1h88.84v40.8h1.28c12.39-23.49 42.64-48.27 87.79-48.27 93.92 0 111.21 61.85 111.21 142.3V448z"/></svg>'}},{bg:i,icon:l}=n[a];return`
    <a href="${e}" target="_blank" rel="noopener noreferrer"
       data-aos="fade-up" data-aos-delay="${t}"
       class="group relative flex items-center justify-center w-12 h-12 rounded-full ${i} transition shadow-lg"
       aria-label="${a}">
      <span class="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition duration-200">
        ${o}
      </span>
      ${l}
    </a>
  `}let re=[],se=0,ne=0,W=!1,ae=null;function He(e){ae&&clearTimeout(ae),re=e,se=0,ne=0,W=!1,le()}function le(){const e=document.getElementById("typing-text");if(!e||re.length===0)return;const o=re[se],t=W?o.substring(0,ne--):o.substring(0,ne++);e.textContent=t,!W&&ne===o.length?(W=!0,ae=setTimeout(le,1500)):W&&ne===0?(W=!1,se=(se+1)%re.length,ae=setTimeout(le,400)):ae=setTimeout(le,W?40:80)}const xe=(e,o)=>(Y("home"),setTimeout(()=>He(o[e].typewriter),500),`
    <section id="home" class="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white sm:text-left w-full"
      style="background-image: url('/portfolio-/images/vecteezy_close-up-of-circuit-board-electronic-computer-hardware_26769533.jpg');">

      <div class="max-w-7xl w-full mx-auto px-4 py-12 space-y-8">
        <div data-aos="fade-down">
          ${ie(e==="gr"?"Γεώργιος Ντάκος":"Georgios Ntakos","text-cyan-400 text-shadow-neon","left")}
        </div>

        <div class="space-y-4 sm:pl-2">
          <p 
            class="text-base sm:text-xl font-mono text-cyan-300 max-w-full overflow-x-auto whitespace-nowrap"
            data-aos="fade-left" 
            data-aos-delay="200">
            <span id="typing-text" class="inline-block border-r-2 border-cyan-400 pr-1 max-w-full overflow-hidden whitespace-nowrap"></span>
          </p>

          <p 
            id="home-quote" 
            class="italic text-cyan-200 text-sm sm:text-base max-w-xl bg-black/30 px-4 py-2 rounded-md w-fit shadow-lg shadow-cyan-400/40" 
            data-aos="fade-right" 
            data-aos-delay="300">
            ${o[e].homeQuote}
          </p>

          <a 
            id="home-resume-btn" 
            href="#resume" 
            class="inline-block mt-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded text-sm sm:text-base"
            data-aos="zoom-in" 
            data-aos-delay="400">
            ${o[e].viewResume}
          </a>
        </div>
      </div>
    </section>
  `);function ke(e,o){Y("resume");const t=o[e];return`
    <section id="resume" 
             class="min-h-screen bg-slate-900 px-4 py-24 flex flex-col justify-start text-white">

      <div class="max-w-7xl w-full mx-auto" data-aos="fade-down" data-aos-delay="100">
        ${ie(t.resume,"text-cyan-300","left")}
      </div>

      <div class="flex-grow flex flex-col items-center justify-center mt-12" data-aos="zoom-in" data-aos-delay="200">
        <div class="max-w-2xl text-center space-y-8">
          <p class="text-slate-300 text-lg">
            ${t.resumeIntro}
          </p>

          <a href="/portfolio-/files/${e==="gr"?"cv_gr.pdf":"cv_en.pdf"}" target="_blank" rel="noopener noreferrer"
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
  `}function Se(e,o){Y("projects");const t=o[e];return`
    <section id="projects" class="min-h-screen bg-slate-800 px-4 py-24">
      <div class="max-w-7xl mx-auto space-y-20">
        <div data-aos="fade-down" data-aos-delay="100">
          ${ie(t.projectsTitle,"text-yellow-300","left")}
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
  `}function pe(e,o){return`
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[525px] gap-y-6 justify-items-center mt-12">
      ${o[e].workExperience.map((a,n)=>`
        <div class="bg-slate-900 shadow-lg border border-cyan-700 rounded-xl p-6 w-[500px] flex flex-col justify-start text-left hover:shadow-cyan-500/20 transition-shadow duration-300"
             data-aos="fade-up" data-aos-delay="${n*100}">
          <h3 class="text-lg font-semibold text-cyan-400">${a.company}</h3>
          <h4 class="text-xl font-bold text-white mt-1">${a.title}</h4>
          <p class="text-sm text-cyan-200 italic mt-1">${a.duration}</p>
          <p class="text-slate-300 text-[17px] mt-4 leading-relaxed whitespace-pre-line">
            ${a.description.trim()}
          </p>
        </div>
      `).join("")}
    </div>
  `}function Pe(e,o){return`
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[525px] gap-y-6 justify-items-center mt-12">
      ${o[e].conferences.map((a,n)=>`
        <div class="bg-slate-900 shadow-lg border border-cyan-700 rounded-xl p-6 w-[500px] flex flex-col justify-start text-left hover:shadow-cyan-500/20 transition-shadow duration-300"
             data-aos="fade-up" data-aos-delay="${n*100}">
          <h3 class="text-lg font-semibold text-cyan-400">${a.title}</h3>
          <h4 class="text-xl font-bold text-white mt-1">${a.role}</h4>
          <p class="text-sm text-cyan-200 italic mt-1">${a.date}</p>
          <p class="text-slate-300 text-[17px] mt-4 leading-relaxed whitespace-pre-line">
            ${a.description.trim()}
          </p>
        </div>
      `).join("")}
    </div>
  `}function Ve(e,o){const t=o[e];return`
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[525px] gap-y-6 justify-items-center mt-12">
      ${o[e].projectsList.map((n,i)=>`
        <div class="bg-slate-900 shadow-lg border border-cyan-700 rounded-xl p-6 w-[500px] flex flex-col justify-start text-left hover:shadow-cyan-500/20 transition-shadow duration-300"
             data-aos="fade-up" data-aos-delay="${i*100}">
          <div class="flex flex-wrap gap-2 mb-3">
            ${n.tech.map(l=>`<span class="bg-cyan-800 text-cyan-100 text-xs font-semibold px-2 py-1 rounded">${l}</span>`).join("")}
          </div>
          <h3 class="text-xl font-bold text-cyan-400 mb-1">${n.title}</h3>
          <p class="text-slate-300 text-[17px] mt-2 leading-relaxed whitespace-pre-line">${n.description.trim()}</p>
          <p id="more-${i}" class="text-slate-300 text-[17px] mt-2 leading-relaxed whitespace-pre-line hidden">${n.extended.trim()}</p>
          <button data-target="${i}" class="read-more-btn mt-2 text-sm text-cyan-400 hover:underline">${t.readMore}</button>
        </div>
      `).join("")}
    </div>
  `}function Ae(e,o){const t=document.getElementById("tab-content"),a=(n,i)=>{document.getElementById(n).addEventListener("click",()=>{t.innerHTML=i(e,o),requestAnimationFrame(()=>de.refresh()),document.querySelectorAll(".tab-button").forEach(l=>l.classList.replace("text-yellow-300","text-cyan-400")),document.getElementById(n).classList.replace("text-cyan-400","text-yellow-300")})};a("projects-tab",Ve),a("work-tab",pe),a("conferences-tab",Pe),t.innerHTML=pe(e,o),requestAnimationFrame(()=>de.refresh()),document.getElementById("work-tab").classList.replace("text-cyan-400","text-yellow-300")}function Ie(e,o){var a;Y("timeline");const t=(a=o[e])==null?void 0:a.timelineEvents;return Array.isArray(t)?`
    <section id="timeline" class="min-h-screen bg-slate-900 py-24 px-4">
      <div class="max-w-screen-xl mx-auto">
        <div data-aos="fade-down" data-aos-delay="100">
          ${ie(o[e].timeline,"text-cyan-400","left")}
        </div>
        <div class="space-y-16 relative mt-12">
          <div class="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-cyan-500 z-0"></div>
          ${t.map((n,i)=>Oe(n,i)).join("")}
        </div>
      </div>
    </section>
  `:(console.error("❌ timelineEvents not found or not an array"),"<section id='timeline'></section>")}function Oe({year:e,title:o,description:t,side:a},n){const i=a==="left",l=i?"fade-right":"fade-left",b=n*100;return`
    <div class="flex items-center w-full relative" data-aos="${l}" data-aos-delay="${b}">
      ${i?fe(e,o,t,"right"):ge()}
      <div class="w-[2px] bg-cyan-500 relative flex justify-center z-10">
        <div class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-400 border-2 border-white rounded-full z-10"></div>
        <div class="absolute top-1/2 transform -translate-y-1/2 ${i?"right-full":"left-full"} w-16 sm:w-24 md:w-[160px] h-0.5 bg-cyan-500 z-0"></div>
      </div>
      ${i?ge():fe(e,o,t,"left")}
    </div>
  `}function fe(e,o,t,a){return`
    <div class="w-1/2 flex ${a==="left"?"justify-start":"justify-end"} relative">
      <div class="bg-slate-800 border border-cyan-500 rounded-md p-4 w-full max-w-md text-slate-200 ${a==="left"?"ml-[160px]":"mr-[160px]"}">
        <p class="text-cyan-400 text-sm">${e}</p>
        <h3 class="font-semibold text-lg">${o}</h3>
        <p class="text-sm mt-1">${t}</p>
      </div>
    </div>
  `}function ge(){return'<div class="w-1/2"></div>'}function De(){return`
    <!-- Mobile Toggle Button -->
    <button id="sidebar-toggle" class="fixed top-4 left-4 z-50 sm:hidden bg-slate-800 p-2 rounded-md shadow-md text-white">
      <i class="fas fa-bars text-xl"></i>
    </button>

    <!-- Sidebar -->
    <aside id="sidebar" class="fixed top-0 left-0 h-full w-3/4 max-w-xs sm:w-20 bg-slate-900 shadow-md flex flex-col items-center py-6 z-40 space-y-6 transform -translate-x-full sm:translate-x-0 transition-transform duration-300 ease-in-out">

      <!-- Close (only mobile) -->
      <button id="sidebar-close" class="absolute top-4 right-4 sm:hidden text-white text-xl">
        <i class="fas fa-times"></i>
      </button>

      <!-- Navigation -->
      <nav class="mt-12 sm:mt-0 flex flex-col gap-6 items-center text-slate-400">
        <a href="#home" class="group nav-icon">
          <i class="fas fa-home text-lg mb-1"></i>
          <span id="nav-home" class="text-xs">Home</span>
        </a>
        <a href="#about-section" class="group nav-icon">
          <i class="fas fa-user text-lg mb-1"></i>
          <span id="nav-about" class="text-xs">About</span>
        </a>
        <a href="#resume" class="group nav-icon">
          <i class="fas fa-file-alt text-lg mb-1"></i>
          <span id="nav-resume" class="text-xs">Resume</span>
        </a>
        <a href="#projects" class="group nav-icon">
          <i class="fas fa-briefcase text-lg mb-1"></i>
          <span id="nav-work" class="text-xs">Work</span>
        </a>
        <a href="#timeline" class="group nav-icon">
          <i class="fas fa-clock text-lg mb-1"></i>
          <span id="nav-timeline" class="text-xs">Timeline</span>
        </a>
        <a href="#contact" class="group nav-icon">
          <i class="fas fa-envelope text-lg mb-1"></i>
          <span id="nav-contact" class="text-xs">Contact</span>
        </a>
        <button id="lang-toggle" class="nav-icon focus:outline-none">
          <i class="fas fa-globe text-lg mb-1"></i>
          <span id="nav-lang" class="text-xs">EN / GR</span>
        </button>
      </nav>
    </aside>
  `}const k={en:{home:"Home",about:"About",resume:"Resume",work:"Work",timeline:"Timeline",contact:"Contact",langToggle:"EN / GR",homeQuote:"“The beginning is half of the whole.”",viewResume:"View Resume",typewriter:["Computer Engineer specialized in Hardware Design ","Passionate about Digital Systems and Embedded Architectures ","Focused on Clean, Efficient, and Scalable Hardware Solutions ","Driven by Design Precision and Logical Structure ","Exploring RTL, SoC Design, and Embedded Development "],aboutSection:{title:"About Me",nameIntro:"My name is Georgios Ntakos, and I recently completed my Integrated Master’s degree in Computer Engineering from the Computer Engineering and Informatics Department (CEID) of the University of Patras, graduating in 2024.",motivation:"I’m a motivated and detail-driven Computer Engineer, passionate about digital systems, embedded design, and problem solving. Even at the beginning of my career, I strive to build efficient, reliable, and meaningful solutions.",studies:"During my studies, I developed a strong foundation in hardware description languages, software engineering, and EDA tools. I particularly enjoy working at the intersection of hardware and software — combining logic, structure, and creativity in every project.",goal:"I'm eager to contribute to real-world challenges, collaborate in dynamic teams, and continue evolving as a developer and engineer.",info:{birthday:"Birthday",degree:"Degree",city:"City",email:"Email",age:"Age",availability:"Availability"},labels:{birthday:"Mar. 1999",degree:"Integrated Master",city:"Athens, Greece",availability:"Open to work"},skillsTitle:"Skills"},resume:"Resume",resumeIntro:"For a complete overview of my academic background, practical experience, and technical expertise, you can download my full CV in PDF format below.",projectsTitle:"Projects & Work Experience",workTab:"Work Experience",projectsTab:"Projects",conferencesTab:"Conferences & Events",readMore:"Read more",readLess:"Read less",workExperience:[{company:"Think Silicon (Applied Materials)",title:"Hardware Designer Internship",duration:"Mar. 2023 – Jun. 2023",description:`I collaborated on floating-point Soft-IP modules in SystemVerilog, focusing on RTL verification with Synopsys tools.
I automated synthesis flows using TCL scripting and coordinated with the Thessaloniki team and Synopsys representatives.
I participated in design sync meetings, contributed to company-wide discussions, and proposed architectural enhancements.`},{company:"University of Patras",title:"Assistant Lab Volunteer",duration:"Oct. 2020 – Jun. 2022",description:`Supported the Basic and Digital Electronics Lab by assisting with lab sessions, supervising trainees, and maintaining lab equipment.
I conducted circuit implementation and experimentation, analyzed data, and contributed to team collaboration and continuous improvement.`}],conferences:[{title:"MOCAST 2025 – Dresden, Germany",role:"Conference Paper Presentation (Accepted)",date:"11–13 June 2025",description:`Our paper, <em> Optimizing Lightweight Cryptographic Schemes for Enhanced Security in RFID and Wireless Sensor Networks</em>, was accepted for an oral presentation at MOCAST 2025 at TU Dresden.
 The paper proposes FPGA-optimized, pipelined architectures of the Hummingbird-2 cipher.
These architectures target high efficiency and security. Although I could not attend due to military service, I contributed to the full hardware implementation, and conducted benchmarking on Artix-7 FPGAs.`},{title:"Atoms to Algos II – Athens",role:"Industry Event Participation",date:"8 June 2023",description:`I attended an event on AI-driven chip innovation hosted by Think Silicon and Applied Materials.
 I gained insights from NVIDIA, Qualcomm, and other industry leaders on topics such as low-power GPU design, AI hardware pipelines, and semiconductor manufacturing under global constraints.
I also networked with experts in AI and embedded systems.`}],projectsList:[{title:"Diploma Thesis: Hummingbird-2 on FPGA",tech:["VHDL","ModelSim","Vivado","FPGA"],description:"An embedded cryptographic module was developed that implements the Hummingbird-2 algorithm and targets low-resource environments, such as RFID and wireless sensors. The maximum frequency achieved on the Artix-7 FPGA was 244 MHz while optimizing for area and power.",extended:"The project involved simulation, synthesis, and gate-level hardware implementation using ModelSim and Vivado. Architectural enhancements such as pipelining and parallelization were explored, resulting in significant throughput gains. A complete authenticated encryption system with verified correctness and efficient area/power trade-offs was delivered. A comparison against lightweight ciphers in the literature showed competitive performance."},{title:"MySynth: Music Note Synthesizer with VGA Output",tech:["Verilog","ModelSim","Xilnix ISE","FPGA"],description:`A digital music synthesizer system was developed on an FPGA that enables users to play musical notes using a PS/2 keyboard.
  The system visualizes the notes in real time on a VGA monitor as white notes on a pentagram.
  I designed three core modules: a keyboard decoder, a VGA controller, and a sound generator that uses pulse width modulation (PWM) for buzzer playback.`,extended:`I configured VGA sync signals (HSYNC and VSYNC) for a resolution of 640×400 @70 Hz with a pixel clock of 25 MHz.
  I handled ESC key input to reset both the video and audio outputs on the fly.
  I implemented FSM-based real-time rendering logic and an audio output pipeline.
  I focused on efficient resource usage and timing accuracy to achieve smooth VGA rendering and glitch-free sound.`},{title:"Post-Quantum Digital Signature Architecture",tech:["VHDL","ModelSim","Vivado","FPGA"],description:`I developed a digital signature architecture based on the Hidden Discrete Logarithm Problem (HDLP) to target post-quantum cryptographic resilience.
  The algorithm was designed and implemented using VHDL, and its functionality was simulated in ModelSim. Full synthesis and hardware compatibility were verified in Vivado.`,extended:`The scheme employed a four-dimensional, non-commutative, associative algebra (FNAA) to enhance resistance against quantum adversaries.
  The focus was on criteria such as 2-dimensional cyclicity and masking operations to prevent periodicity analysis during key recovery.
  The performance characteristics and security level were then compared against NIST PQC standards.
  The aim was to achieve a lightweight implementation with a reduced key size and improved verification performance compared to traditional schemes.`},{title:"HUD System for Tire Pressure & Temperature Monitoring",tech:["Embedded C"],description:`We built an embedded head-up display (HUD) system that monitors tire pressure and temperature in real time.
  I integrated sensors for data acquisition and designed firmware for wireless Bluetooth transmission and LED visual output.`,extended:` The system employed interrupt-driven analog-to-digital converter (ADC) sampling and a custom sensor calibration algorithm.
  The microcontroller wirelessly received the data and displayed live values on an LED display positioned in the driver’s line of sight.
  With portability and safety in mind, the project was designed for use with cars.
  The firmware was written in embedded C and optimized for responsiveness and low power consumption.`}],timelineEvents:[{year:"Nov. 2024 – Aug. 2025",title:"Military Service – Air Defense Artillery",description:"I served in the Greek Army at an anti-aircraft unit in Samos, fulfilling my national service with commitment.",side:"left"},{year:"11 Jun. 2025 - 13 Jun. 2025",title:"Paper Accepted at MOCAST 2025",description:"I co-authored a paper on secure FPGA-based lightweight cryptography, accepted for oral presentation at MOCAST 2025. I couldn't attend due to military service.",side:"right"},{year:"Dec. 2024",title:"Graduated from CEID",description:"I completed my Integrated Master’s degree in Computer Engineering at the University of Patras.",side:"left"},{year:"8 Jun. 2023",title:"Atoms to Algos II – Athens",description:"I attended a high-level semiconductor and AI conference with experts from NVIDIA and Qualcomm, exploring innovations in low-power GPUs and AI hardware.",side:"right"},{year:"Mar. 2023 - Jun. 2023",title:"Internship at Think Silicon",description:"I worked on Soft-IP floating-point design using SystemVerilog and Synopsys tools.",side:"left"},{year:"Dec. 2022 - Oct. 2024",title:"Diploma Thesis: Hummingbird-2 on FPGA",description:"I developed a lightweight authenticated encryption core optimized for hardware efficiency.",side:"right"},{year:"Oct. 2020 – Jun. 2022",title:"Assistant at Basic and Digital Electronics Lab",description:"I supervised students and maintained equipment, ensuring the lab ran smoothly.",side:"left"}],contactSection:{title:"Contact Me",namePlaceholder:"Your name",emailPlaceholder:"Your email",messagePlaceholder:"Your message",sendButton:"Send",tooltipEmail:"Send Email",tooltipGitHub:"View GitHub",tooltipLinkedIn:"View LinkedIn"}},gr:{home:"Αρχική",about:"Σχετικά",resume:"Βιογραφικό",work:"Έργα",timeline:"Χρονολόγιο",contact:"Επικοινωνία",langToggle:"GR / EN",homeQuote:"«Αρχή ήμισυ παντός.»",viewResume:"Προβολή Βιογραφικού",typewriter:["Μηχανικός Υπολογιστών με εξειδίκευση στον Σχεδιασμό Υλικού ","Παθιασμένος για τα Ψηφιακά Συστήματα και τις Ενσωματωμένες Αρχιτεκτονικές ","Επικεντρωμένος σε Καθαρές, Αποδοτικές & Επεκτάσιμες Λύσεις Υλικού ","Με κίνητρο την Ακρίβεια Σχεδίασης και τη Λογική Δομή ","Ασχολούμαι με RTL, Σχεδίαση SoC και Ενσωματωμένη Ανάπτυξη "],aboutSection:{title:"Σχετικά με Εμένα",nameIntro:"Ονομάζομαι Γεώργιος Ντάκος και πρόσφατα ολοκλήρωσα το πτυχίο Ενιαίου και Αδιάσπαστου Μεταπτυχιακού Προγράμματος (Integrated Master) στη Μηχανική Ηλεκτρονικών Υπολογιστών, από το Τμήμα Μηχανικών Η/Υ & Πληροφορικής του Πανεπιστημίου Πατρών (2024).",motivation:"Είμαι ένας παρακινημένος και λεπτομερής Μηχανικός Υπολογιστών, με πάθος για τα ψηφιακά συστήματα, τον ενσωματωμένο σχεδιασμό και την επίλυση προβλημάτων.",studies:"Κατά τη διάρκεια των σπουδών μου ανέπτυξα γερά θεμέλια στις γλώσσες περιγραφής υλικού, τη μηχανική λογισμικού και τα εργαλεία σχεδίασης κυκλωμάτων.",goal:"Ανυπομονώ να συνεισφέρω σε πραγματικές προκλήσεις, να συνεργαστώ σε δυναμικές ομάδες και να εξελιχθώ συνεχώς ως μηχανικός και σχεδιαστής ανάπτυξης υλικού.",info:{birthday:"Ημερομηνία γέννησης",degree:"Τίτλος σπουδών",city:"Πόλη",email:"Email",age:"Ηλικία",availability:"Διαθεσιμότητα"},labels:{birthday:"Μαρ. 1999",degree:"Ενιαίο Πτυχίο / Master",city:"Αθήνα, Ελλάδα",availability:"Διαθέσιμος για εργασία"},skillsTitle:"Δεξιότητες"},resume:"Βιογραφικό",resumeIntro:"Για πλήρη εικόνα του ακαδημαϊκού μου υπόβαθρου, της πρακτικής εμπειρίας και των τεχνικών δεξιοτήτων μου, μπορείτε να κατεβάσετε το αναλυτικό μου βιογραφικό σε μορφή PDF παρακάτω.",projectsTitle:"Έργα και Εργασιακή Εμπειρία",workTab:"Επαγγελματική Εμπειρία",projectsTab:"Έργα",conferencesTab:"Συνέδρια & Εκδηλώσεις",readMore:"Περισσότερα",readLess:"Λιγότερα",workExperience:[{company:"Think Silicon (Applied Materials)",title:"Πρακτική Άσκηση ως Σχεδιαστής Υλικού",duration:"Μαρ. 2023 – Ιούν. 2023",description:`Συνεργάστηκα στην ανάπτυξη Soft-IP μονάδων κινητής υποδιαστολής (floating-point units) σε SystemVerilog, εστιάζοντας στην επαλήθευση RTL με εργαλεία της Synopsys.
  Αυτοματοποίησα τις ροές σύνθεσης χρησιμοποιώντας TCL scripting και συντονίστηκα με την ομάδα της Θεσσαλονίκης και τους εκπροσώπους της Synopsys.
  Συμμετείχα σε συσκέψεις σχεδιασμού, συνέβαλα σε συζητήσεις σε επίπεδο εταιρείας και πρότεινα αρχιτεκτονικές βελτιώσεις.`},{company:"Πανεπιστήμιο Πατρών",title:"Εθελοντής Βοηθός Εργαστηρίου",duration:"Οκτ. 2020 – Ιούν. 2022",description:`Υποστήριξα το Εργαστήριο Βασικών και Ψηφιακών Ηλεκτρονικών βοηθώντας στις εργαστηριακές συνεδρίες, επιβλέποντας τους εκπαιδευόμενους και συντηρώντας τον εργαστηριακό εξοπλισμό.
  Πραγματοποίησα υλοποίηση κυκλωμάτων και πειράματα, ανέλυσα δεδομένα και συνέβαλα στη συνεργασία της ομάδας και στη συνεχή βελτίωση.`}],conferences:[{title:"MOCAST 2025 – Δρέσδη, Γερμανία",role:"Παρουσίαση Εργασίας σε Συνέδριο",date:"11–13 Ιουνίου 2025",description:`Η εργασία μας, <em>Optimizing Lightweight Cryptographic Schemes for Enhanced Security in RFID and Wireless Sensor Networks</em>, έγινε δεκτή για προφορική παρουσίαση στο MOCAST 2025 στο Τεχνικό Πανεπιστήμιο της Δρέσδης.
  Η εργασία προτείνει βελτιστοποιημένες αρχιτεκτονικές FPGA, με αγωγούς διοχέτευσης του κρυπτογραφήματος Hummingbird-2.
  Αυτές οι αρχιτεκτονικές στοχεύουν σε υψηλή αποδοτικότητα και ασφάλεια. Αν και δεν μπόρεσα να παρευρεθώ λόγω στρατιωτικής θητείας, συνέβαλα στην πλήρη υλοποίηση υλικού και διεξήγαγα συγκριτική αξιολόγηση σε Artix-7 FPGAs`},{title:"Atoms to Algos II – Αθήνα",role:"Συμμετοχή σε Βιομηχανική Εκδήλωση",date:"8 Ιουνίου 2023",description:`Παρακολούθησα μια εκδήλωση σχετικά με την καινοτομία στα τσιπ με γνώμονα την τεχνητή νοημοσύνη, η οποία διοργανώθηκε από την Think Silicon και την Applied Materials.
  Αποκόμισα πληροφορίες από την NVIDIA, την Qualcomm και άλλους ηγέτες του κλάδου για θέματα όπως ο σχεδιασμός GPU χαμηλής κατανάλωσης, οι αγωγοί υλικού AI και η κατασκευή ημιαγωγών υπό παγκόσμιους περιορισμούς.
  Επίσης, δικτυώθηκα με εμπειρογνώμονες στον τομέα της τεχνητής νοημοσύνης και των ενσωματωμένων συστημάτων.`}],projectsList:[{title:"Διπλωματική Εργασία: Hummingbird-2 σε FPGA",tech:["VHDL","ModelSim","Vivado","FPGA"],description:`Αναπτύχθηκε μια ενσωματωμένη κρυπτογραφική μονάδα που υλοποιεί τον αλγόριθμο Hummingbird-2 και απευθύνεται σε περιβάλλοντα με χαμηλούς πόρους, όπως τα RFID και οι ασύρματοι αισθητήρες. Η μέγιστη συχνότητα που επιτεύχθηκε στο Artix-7 FPGA ήταν 244 MHz, ενώ παράλληλα βελτιστοποιήθηκε η περιοχή και η ισχύς.
  `,extended:"Το έργο περιελάμβανε προσομοίωση, σύνθεση και υλοποίηση υλικού σε επίπεδο πύλης με τη χρήση των ModelSim και Vivado. Διερευνήθηκαν αρχιτεκτονικές βελτιώσεις, όπως η pipelining και η παραλληλοποίηση, με αποτέλεσμα σημαντική αύξηση της απόδοσης. Παραδόθηκε ένα ολοκληρωμένο σύστημα κρυπτογράφησης με εξακριβωμένη ορθότητα και αποτελεσματικούς συμβιβασμούς περιοχής/ισχύος. Η σύγκριση με ελαφριές κρυπτογραφήσεις στη βιβλιογραφία έδειξε ανταγωνιστικές επιδόσεις."},{title:"MySynth: Συνθέτης μουσικών νοτών με έξοδο VGA",tech:["Verilog","ModelSim","Xilnix ISE","FPGA"],description:`
  Ένα σύστημα ψηφιακού συνθέτη μουσικής αναπτύχθηκε σε ένα FPGA που επιτρέπει στους χρήστες να παίζουν μουσικές νότες χρησιμοποιώντας ένα πληκτρολόγιο PS/2.
  Το σύστημα απεικονίζει τις νότες σε πραγματικό χρόνο σε μια οθόνη VGA ως λευκές νότες σε ένα πεντάγραμμο.
  Σχεδίασα τρεις βασικές μονάδες: έναν αποκωδικοποιητή πληκτρολογίου, έναν ελεγκτή VGA και μια γεννήτρια ήχου που χρησιμοποιεί διαμόρφωση εύρους παλμών (PWM) για την αναπαραγωγή ήχου.
  `,extended:`Διαμόρφωσα τα σήματα συγχρονισμού VGA (HSYNC και VSYNC) για ανάλυση 640×400 @70 Hz με ρολόι εικονοστοιχείων 25 MHz.
  Χειρίστηκα την είσοδο του πλήκτρου ESC για την επαναφορά τόσο της εξόδου βίντεο όσο και της εξόδου ήχου εν κινήσει.
  Υλοποίησα λογική απόδοσης σε πραγματικό χρόνο βασισμένη σε FSM και αγωγό εξόδου ήχου.
  Επικεντρώθηκα στην αποδοτική χρήση πόρων και στην ακρίβεια χρονισμού για να επιτύχω ομαλή απόδοση VGA και ήχο χωρίς δυσλειτουργίες.`},{title:"Αρχιτεκτονική Ψηφιακής Υπογραφής Post-Quantum",tech:["VHDL","ModelSim","Vivado","FPGA"],description:`Ανέπτυξα μια αρχιτεκτονική ψηφιακής υπογραφής που βασίζεται στο πρόβλημα του κρυμμένου διακριτού λογαρίθμου (HDLP) για να στοχεύσω στην ανθεκτικότητα της μετα-κβαντικής κρυπτογραφίας.
  Ο αλγόριθμος σχεδιάστηκε και υλοποιήθηκε με τη χρήση VHDL και η λειτουργία του προσομοιώθηκε στο ModelSim. Η πλήρης σύνθεση και η συμβατότητα υλικού επαληθεύτηκαν στο Vivado.`,extended:`Το σχήμα χρησιμοποίησε μια τετραδιάστατη, μη αντιμεταθετική, συσχετιστική άλγεβρα (FNAA) για να ενισχύσει την ανθεκτικότητα έναντι κβαντικών αντιπάλων.
  Η έμφαση δόθηκε σε κριτήρια όπως η δισδιάστατη κυκλικότητα και οι πράξεις συγκάλυψης για την αποτροπή της ανάλυσης περιοδικότητας κατά την ανάκτηση κλειδιών.
  Στη συνέχεια συγκρίθηκαν τα χαρακτηριστικά απόδοσης και το επίπεδο ασφάλειας με τα πρότυπα NIST PQC.
  Στόχος ήταν να επιτευχθεί μια ελαφριά υλοποίηση με μειωμένο μέγεθος κλειδιού και βελτιωμένη απόδοση επαλήθευσης σε σύγκριση με τα παραδοσιακά σχήματα.`},{title:"HUD Σύστημα για Πίεση & Θερμοκρασία Ελαστικών",tech:["Embedded C"],description:`Κατασκευάσαμε ένα ενσωματωμένο σύστημα head-up display (HUD) που παρακολουθεί την πίεση και τη θερμοκρασία των ελαστικών σε πραγματικό χρόνο.
  Ενσωμάτωσα αισθητήρες για την απόκτηση δεδομένων και σχεδίασα υλικολογισμικό για ασύρματη μετάδοση Bluetooth και οπτική έξοδο LED.`,extended:`Το σύστημα χρησιμοποίησε δειγματοληψία αναλογικού-ψηφιακού μετατροπέα (ADC) με διακοπή και έναν προσαρμοσμένο αλγόριθμο βαθμονόμησης αισθητήρων.
  Ο μικροελεγκτής λάμβανε ασύρματα τα δεδομένα και εμφάνιζε τις ζωντανές τιμές σε μια οθόνη LED τοποθετημένη στο οπτικό πεδίο του οδηγού.
  Με γνώμονα τη φορητότητα και την ασφάλεια, το έργο σχεδιάστηκε για χρήση σε αυτοκίνητα.
  Το υλικολογισμικό γράφτηκε σε ενσωματωμένη C και βελτιστοποιήθηκε για απόκριση και χαμηλή κατανάλωση ενέργειας.`}],timelineEvents:[{year:"Νοε. 2024 – Αυγ. 2025",title:"Στρατιωτική Θητεία – Αντιαεροπορικό Πυροβολικό",description:"Υπηρέτησα στον Ελληνικό Στρατό σε μονάδα αντιαεροπορικού πυροβολικού στη Σάμο, εκπληρώνοντας τα εθνικά μου καθήκοντα με συνέπεια.",side:"left"},{year:"11 Ιουν. 2025 – 13 Ιουν. 2025",title:"Αποδοχή Εργασίας στο MOCAST 2025",description:"Συνέγραψα εργασία για ελαφριά κρυπτογράφηση με FPGA, η οποία έγινε δεκτή για προφορική παρουσίαση στο MOCAST 2025 (TU Dresden). Δεν μπόρεσα να παρευρεθώ λόγω στρατιωτικών υποχρεώσεων.",side:"right"},{year:"Δεκ. 2024",title:"Αποφοίτηση από το ΤΜΗΥΠ",description:"Ολοκλήρωσα το Ενιαίο Πτυχίο / Μεταπτυχιακό στη Μηχανική Υπολογιστών στο Πανεπιστήμιο Πατρών.",side:"left"},{year:"8 Ιουν. 2023",title:"Atoms to Algos II – Αθήνα",description:"Παρακολούθησα συνέδριο υψηλού επιπέδου για ημιαγωγούς και AI, με συμμετοχές από NVIDIA και Qualcomm. Εξέτασα καινοτομίες στη σχεδίαση chip και AI αρχιτεκτονικών.",side:"right"},{year:"Μαρ. 2023 – Ιουν. 2023",title:"Πρακτική Άσκηση στη Think Silicon",description:"Ασχολήθηκα με σχεδίαση Soft-IP κινητής υποδιαστολής σε SystemVerilog και εργαλεία Synopsys.",side:"left"},{year:"Δεκ. 2022 – Οκτ. 2024",title:"Διπλωματική: Hummingbird-2 σε FPGA",description:"Ανάπτυξα πυρήνα αυθεντικοποιημένης κρυπτογράφησης με βελτιστοποίηση για hardware απόδοση.",side:"right"},{year:"Οκτ. 2020 – Ιουν. 2022",title:"Βοηθός στο Εργαστήριο Ψηφιακών και Βασικών Ηλεκτρονικών",description:"Επίβλεψα φοιτητές και διατήρησα εξοπλισμό, διασφαλίζοντας την ομαλή λειτουργία του εργαστηρίου.",side:"left"}],contactSection:{title:"Επικοινωνία",namePlaceholder:"Το όνομά σας",emailPlaceholder:"Το email σας",messagePlaceholder:"Το μήνυμά σας",sendButton:"Αποστολή",tooltipEmail:"Αποστολή Email",tooltipGitHub:"Προβολή GitHub",tooltipLinkedIn:"Προβολή LinkedIn"}}};let z=localStorage.getItem("lang")||"en";function Ce(e){document.querySelector("#app").innerHTML=`
    ${De()}
    <main class="bg-slate-950 text-white ml-0 sm:ml-20 px-4">
      ${xe(e,k)}
      ${ve(e,k)}
      ${ke(e,k)}
      ${Se(e,k)}
      ${Ie(e,k)}
      ${we(e,k)}
    </main>
  `}function Te(e){const o=k[e];document.getElementById("nav-home").innerText=o.home,document.getElementById("nav-about").innerText=o.about,document.getElementById("nav-resume").innerText=o.resume,document.getElementById("nav-work").innerText=o.work,document.getElementById("nav-timeline").innerText=o.timeline,document.getElementById("nav-contact").innerText=o.contact,document.getElementById("nav-lang").innerText=o.langToggle}function ze(e){Te(e),document.getElementById("home").outerHTML=xe(e,k),document.getElementById("about-section").outerHTML=ve(e,k),document.getElementById("resume").outerHTML=ke(e,k),document.getElementById("projects").outerHTML=Se(e,k),document.getElementById("timeline").outerHTML=Ie(e,k),document.getElementById("contact").outerHTML=we(e,k),Ae(e,k),ye(),setTimeout(()=>{document.querySelectorAll(".read-more-btn").forEach(o=>{var n;const t=o.getAttribute("data-target"),a=(n=document.getElementById(`more-${t}`))==null?void 0:n.classList.contains("hidden");o.textContent=a?k[e].readMore:k[e].readLess}),de.init({duration:600,easing:"ease-out-cubic",once:!0})},100),window.scrollTo({top:0,behavior:"smooth"})}Ce(z);Te(z);Ae(z,k);ye();window.addEventListener("load",()=>{window.location.hash&&history.replaceState(null,null," "),setTimeout(()=>{var e;(e=document.getElementById("home"))==null||e.scrollIntoView({behavior:"auto"}),de.init({duration:600,easing:"ease-out-cubic",once:!0})},100)});window.addEventListener("beforeunload",()=>{sessionStorage.clear()});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("lang-toggle").addEventListener("click",()=>{z=z==="en"?"gr":"en",localStorage.setItem("lang",z),je(!0),ze(z)});const e=document.querySelectorAll(".tab-button");e.forEach(o=>{o.addEventListener("click",()=>{e.forEach(t=>t.classList.replace("text-yellow-300","text-cyan-400")),o.classList.replace("text-cyan-400","text-yellow-300")})})});document.addEventListener("click",e=>{if(e.target.classList.contains("read-more-btn")){const o=e.target.getAttribute("data-target"),a=document.getElementById(`more-${o}`).classList.toggle("hidden");e.target.textContent=a?k[z].readMore:k[z].readLess}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("sidebar"),o=document.getElementById("sidebar-toggle"),t=document.getElementById("sidebar-close");o&&e&&o.addEventListener("click",()=>{e.classList.remove("-translate-x-full")}),t&&e&&t.addEventListener("click",()=>{e.classList.add("-translate-x-full")}),document.querySelectorAll(".nav-icon a").forEach(a=>{a.addEventListener("click",()=>{window.innerWidth<640&&e.classList.add("-translate-x-full")})})});
