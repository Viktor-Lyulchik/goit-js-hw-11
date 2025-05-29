import{a as p,S as g,i as n}from"./assets/vendor-CocXUmuy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="50537281-d9f964856e12bb960f966723f";p.defaults.baseURL="https://pixabay.com/api/";function b(o){return p.get("",{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}let l;const d=document.querySelector(".gallery"),f=document.querySelector(".loader");function L(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:m,downloads:y})=>`<li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img
        class="gallery-image"
        src="${a}"
        alt="${e}"
      />
    </a>
    <div class="image-captions">
        <p class="caption-value">
          <b class="caption-header">Likes</b>
          ${t}
        </p>
        <p class="caption-value">
          <b class="caption-header">Views</b>
          ${i}
        </p>
        <p class="caption-value">
          <b class="caption-header">Comments</b>
          ${m}
        </p>
        <p class="caption-value">
          <b class="caption-header">Downloads</b>
          ${y}
        </p>
    </div>
  </li>`).join("");d.innerHTML=r,l?l.refresh():l=new g(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"})}function c(){d.innerHTML=""}function v(){f.style.display="block"}function q(){f.style.display="none"}const u=document.querySelector(".form");n.settings({position:"topRight"});u.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){n.error({title:"Error",message:"Your query is empty, enter the query text in search field!"});return}c(),v(),b(r).then(a=>{const s=a.data.hits;s.length>0?L(s):(c(),n.error({title:"Error",message:"Sorry, there are no images matching your search query.Please try again!"}))}).catch(()=>n.error({title:"Error",message:"Error loading images from the server!"})).finally(()=>q()),u.reset()});
//# sourceMappingURL=index.js.map
