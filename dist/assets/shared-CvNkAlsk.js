(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();function m(){const e=document.querySelector("#app");if(e){if(!document.querySelector(".stars-back")){const t=document.createElement("div");t.innerHTML=`
      <div class="star-layer stars-back"></div>
      <div class="star-layer stars-mid"></div>
      <div class="star-layer stars-front"></div>
      <div class="scan-line-overlay"></div>
      <div class="vignette"></div>
    `,e.prepend(...t.childNodes)}if(!document.querySelector(".sticky-nav")){const t=document.createElement("nav");t.className="glass-panel sticky-nav",t.innerHTML=`
      <div class="container nav-content">
        <div class="nav-links center-nav">
          <a href="/index.html">Home</a>
          <a href="/fiction.html">Fiction</a>
          <a href="/starcitizen.html">Star Citizen</a>
          <a href="/journalism.html">Journalism</a>
          <a href="/software.html">Software</a>
          <a href="/newsletter.html">Newsletter</a>
        </div>
      </div>
    `,e.appendChild(t)}l(),c(),u()}}function l(){const e=document.querySelectorAll(".star-layer");window.addEventListener("mousemove",t=>{const i=(t.clientX-window.innerWidth/2)/(window.innerWidth/2),o=(t.clientY-window.innerHeight/2)/(window.innerHeight/2);e.forEach((n,r)=>{const a=(r+1)*3;n.style.transform=`translate(${i*a*15}px, ${o*a*15}px)`})})}function d(e){const t=e.dataset.originalText||e.innerText;e.dataset.originalText||(e.dataset.originalText=t);const i=t.replace(/0x[0-9A-F]+|[-+]?[0-9]*\.?[0-9]+/gi,o=>{if(o.toLowerCase().startsWith("0x"))return"0x"+Math.floor(Math.random()*65535).toString(16).toUpperCase().padStart(4,"0");if(o.includes(":"))return o;if(o.includes(".")){const n=o.split("."),r=n[1]?n[1].length:2;return(Math.random()*100).toFixed(r)}else return Math.floor(Math.random()*99).toString().padStart(o.length,"0")});e.innerText=i}function c(){document.querySelectorAll(".glass-panel, .hero-section").forEach(e=>{const t=e.querySelector(".header-coords");t&&(e.addEventListener("mouseenter",()=>{const i=setInterval(()=>d(t),50);e.dataset.coordInterval=i}),e.addEventListener("mouseleave",()=>{clearInterval(e.dataset.coordInterval)}))})}function f(e,t,i=100){const o=document.getElementById(t);if(!o)return;let n=0;o.innerHTML="";function r(){n<e.length&&(o.innerHTML+=e.charAt(n),n++,setTimeout(r,i))}setTimeout(r,800)}function p(){const e=document.querySelector("#app");if(e&&!document.querySelector("footer")){const t=document.createElement("footer");t.className="container",t.style.marginTop="4rem",t.style.paddingBottom="4rem",t.innerHTML=`<p style="opacity: 0.5; font-size: 0.8rem;">&copy; ${new Date().getFullYear()} Tripp Robbins. DATA_LOG_SYNC: COMPLETE</p>`,e.appendChild(t)}}function u(){if(document.getElementById("ui-modal"))return;const e=document.createElement("div");e.id="ui-modal",e.className="modal",e.innerHTML=`
        <div class="modal-content glass-panel corner-brackets">
            <div class="bottom-corners"></div>
            <button class="close-modal">&times;</button>
            <div id="modal-body"></div>
        </div>
    `,document.body.appendChild(e),e.querySelector(".close-modal").onclick=s,e.onclick=t=>{t.target===e&&s()}}function v(e,t=!1){const i=document.getElementById("ui-modal"),o=document.getElementById("modal-body");i&&o&&(o.innerHTML=e,t?i.classList.add("large"):i.classList.remove("large"),i.classList.add("active"),document.body.style.overflow="hidden")}function s(){const e=document.getElementById("ui-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}export{p as a,m as i,v as o,f as t};
