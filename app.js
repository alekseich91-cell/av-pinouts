'use strict';
const data=window.CONNECTORS;
const $=id=>document.getElementById(id);
const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icons={'Все разъёмы':'▦','Аудио':'♫','Видео':'▱','Свет':'☼','Сеть':'⌘','Данные':'⇄','Управление':'⌁','Питание':'ϟ','Переходники':'↔'};
const categories=['Все разъёмы',...Object.keys(icons).filter(x=>x!=='Все разъёмы')];
function readStorage(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
let stored=readStorage('kontakt-favorites',[]);
let favorites=new Set(Array.isArray(stored)?stored.filter(id=>data.some(item=>item.id===id)):[]);
let category='Все разъёмы',onlyFavorites=false,current=null,toastTimeout;
const savedTheme=readStorage('kontakt-theme',null);
if(savedTheme==='dark'||(!savedTheme&&matchMedia('(prefers-color-scheme: dark)').matches))document.body.classList.add('dark');
function persist(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{toast('Браузер не разрешает сохранение на устройстве');}}
function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('toast').hidden=true,2700);}
function pinColor(signal){const base=signal.toLowerCase();const color=base.includes('оранжев')?'#dd833d':base.includes('зелён')?'#459469':base.includes('син')?'#427cbd':'#936448';return base.startsWith('бело')?`linear-gradient(135deg,#fff 50%,${color} 50%)`:color;}
function art(item){
 return `<img src="${escapeHTML(item.image)}" alt="" width="500" height="220" loading="lazy" decoding="async">`;
}
function swatch(color){
 const hex=color.hex;
 const background=hex.length>1?`repeating-linear-gradient(135deg,${hex[0]} 0 5px,${hex[1]} 5px 10px)`:hex[0];
 return `<span class="wire-swatch" style="background:${background}" aria-hidden="true"></span>`;
}
function colorGuide(item){
 const guide=item.wireColors;
 return `<section class="color-guide ${guide.kind==='none'?'no-wire-colors':''}" aria-label="Цветовая схема"><div class="color-guide-heading"><h3>${escapeHTML(guide.title)}</h3><span class="color-kind">${guide.kind==='standard'?'Схема':guide.kind==='common'?'Часто встречается':'Без единой схемы'}</span></div><p>${escapeHTML(guide.note)}</p>${item.connectorColors?`<div class="connector-markings"><h4>Маркировка корпуса, не жил</h4>${item.connectorColors.map(c=>`<span class="color-label">${swatch(c)}${escapeHTML(c.name)}</span>`).join('')}</div>`:''}${guide.source?`<p class="color-source">Источник цветов: <a href="${escapeHTML(guide.source[1])}" target="_blank" rel="noopener noreferrer">${escapeHTML(guide.source[0])} ↗</a></p>`:''}</section>`;
}
function pinTable(item){
 const hasColors=item.pins.some(p=>p.color);
 const colorOnly=item.shape==='rj45';
 return `<div class="table-wrap"><table class="${hasColors&&!colorOnly?'with-colors':''}"><thead><tr><th scope="col">Контакт</th>${colorOnly?'':`<th scope="col">${item.category==='Переходники'?'Соединить с':'Назначение'}</th>`}${hasColors?'<th scope="col">Цвет жилы</th>':''}</tr></thead><tbody>${item.pins.map(p=>`<tr><td>${escapeHTML(p.pin)}</td>${colorOnly?'':`<td>${escapeHTML(p.signal)}</td>`}${hasColors?`<td>${p.color?`<span class="color-label">${swatch(p.color)}${escapeHTML(p.color.name)}</span>`:'<span class="not-defined">Не задан</span>'}</td>`:''}</tr>`).join('')}</tbody></table></div>`;
}
function renderNav(){
 $('navigation').innerHTML=categories.map(cat=>`<button class="nav-button ${category===cat?'active':''}" data-category="${cat}" aria-pressed="${category===cat}"><span class="nav-icon" aria-hidden="true">${icons[cat]}</span>${cat}<b>${cat==='Все разъёмы'?data.length:data.filter(item=>item.category===cat).length}</b></button>`).join('');
 $('mobile-filters').innerHTML=categories.map(cat=>`<button class="filter-chip ${category===cat?'active':''}" data-category="${cat}" aria-pressed="${category===cat}">${cat==='Все разъёмы'?'Все':cat}</button>`).join('');
}
function normalize(value){return value.toLowerCase().replace(/ё/g,'е').replace(/[·−–↔]/g,' ').replace(/\s+/g,' ');}
function render(){
 const query=normalize($('search').value.trim());
 const matches=data.filter(item=>(category==='Все разъёмы'||item.category===category)&&(!onlyFavorites||favorites.has(item.id))&&query.split(' ').every(word=>normalize([item.title,item.subtitle,item.tags,item.category,...item.pins.map(p=>p.signal+' '+(p.color?.name||''))].join(' ')).includes(word)));
 $('category-title').textContent=onlyFavorites?'Избранное'+(category==='Все разъёмы'?'':' · '+category):category;
 $('result-count').textContent=`${matches.length} из ${data.length} схем`;
 $('favcount').textContent=favorites.size;
 $('favorites').setAttribute('aria-pressed',String(onlyFavorites));
 $('empty').hidden=matches.length!==0;
 $('cards').innerHTML=matches.map(item=>`<article class="card"><button class="save" data-save="${item.id}" aria-label="${favorites.has(item.id)?'Убрать из избранного':'Добавить в избранное'}: ${escapeHTML(item.title)}" aria-pressed="${favorites.has(item.id)}">${favorites.has(item.id)?'★':'☆'}</button><button class="card-open" data-open="${item.id}" aria-label="Распиновка ${escapeHTML(item.title)}"><div class="card-top"><span class="category-pill">${item.category}</span><span class="card-number">${String(data.indexOf(item)+1).padStart(2,'0')}</span></div><div class="card-art">${art(item)}</div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.subtitle)}</p><div class="card-bottom"><span>${item.pins.length} ${item.category==='Переходники'?'соединения':'контактов в таблице'}</span><span class="arrow" aria-hidden="true">↗</span></div></button></article>`).join('');
}
function diagram(item){
 if(item.shape==='jack'){
  const n=item.pins.length,parts=item.pins.map((p,i)=>{const x=20+i*72;return `<rect x="${x}" y="35" width="65" height="35" rx="${i===0?10:3}" fill="${i===n-1?'#8fa48230':'#a2bf7330'}" stroke="currentColor"/><text x="${x+32}" y="95" text-anchor="middle" fill="currentColor" stroke="none" font-size="13" font-family="monospace">${escapeHTML(p.pin)}</text>`;}).join('');
  return `<svg viewBox="0 0 ${n*72+50} 120" role="img" aria-label="Контакты штекера от кончика к кабелю">${parts}<path d="M${n*72+14} 47H${n*72+45}M${n*72+14} 60H${n*72+45}" stroke="currentColor"/></svg><p class="diagram-caption">Штекер сбоку: слева кончик (Tip), справа кабель. Выводы гнезда на плате могут располагаться иначе.</p>`;
 }
 if(item.shape==='rj45'){
  const pins=item.pins.map((p,i)=>`<rect x="${25+i*32}" y="28" width="25" height="53" rx="3" fill="url(#c${i})" stroke="#789063"/><text x="${37+i*32}" y="102" fill="currentColor" font-family="monospace" font-size="14" text-anchor="middle">${p.pin}</text>`).join('');
  const defs=item.pins.map((p,i)=>{const c=pinColor(p.signal);return `<linearGradient id="c${i}" x1="0" y1="0" x2="1" y2="1">${c.startsWith('linear')?`<stop offset="50%" stop-color="#fff"/><stop offset="50%" stop-color="${c.match(/#[a-f0-9]{6}/)[0]}"/>`:`<stop stop-color="${c}"/>`}</linearGradient>`;}).join('');
  return `<svg viewBox="0 0 300 135" role="img" aria-label="Порядок контактов RJ45: от 1 слева до 8 справа"><defs>${defs}</defs><rect x="13" y="16" width="274" height="102" rx="9" stroke="currentColor" fill="none"/>${pins}</svg><p class="diagram-caption">Штекер: контакты к вам, защёлка сзади, кабель вниз. Цветные полосы показывают жилы, а не цвет металлических контактов.</p>`;
 }
 if(item.shape==='db9'){
  const pins=item.pins.map((p,i)=>{const x=i<5?55+i*45:77+(i-5)*45,y=i<5?48:94;return `<circle cx="${x}" cy="${y}" r="13" stroke="currentColor" fill="none"/><text x="${x}" y="${y+5}" fill="currentColor" font-family="monospace" font-size="13" text-anchor="middle">${p.pin}</text>`;}).join('');
  return `<svg viewBox="0 0 300 135" role="img" aria-label="Вид DE-9 male на контакты спереди"><path d="M20 20H280L260 118H40Z" stroke="currentColor" fill="none"/>${pins}</svg><p class="diagram-caption">DE-9 male («папа»), вид на контакты спереди: широкий край сверху. Вид со стороны пайки зеркальный.</p>`;
 }
 return `<div class="pinmap">${item.pins.map(p=>`<div class="pin-node"><b>${escapeHTML(p.pin)}</b><span>${escapeHTML(p.signal)}</span></div>`).join('')}</div><p class="diagram-caption">Карта контактов: номера → сигналы. Это не расположение выводов. Геометрию и сторону просмотра сверяйте по маркировке и чертежу в источнике.</p>`;
}
function openDetail(id,updateURL=true){
 const item=data.find(item=>item.id===id);if(!item)return;
 current=item;$('detail-category').textContent=item.category+' / РАСПИНОВКА';
 $('detail-content').innerHTML=`<h2 id="detail-title">${escapeHTML(item.title)}</h2><p class="detail-subtitle">${escapeHTML(item.subtitle)}</p><div class="detail-controls"><button id="detail-save" aria-pressed="${favorites.has(item.id)}">${favorites.has(item.id)?'★ В избранном':'☆ В избранное'}</button><button id="share">↗ Ссылка на схему</button></div><figure class="connector-figure"><img src="${escapeHTML(item.image)}" alt="Иллюстрация разъёма ${escapeHTML(item.title)}" width="500" height="220"><figcaption>${escapeHTML(item.imageCaption)}</figcaption></figure><div class="diagram-box">${diagram(item)}</div>${pinTable(item)}${colorGuide(item)}<div class="note"><b>ПРИ ПОДКЛЮЧЕНИИ</b>${escapeHTML(item.note)}</div><p class="source">Документация: <a href="${escapeHTML(item.source[1])}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.source[0])} ↗</a></p>`;
 $('detail-save').onclick=()=>{toggleFavorite(item.id);$('detail-save').textContent=favorites.has(item.id)?'★ В избранном':'☆ В избранное';$('detail-save').setAttribute('aria-pressed',String(favorites.has(item.id)));};
 $('share').onclick=async()=>{const url=new URL(location.href);url.hash=item.id;try{if(navigator.share){await navigator.share({title:'Контакт · '+item.title,url:url.href});}else{await navigator.clipboard.writeText(url.href);toast('Ссылка скопирована');}}catch(error){if(error.name!=='AbortError'){toast('Скопируйте ссылку из адресной строки');}}};
 if(!$('detail').open)$('detail').showModal();$('detail').scrollTop=0;
 if(updateURL)history.replaceState(null,'','#'+item.id);
}
function toggleFavorite(id){if(favorites.has(id))favorites.delete(id);else favorites.add(id);persist('kontakt-favorites',[...favorites]);render();}
function changeCategory(cat){category=cat;renderNav();render();}
for(const id of ['navigation','mobile-filters'])$(id).addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(button)changeCategory(button.dataset.category);});
$('cards').addEventListener('click',event=>{const save=event.target.closest('[data-save]');if(save){const id=save.dataset.save;toggleFavorite(id);$('cards').querySelector(`[data-save="${id}"]`)?.focus({preventScroll:true});return;}const open=event.target.closest('[data-open]');if(open)openDetail(open.dataset.open);});
$('search').addEventListener('input',render);
$('favorites').onclick=()=>{onlyFavorites=!onlyFavorites;render();};
$('reset').onclick=()=>{category='Все разъёмы';onlyFavorites=false;$('search').value='';renderNav();render();};
$('theme').onclick=()=>{document.body.classList.toggle('dark');persist('kontakt-theme',document.body.classList.contains('dark')?'dark':'light');};
$('close').onclick=()=>$('detail').close();
$('detail').addEventListener('close',()=>{const id=current?.id;current=null;history.replaceState(null,'',location.pathname+location.search);$('cards').querySelector(`[data-open="${id}"]`)?.focus({preventScroll:true});});
$('about').onclick=()=>$('about-dialog').showModal();$('close-about').onclick=()=>$('about-dialog').close();
for(const id of ['detail','about-dialog'])$(id).addEventListener('click',event=>{const rect=$(id).getBoundingClientRect();if(event.target===$(id)&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))$(id).close();});
window.addEventListener('hashchange',()=>{if(location.hash)openDetail(decodeURIComponent(location.hash.slice(1)),false);else if($('detail').open)$('detail').close();});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!$('detail').open&&!$('about-dialog').open){event.preventDefault();$('search').focus();}});
function networkStatus(){$('connection').textContent=navigator.onLine?'● Онлайн':'● Без сети';}
window.addEventListener('online',networkStatus);window.addEventListener('offline',networkStatus);networkStatus();renderNav();render();
try{if(location.hash)openDetail(decodeURIComponent(location.hash.slice(1)),false);}catch{/* Ignore malformed external hashes. */}
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{window.dispatchEvent(new Event('kontakt-offline-ready'));}).catch(()=>{$('connection').textContent='● Онлайн · без кэша';});
