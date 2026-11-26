/* ORDO: Safari-first external links; no credentials, tokens or cookie access. */
(function(){
function safariURL(href,origin,ios,standalone,enabled){
 if(!ios||!standalone||!enabled)return null;
 // The browser supplies a normalized absolute anchor.href, not arbitrary typed input.
 const m=/^https:\/\/([^/?#]+)(?:[/?#]|$)/i.exec(href);
 if(!m||m[1].includes("@")||("https://"+m[1]).toLowerCase()===origin.toLowerCase()||m[1].toLowerCase()==="apps.apple.com")return null;
 return "x-safari-"+href;
}
function install(w,d){
 const key="ordo-safari-external-links-v1";
 const ios=/iPhone|iPad|iPod/i.test(w.navigator.userAgent)||(w.navigator.platform==="MacIntel"&&w.navigator.maxTouchPoints>1);
 const standalone=w.navigator.standalone===true||w.matchMedia("(display-mode: standalone)").matches;
 const preference=d.getElementById("ordoSafariExternalLinks"),note=d.getElementById("ordoBrowserHelp");
 function enabled(){try{return w.localStorage.getItem(key)!=="off"}catch{return true}}
 if(preference){preference.checked=enabled();preference.disabled=!ios||!standalone;preference.addEventListener("change",()=>{try{w.localStorage.setItem(key,preference.checked?"on":"off")}catch{}})}
 if(note)note.textContent=ios&&standalone?"Ordo tries to open learning websites in Safari so they can reuse your saved sign-ins. If a link does not open, use Open normally or turn off this option. Sign in on the website itself if asked.":"External links open normally in a new browser tab or supported app. Your browser handles its own sign-ins.";
 let fallback=null,timer=null,onHide=null;
 function closeFallback(){if(fallback){fallback.remove();fallback=null}}
 function stopWatch(){if(timer!==null)w.clearTimeout(timer);timer=null;if(onHide)d.removeEventListener("visibilitychange",onHide);onHide=null}
 function showFallback(url){closeFallback();const panel=d.createElement("aside");panel.className="ordo-browser-fallback";panel.setAttribute("aria-label","External link options");const msg=d.createElement("p");msg.textContent="If Safari did not open, use the normal link or copy it into Safari.";const actions=d.createElement("div");const ordinary=d.createElement("a");ordinary.href=url;ordinary.target="_blank";ordinary.rel="noopener noreferrer";ordinary.dataset.ordoOpenNormally="true";ordinary.textContent="Open normally ↗";ordinary.addEventListener("click",()=>w.setTimeout(closeFallback,0));const copy=d.createElement("button");copy.type="button";copy.textContent="Copy link";copy.addEventListener("click",async()=>{try{await w.navigator.clipboard.writeText(url);copy.textContent="Copied ✓"}catch{const field=d.createElement("input");field.type="text";field.value=url;field.readOnly=true;field.setAttribute("aria-label","Link to copy");panel.appendChild(field);field.focus();field.select()}});const dismiss=d.createElement("button");dismiss.type="button";dismiss.textContent="Dismiss";dismiss.addEventListener("click",closeFallback);actions.append(ordinary,copy,dismiss);panel.append(msg,actions);d.body.appendChild(panel);fallback=panel}
 d.addEventListener("click",event=>{
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const a=event.target?.closest?.("a[href]");
  if(!a||a.hasAttribute("download")||a.dataset.ordoOpenNormally==="true")return;
  const url=safariURL(a.href,w.location.origin,ios,standalone,preference?preference.checked:enabled());if(!url)return;
  event.preventDefault();stopWatch();closeFallback();
  const original=a.href;
  onHide=()=>{if(d.visibilityState==="hidden"){stopWatch();closeFallback()}};
  d.addEventListener("visibilitychange",onHide);
  timer=w.setTimeout(()=>{stopWatch();if(d.visibilityState!=="hidden")showFallback(original)},1300);
  try{w.location.assign(url)}catch{stopWatch();showFallback(original)}
 });
}
install(window,document);
})();
