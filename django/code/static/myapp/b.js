(()=>{"use strict";var e,t={862:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMemo=t.getData=void 0,t.getData=function(){var e=document.getElementById("json-data");return JSON.parse(e.textContent)},t.getMemo=function(){var e=document.getElementById("json-data");return JSON.parse(e.textContent)}},815:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(294)),a=r(745),l=r(862),u=document.getElementById("root");(0,a.createRoot)(u).render(o.default.createElement("div",null,o.default.createElement("div",null,"b.html"),o.default.createElement("div",null,(0,l.getData)().app)))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],u=!0,d=0;d<r.length;d++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={b:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[l,u,d]=r,i=0;if(l.some((t=>0!==e[t]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(d)var c=d(n)}for(t&&t(r);i<l.length;i++)a=l[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkwebpack=self.webpackChunkwebpack||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,["vendors-node_modules_react-dom_client_js"],(()=>n(815)));o=n.O(o)})();