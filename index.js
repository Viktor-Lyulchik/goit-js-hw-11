import{a as d,S as b,i as n}from"./assets/vendor-CocXUmuy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const L=void 0;d.defaults.baseURL="https://pixabay.com/api/";function v(r){return d.get("",{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:60}})}let l;const f=document.querySelector(".gallery"),m=document.querySelector(".loader");function q(r){const a=r.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:g,downloads:h})=>`<li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img
        class="gallery-image"
        src="${o}"
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
          ${g}
        </p>
        <p class="caption-value">
          <b class="caption-header">Downloads</b>
          ${h}
        </p>
    </div>
  </li>`).join("");f.innerHTML=a,y()}function y(){l?l.refresh():l=new b(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250,captionsData:"alt"})}function c(){f.innerHTML="",y()}function P(){m.style.display="block"}function u(){m.style.display="none"}const p=document.querySelector(".form");n.settings({position:"topRight"});p.addEventListener("submit",r=>{r.preventDefault();const a=r.currentTarget.elements["search-text"].value.trim();if(c(),P(),a===""){r.currentTarget.elements["search-text"].value="",n.error({title:"Error",message:"Your query is empty, enter the query text in search field!"}),u();return}v(a).then(o=>{const s=o.data.hits;s.length>0?q(s):(c(),n.error({title:"Error",message:"Sorry, there are no images matching your search query.Please try again!"}))}).catch(()=>n.error({title:"Error",message:"Error loading images from the server!"})).finally(()=>u()),p.reset()});
//# sourceMappingURL=index.js.map
