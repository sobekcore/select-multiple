(()=>{"use strict";var e,t,n,r,o,i,l,s,a,c,d,u,p,f,m={424:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),l=n.n(i)()(o());l.push([e.id,'.select-multiple *, .select-multiple *::before, .select-multiple *::after {\n  box-sizing: border-box;\n}\n\n.select-multiple {\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n\n  --select-multiple-font-size: 13.3333px;\n  --select-multiple-font-color: #000000;\n  --select-multiple-background-color: #ffffff;\n  --select-multiple-border-color: #767676;\n  --select-multiple-shadow-color: #b6b6b6;\n}\n\n.select-multiple-hidden {\n  display: none;\n}\n\n.select-multiple [role="input"] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 4px;\n  border: 1px solid var(--select-multiple-border-color);\n  border-radius: 2px;\n  min-height: 30px;\n}\n\n.select-multiple [role="input"] tag {\n  font-family: Arial;\n  font-size: var(--select-multiple-font-size);\n  color: var(--select-multiple-font-color);\n  border: 1px solid var(--select-multiple-border-color);\n  border-radius: 2px;\n  padding: 1px 2px;\n  user-select: none;\n  cursor: pointer;\n}\n\n.select-multiple ul {\n  visibility: hidden;\n  position: absolute;\n  list-style: none;\n  user-select: none;\n  width: 100%;\n  min-width: min-content;\n  max-height: 188px;\n  overflow-y: scroll;\n  background: var(--select-multiple-background-color);\n  box-shadow: 0 0 16px var(--select-multiple-shadow-color);\n  border: 1px solid var(--select-multiple-border-color);\n  border-top: none;\n  padding: 0;\n  margin: 0;\n}\n\n.select-multiple ul.visible {\n  visibility: visible;\n}\n\n.select-multiple ul li {\n  font-family: Arial;\n  font-size: var(--select-multiple-font-size);\n  color: var(--select-multiple-font-color);\n  padding: 1px 4px;\n  min-height: 17px;\n}\n\n.select-multiple ul li.hidden {\n  display: none;\n}\n\n.select-multiple ul li:hover {\n  background: Highlight;\n  cursor: pointer;\n}\n',""]);const s=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(l[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&l[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},l=[],s=0;s<e.length;s++){var a=e[s],c=r.base?a[0]+r.base:a[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=n(u),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}l.push(u)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var s=n(i[l]);t[s].references--}for(var a=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},v={};function b(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return m[e](n,n.exports,b),n.exports}b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=b(379),t=b.n(e),n=b(795),r=b.n(n),o=b(569),i=b.n(o),l=b(565),s=b.n(l),a=b(216),c=b.n(a),d=b(589),u=b.n(d),p=b(424),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,"undefined"!=typeof document&&document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll("select[multiple]");for(const t of e){t.classList.add("select-multiple-hidden");const e=document.createElement("div");e.classList.add("select-multiple"),t.after(e);const n=document.createElement("div");n.setAttribute("role","input"),n.setAttribute("tabindex","0"),e.append(n);const r=document.createElement("ul");r.setAttribute("role","listbox"),e.append(r);const o=t.querySelectorAll("option");for(const e of o){const t=document.createElement("li");t.setAttribute("data-value",e.value),t.setAttribute("role","option"),t.innerText=e.innerText,r.append(t),t.addEventListener("click",(()=>{t.classList.toggle("hidden"),e.setAttribute("selected","selected");const r=document.createElement("tag");r.innerText=t.innerText,n.append(r),r.addEventListener("click",(()=>{t.classList.toggle("hidden"),e.removeAttribute("selected"),r.remove()}),{once:!0})}))}const{width:i}=r.getBoundingClientRect();n.style.width=`${i}px`,e.addEventListener("click",(()=>{r.classList.add("visible")})),document.addEventListener("click",(t=>{e.contains(t.target)||r.classList.remove("visible")}))}}))})();