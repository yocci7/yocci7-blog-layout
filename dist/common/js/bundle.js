(()=>{"use strict";var e={327:function(e,i,t){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i,"__esModule",{value:!0});const a=s(t(682)),n=s(t(840)),r=s(t(878));document.addEventListener("DOMContentLoaded",(()=>{const e=new a.default(r.default),i=document.querySelector(".main");i&&e.renderArticles(i);const t=new n.default(r.default),s=document.querySelector(".sidebar");s&&t.renderArticles(s)}))},682:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=class{constructor(e){this.articles=e}renderArticles(e){const i=e.querySelector(".article");i&&this.articles.forEach((e=>{const t=document.createElement("div");t.classList.add("article__item");const s=e.img.trim(),a=this.truncateDescription(e.description,32);t.innerHTML=`\n          <a href="${e.link}">\n            <section class="article__item__section">\n              ${this.generateImageHTML(s,e.tag)}\n              <div class="article__item__section__text">\n                ${this.generateHeadlineHTML(e.headline)}\n                ${this.generateDescriptionHTML(a)}\n                ${this.generateDataPublishedHTML(e.dataPublished)}\n              </div>\n            </section>\n          </a>\n        `,i.appendChild(t)}))}truncateDescription(e,i){return e.length<=i?e:e.substring(0,i-3).trim()+"..."}generateImageHTML(e,i){return`\n      <img class="article__item__section__img" src="https://yocci7-blog.vercel.app/img/article/${e}"/>\n      <p class="article__item__section__tag">${i}</p>\n    `}generateHeadlineHTML(e){return""!==e.trim()?`<h4 class="article__item__section__text__headline">${e}</h4>`:""}generateDescriptionHTML(e){return""!==e.trim()?`<p class="article__item__section__text__description">${e}</p>`:""}generateDataPublishedHTML(e){return""!==e.trim()?`<p class="article__item__section__text__dataPublished">${e}</p>`:""}}},840:(e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=class{constructor(e){this.articles=e.slice(0,3)}renderArticles(e){const i=e.querySelector(".recentArticle");i&&this.articles.forEach((e=>{const t=document.createElement("div");t.classList.add("recentArticle__item");const s=e.img.trim(),a=this.truncateDescription(e.description,24);t.innerHTML=`\n          <a href="${e.link}">\n            <section class="recentArticle__item__section">\n              ${this.generateImageHTML(s)}\n              <div class="recentArticle__item__section__text">\n                ${this.generateHeadlineHTML(e.headline)}\n                ${this.generateDescriptionHTML(a)}\n              </div>\n            </section>\n          </a>\n        `,i.appendChild(t)}))}truncateDescription(e,i){return e.length<=i?e:e.substring(0,i-3).trim()+"..."}generateImageHTML(e){return`<img class="recentArticle__item__section__img" src="https://yocci7-blog.vercel.app/img/article/${e}"/>`}generateHeadlineHTML(e){return""!==e.trim()?`<h4 class="recentArticle__item__section__text__headline">${e}</h4>`:""}generateDescriptionHTML(e){return""!==e.trim()?`<p class="recentArticle__item__section__text__description">${e}</p>`:""}}},878:e=>{e.exports=JSON.parse('[{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Pugって何？ Sassって何？そんな疑問を解決します。","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"pug_sass.png","tag":"HTML/CSS","headline":"Pug Sass Tutorial","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/23"},{"link":"#","img":"","tag":"OTHER","headline":"このBLOGについて","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","dataPublished":"2024/02/29"}]')}},i={};!function t(s){var a=i[s];if(void 0!==a)return a.exports;var n=i[s]={exports:{}};return e[s].call(n.exports,n,n.exports,t),n.exports}(327)})();
