(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="/autofill-test/assets/javascript-8dac5379.svg",a="/autofill-test/vite.svg";function i(l){let o=0;const r=c=>{o=c,l.innerHTML=`count is ${o}`};l.addEventListener("click",()=>r(o+1)),r(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${a}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${p}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <form >
      <input type="text" placeholder="firstname" required />
      <input type="text" placeholder="login" />
      <input type="password" placeholder="passwod" />
      <button type="submit">submit</button>
    </form>
    <form >
      <input type="text" inputmode="numeric" placeholder="number" autocomplete="cc-number" />
      <input type="text" placeholder="exp month" autocomplete="cc-exp-month" />
      <input type="text" placeholder="exp year" autocomplete="cc-exp-year" />
      <input type="text" placeholder="cardholder name" autocomplete="cc-name" />
      <input type="text" placeholder="cvv" autocomplete="cc-csc" />
      <button type="submit">submit</button>
    </form>
    <form autocomplete="off">
    <input type="text" placeholder="name" autocomplete="name" />
    <input type="text" placeholder="email" autocomplete="email" />
    <input
      type="text"
      placeholder="street-address"
      autocomplete="street-address" />
    <input type="text" placeholder="country" autocomplete="country" />
    <input
      type="text"
      placeholder="country-name"
      autocomplete="country-name" />
    <input type="text" placeholder="postal-code" autocomplete="postal-code" />
    <input type="text" placeholder="tel" autocomplete="tel" />
    <button type="submit">submit</button>
  </form>
  </div>
`;i(document.querySelector("#counter"));
