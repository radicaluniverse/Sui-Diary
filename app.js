/* Дневник Суи — app.js ♡ всё локально, ключ suiDiaryV1 */
(function(){
"use strict";
var LS_KEY = "suiDiaryV1";
var DAYS_RU = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
var DAYS_SHORT = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];
var MONTHS_RU = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
var MONTHS_SHORT = ["янв.","фев.","мар.","апр.","май","июн.","июл.","авг.","сен.","окт.","ноя.","дек."];
var MONTHS_NAMES = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var PHRASES = [
  "Привет, Суи! Ты сегодня сияешь ✧",
  "Сделай хоть одну маленькую задачу — и я обниму тебя ♡",
  "Ты умница! Не забудь попить водички 🎀",
  "Всё получится! Я верю в тебя ♡",
  "Отметь задачку — станет так приятно! ☑",
  "Ты самая старательная на свете ✧",
  "Давай запишем что-нибудь милое? ♡"
];
var THEMES = [
  {id:"kawaii", name:"Кавай — Настя 💗", color:"#ff6fa5", girl:"nastya", girlName:"Настя"},
  {id:"light", name:"Светлая — Алиса 🤍", color:"#7a7ae0", girl:"alisa", girlName:"Алиса"},
  {id:"dark", name:"Тёмная — Нюша 🌙", color:"#9d8cff", girl:"nyusha", girlName:"Нюша"},
  {id:"gothic", name:"Готика — Ксюша 🖤", color:"#a64ac9", girl:"ksyusha", girlName:"Ксюша"}
];
var PHRASES_BY_GIRL = {
  nastya: [
    "Я Настя! Украшу твой день розовым ♡",
    "Всё будет мило-мило, вот увидишь! 🎀",
    "Запиши мечту — я её обниму ♡",
    "Розовый лечит всё! Даже понедельник 💗",
    "Ты сегодня сияешь сильнее бантика! ✧",
    "Сделай маленькое дело — получишь большую обнимашку!",
    "Давай жить красиво, как в мечте ♡",
    "Я верю: скуф выберет именно нас!",
    "Пей водичку и пиши дневник, ладно? 🎀",
    "Твоя жизнь — уже украшение!",
    "Хочешь, помечтаем вместе? Закрывай глазки ♡",
    "Не грусти, я рядом и вся розовая!",
    "Бантик держится — значит, и ты держишься! 🎀",
    "Обниму хвостиками! Они длинные и тёплые ♡",
    "Счастье — это когда тетрадь полная мечт!",
    "Улыбнись глазками, как я! Вот так ♡",
    "Пусть у Ксюши готика, а у нас — нежность!",
    "Я накрасила сердечко на руке. Тебе тоже надо!",
    "Добрые девочки побеждают! Всегда!",
    "Запиши три хороших момента дня. Я начну: ты!",
    "Мои сапожки топают только к счастью!",
    "Любовь спасёт мир. И понедельник тоже 💗"
  ],
  alisa: [
    "Я Алиса! Хаос — это весело! ✧",
    "Скучно? Добавь цвета! Я так делаю!",
    "Хи-хи! Сделай задачку — будет цирк! 🎪",
    "Кто сказал «нормально»? Скучно! Давай странно!",
    "Планы? Перевернём их вверх ногами!",
    "Улыбнись шире, а то не засчитано 😜",
    "Сегодня отличный день для шалости!",
    "Та-дам! Ты уже сделала больше, чем вчера!",
    "Не слушай зануд, слушай меня! Хи-хи!",
    "Разноцветные носки приносят удачу. Проверено!",
    "Запиши самую безумную идею — она лучшая!",
    "Живём ярко, пишем честно! Погнали!",
    "Зигзаг на чёлке — зигзаг удачи! Видишь?",
    "Серьёзность отменяется! Приказ Алисы!",
    "Колготки разные — настроение отличное!",
    "Скуф в шоке? Значит, день удался! Ха!",
    "Давай меняться задачами! Нет? Ну ладно!",
    "Мой медальон исполняет желания. Почти.",
    "Громко смейся — тихо пиши в дневник!",
    "Правила созданы, чтобы их переписать!",
    "Краски кончились? Рисуй словами!",
    "Ты — мой любимый аттракцион! Катаемся!"
  ],
  nyusha: [
    "Я Нюша. День странный… но ты — нет.",
    "Не обращай внимания на шум. Просто запиши.",
    "Чёрное и розовое. Как я. Как настроение.",
    "Меня все бесят. Кроме тебя. Пока что.",
    "Завидуешь? Я тоже. Давай завидовать вместе.",
    "Настроение скачет… держись за список дел.",
    "Никому не нужная? Зато дневнику — очень.",
    "Не смотри так. Лучше запиши, что болит.",
    "Сегодня я добрая. Пользуйся моментом.",
    "Всё двоится? Значит, видишь как я.",
    "Ладно… ты стараешься. Это видно.",
    "Не уходи. Побудь тут ещё немного.",
    "Сестры Настя и Ксюша меня бесят. А ты — нет.",
    "Шесть пальцев тут, семь там. И что?",
    "Меня назвали бракованной. А я — особенная.",
    "Капча в голове: докажи, что ты не робот.",
    "То смеюсь, то злюсь. Привыкай.",
    "Всех хвалят, а меня — никогда. Пиши за меня.",
    "Розовый хвостик — мой. Чёрный — тоже мой.",
    "Не жалей меня. Просто слушай.",
    "Сегодня ненавижу всех. Завтра — посмотрим.",
    "Ты вернулась? Значит, я не совсем одна."
  ],
  ksyusha: [
    "Я Ксюша. Темнота — тоже уют.",
    "Твои планы глубже, чем кажутся. Запиши.",
    "Ночь всё скроет. Кроме твоих дел 🖤",
    "Розовые легкомысленные. Мы — настоящие.",
    "Тишина лучше шума. Пиши тихо.",
    "Только я понимаю, что тебе нужно.",
    "Не улыбайся через силу. Просто будь.",
    "Тьма красивая. Как твои мысли ночью.",
    "Оставь суету. Останься со мной.",
    "Холод снаружи — тепло внутри дневника.",
    "Я не замкнутая. Я — глубокая.",
    "Скуф выберет меня. А ты выбери себя.",
    "Чёрный — мой розовый. Поняла?",
    "Крест на шее — защита от глупости.",
    "Фиолетовые пряди видят больше.",
    "Алиса больная на голову. Я — здоровая.",
    "Настя легкомысленная. Я — верная.",
    "Эмо — не фаза. Эмо — душа.",
    "Пиши кровью сердца. Чернилами тоже можно.",
    "Твоя боль — моя музыка.",
    "В темноте честнее. Не прячься.",
    "Останься. Ночь только начинается 🖤"
  ]
};

/* ---------- встроенные SVG-девочки (ОРИГИНАЛЬНЫЕ, вдохновлённые образами, НЕ спрайты из игры) ---------- */
/* Важно: модели из игры «Альтушка для скуфа» защищены авторским правом, их нельзя просто копировать в проект.
   Поэтому здесь — наши собственные рисунки «по мотивам»: розовая Настя, clowncore-Алиса, чёрно-розовая Нюша, готичная Ксюша. */
function normalizeGirl(n){
  if(n===1||n==="1"||n==="nastya"||n==="rosa") return "nastya";
  if(n===2||n==="2"||n==="alisa"||n==="yuki") return "alisa";
  if(n==="nyusha") return "nyusha";
  if(n===3||n==="3"||n==="ksyusha"||n==="midori") return "ksyusha";
  return "nastya";
}
function svgGirl(n){
  var g = normalizeGirl(n);
  var pal = {
    nastya:  {hair:"#ffb3cd", hair2:"#ff7fae", dress:"#ff6fa5", eye:"#5a2f3f", acc:"bow"},
    alisa:   {hair:"#ff713a", hair2:"#e83d1a", dress:"#fff4e0", eye:"#4a2f3f", acc:"clown"},
    nyusha:  {hair:"#2b2b33", hair2:"#ff6fa5", dress:"#3a3a48", eye:"#6b1f35", acc:"streak"},
    ksyusha: {hair:"#241d33", hair2:"#7a4dff", dress:"#241a30", eye:"#2a1a33", acc:"choker"}
  }[g] || {hair:"#ffb3cd", hair2:"#ff7fae", dress:"#ff6fa5", eye:"#5a2f3f", acc:"bow"};
  var acc = "";
  if(pal.acc==="bow") acc = '<path d="M78 26 L92 18 L90 34 Z M78 26 L64 18 L66 34 Z" fill="#ff4d8a"/><circle cx="78" cy="26" r="4" fill="#d81b60"/>';
  if(pal.acc==="clown") acc = '<circle cx="38" cy="30" r="6" fill="#ff4d4d"/><circle cx="82" cy="30" r="6" fill="#4da6ff"/><circle cx="38" cy="30" r="2" fill="#fff"/><circle cx="82" cy="30" r="2" fill="#fff"/>';
  if(pal.acc==="streak") acc = '<path d="M72 20 Q66 45 70 70 Q74 50 80 28 Z" fill="#ff6fa5"/>';
  if(pal.acc==="choker") acc = '<rect x="50" y="82" width="20" height="5" rx="2.5" fill="#0d0d12"/><circle cx="60" cy="86" r="2.5" fill="#a64ac9"/>';
  // Оставляем ТОЛЬКО улыбающиеся модели ♡ у всех открытая улыбка
  var smile = "";
  if(g==="nastya") smile = '<path d="M52 71 Q60 85 68 71 Z" fill="#8a3d52"/><path d="M54 72 Q60 78 66 72 Z" fill="#fff"/><path d="M55 79 Q60 83 65 79" stroke="#5a2a3a" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
  else if(g==="alisa") smile = '<path d="M50 70 Q60 87 70 70 Z" fill="#8a3d3d"/><path d="M52 71 Q60 78 68 71 Z" fill="#fff"/><line x1="60" y1="71" x2="60" y2="80" stroke="#d9a0a0" stroke-width="1"/>';
  else if(g==="nyusha") smile = '<path d="M53 72 Q60 82 67 72 Z" fill="#6b2438"/><path d="M55 73 Q60 77 65 73 Z" fill="#fff"/>';
  else smile = '<path d="M54 72 Q60 80 66 72 Z" fill="#3d2438"/><path d="M56 73 Q60 76 64 73 Z" fill="#fff"/>';
  // длинные волосы как в стикерпаке — продлеваем бока
  var longHair = "";
  if(g==="nastya"||g==="nyusha") longHair = '<path d="M30 55 Q26 85 34 95 L42 95 Q36 80 36 58 Z M90 55 Q94 85 86 95 L78 95 Q84 80 84 58 Z" fill="'+pal.hair+'"/>';
  if(g==="alisa") longHair = '<path d="M30 55 Q24 80 32 92 L40 92 Q34 78 36 58 Z M90 55 Q96 80 88 92 L80 92 Q86 78 84 58 Z" fill="'+pal.hair+'"/>';
  if(g==="ksyusha") longHair = '<path d="M30 55 Q26 88 34 98 L42 98 Q36 82 36 58 Z M90 55 Q94 88 86 98 L78 98 Q84 82 84 58 Z" fill="'+pal.hair+'"/>';
  return ""+
  '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+g+' smile">'+
  '<ellipse cx="60" cy="112" rx="26" ry="5" fill="rgba(0,0,0,.12)"/>'+
  longHair+
  '<path d="M30 55 Q28 20 60 16 Q92 20 90 55 L86 78 Q84 88 74 88 L46 88 Q36 88 34 78 Z" fill="'+pal.hair+'"/>'+
  '<path d="M30 55 Q32 32 60 28 Q88 32 90 55 L86 60 Q78 42 60 42 Q42 42 34 60 Z" fill="'+pal.hair2+'" opacity=".55"/>'+
  '<ellipse cx="60" cy="62" rx="24" ry="26" fill="#ffe7d6"/>'+
  '<path d="M43 62 Q50 57 57 62" stroke="'+pal.eye+'" stroke-width="2.5" fill="none" stroke-linecap="round"/>'+
  '<path d="M63 62 Q70 57 77 62" stroke="'+pal.eye+'" stroke-width="2.5" fill="none" stroke-linecap="round"/>'+
  '<circle cx="50" cy="65" r="2.8" fill="'+pal.eye+'"/><circle cx="70" cy="65" r="2.8" fill="'+pal.eye+'"/>'+
  '<ellipse cx="43" cy="72" rx="5" ry="3" fill="#ffb0c4" opacity=".9"/>'+
  '<ellipse cx="77" cy="72" rx="5" ry="3" fill="#ffb0c4" opacity=".9"/>'+
  smile+
  acc+
  '<path d="M42 88 L38 104 L48 104 L52 88 Z" fill="#ffe7d6"/>'+
  '<path d="M78 88 L82 104 L72 104 L68 88 Z" fill="#ffe7d6"/>'+
  '<path d="M46 86 L74 86 L70 108 L50 108 Z" fill="'+pal.dress+'"/>'+
  '<circle cx="60" cy="94" r="3" fill="#fff" opacity=".9"/>'+
  "</svg>";
}
// girls/nastya.png, alisa.png, nyusha.png, ksyusha.png если есть — подставятся вместо SVG
// чередование по тапу: girls/nastya.png, nastya-1.png, nastya-2.png, nastya-3.png (то же для остальных)
var AVAILABLE = {nastya:[], alisa:[], nyusha:[], ksyusha:[]};
var VARIANT_I = {nastya:0, alisa:0, nyusha:0, ksyusha:0};
function candidateSrcs(g){ return ["girls/"+g+".png","girls/"+g+"-1.png","girls/"+g+"-2.png","girls/"+g+"-3.png","girls/"+g+"-4.png","girls/"+g+"-5.png","girls/"+g+"-6.png"]; }
function discoverGirls(cb){
  var girls = ["nastya","alisa","nyusha","ksyusha"];
  var pending = 0;
  girls.forEach(function(g){
    candidateSrcs(g).forEach(function(src){
      pending++;
      var im = new Image();
      im.onload = function(){ AVAILABLE[g].push(src); done(); };
      im.onerror = function(){ done(); };
      im.src = src;
    });
  });
  var finished = false;
  function done(){
    pending--;
    if(pending<=0 && !finished){ finished=true; if(cb) cb(); }
  }
  setTimeout(function(){ if(!finished){ finished=true; if(cb) cb(); } }, 3000);
}
function escAttr(s){ return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
function girlHTML(n, cls){
  var g = normalizeGirl(n);
  var src = "girls/" + g + ".png";
  var svg = escAttr(svgGirl(g).replace("<svg", '<svg class="'+(cls||"")+'" data-fallback="'+g+'"'));
  return '<img src="'+src+'" class="'+(cls||"")+'" alt="девочка '+g+'" loading="lazy" onerror="this.outerHTML=\'' + svg + '\'">';
}
function mascotHTML(g){
  return girlVariantHTML(g, "");
}
function girlVariantHTML(g, cls){
  var list = AVAILABLE[g]||[];
  if(list.length){
    var src = list[VARIANT_I[g]%list.length];
    return '<img src="'+src+'" class="'+(cls||"")+'" alt="девочка '+g+'" loading="lazy" onerror="this.outerHTML=\'' + escAttr(svgGirl(g)) + '\'">';
  }
  return svgGirl(g);
}
function saveVariant(g){
  try{ if(!DB.variantI) DB.variantI={}; DB.variantI[g]=VARIANT_I[g]; }catch(e){}
}
function setGirl(el, n){
  if(!el) return;
  el.innerHTML = girlHTML(n);
}
function setMascot(){
  var g = themeGirl();
  if(!els["mascot-img"]) return;
  els["mascot-img"].innerHTML = mascotHTML(g);
  els["mascot"].title = themeGirlName() + " ♡ тап — другая картинка";
}
function themeGirl(){
  var t = THEMES.find(function(x){ return x.id===(DB.theme||"kawaii"); });
  return t ? t.girl : "nastya";
}
function themeGirlName(){
  var t = THEMES.find(function(x){ return x.id===(DB.theme||"kawaii"); });
  return t ? t.girlName : "Настя";
}

/* ---------- хранилище ---------- */
function blankData(){ return {theme:"kawaii", decor:"girls", flowerI:{}, variantI:{}, entries:[], fired:{}}; }
function load(){
  try{
    var raw = localStorage.getItem(LS_KEY);
    if(!raw) return blankData();
    var d = JSON.parse(raw);
    if(!d || !Array.isArray(d.entries)) return blankData();
    if(!d.theme) d.theme="kawaii";
    if(d.decor!=="girls" && d.decor!=="flowers" && d.decor!=="none") d.decor="girls";
    if(!d.flowerI) d.flowerI={};
    if(!d.variantI) d.variantI={};
    if(!d.fired) d.fired={};
    // чистим fired от удалённых записей, чтобы не копился мусор
    try{
      var alive = {};
      d.entries.forEach(function(x){ alive[x.id]=1; });
      Object.keys(d.fired).forEach(function(k){ if(!alive[k]) delete d.fired[k]; });
    }catch(e){}
    return d;
  }catch(e){ return blankData(); }
}
function save(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(DB)); return true; }catch(e){ toast("Ой! Память телефона переполнена. Удали старые фото ♡"); return false; } }
var DB = load();
try{ if(DB.variantI){ for(var _gk in VARIANT_I){ if(DB.variantI[_gk]!=null) VARIANT_I[_gk]=DB.variantI[_gk]; } } }catch(e){}

/* ---------- даты: недели СТРОГО Пн–Вс ---------- */
function pad(n){ return (n<10?"0":"")+n; }
function toISO(d){ return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate()); }
function parseISO(s){ var p=s.split("-"); return new Date(+p[0], +p[1]-1, +p[2]); }
function startOfWeekMonday(d){
  var x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  var dow = (x.getDay()+6)%7; // 0=Пн
  x.setDate(x.getDate()-dow);
  x.setHours(0,0,0,0);
  return x;
}
function addDays(d,n){ var x=new Date(d); x.setDate(x.getDate()+n); return x; }
function fmtRange(mon){
  var sun = addDays(mon,6);
  var a = mon.getDate()+" "+MONTHS_SHORT[mon.getMonth()];
  var b = sun.getDate()+" "+MONTHS_SHORT[sun.getMonth()];
  if(mon.getMonth()===sun.getMonth()) return mon.getDate()+"–"+sun.getDate()+" "+MONTHS_SHORT[sun.getMonth()];
  return a+"–"+b;
}
function fmtDayLong(iso){
  var d = parseISO(iso);
  return d.getDate()+" "+MONTHS_RU[d.getMonth()];
}
function uid(){ return "e"+Date.now().toString(36)+Math.floor(Math.random()*9999); }

/* ---------- состояние ---------- */
var weekStart = startOfWeekMonday(new Date());
var dayISO = toISO(new Date());
var sheetYear = new Date().getFullYear();
var sheetMonth = new Date().getMonth();
var pendingPhoto = ""; // dataURL сжатое

/* ---------- dom ---------- */
function $(id){ return document.getElementById(id); }
var els = {};
["btn-home","week-pill","week-prev","week-next","btn-settings","col-left","col-right","ring-fg","ring-text","progress-sub","progress-girl",
"view-week","view-day","btn-back","day-title","day-sub","day-counter","day-list","day-empty","empty-girl","day-done","done-girl",
"add-form","f-text","f-date","f-time","f-photo","f-rem-on","f-rem-when","photo-preview-wrap","photo-preview","photo-clear",
"sheet-backdrop","week-sheet","year-prev","year-next","year-label","months-grid","weeks-list","week-sheet-close",
"settings-sheet","themes-grid","settings-close","btn-notify","btn-test-sound",
"decor-girls","decor-flowers","decor-none","decor-hint",
"rem-backdrop","rem-modal","rem-modal-ok",
"del-backdrop","del-modal","del-yes","del-no",
"mascot","mascot-img","mascot-bubble","toast-wrap","bg-symbols"
].forEach(function(id){ els[id]=$(id); });

/* ---------- декор: девочки / цветочки / ничего ---------- */
/* Пиксельные веточки в стиле твоей картинки — но нарисованные мной с нуля (ту брать нельзя: Shutterstock, водяной знак). */
var FLOWER_NAMES = {kawaii:"сакура", light:"белая сакура", dark:"лунная сакура", gothic:"чёрная роза"};
var PIXEL_PAL = {
  kawaii: {branch:"#6b4a56", leaf:"#7ed6a0", b1:"#ffd7e6", b2:"#ff9ec1", core:"#fff3b0", spark:"#fff7ad", bg:"transparent"},
  light:  {branch:"#8a8aa0", leaf:"#9ed6b0", b1:"#ffffff", b2:"#ffe9b0", core:"#ffd76e", spark:"#ffffff", bg:"transparent"},
  dark:   {branch:"#5a5a8a", leaf:"#7a9e8a", b1:"#d5ccff", b2:"#9d8cff", core:"#f4efff", spark:"#c9b8ff", bg:"transparent"},
  gothic: {branch:"#3a2a44", leaf:"#4a5a4a", b1:"#8a2f4a", b2:"#4a1f33", core:"#d8a0b0", spark:"#c86bfa", bg:"transparent"}
};
function blossomSVG(x, y, s, p){
  // пиксельный цветочек 5 лепестков крестиком + серединка
  return '<rect x="'+(x-s)+'" y="'+(y-s)+'" width="'+(s*3)+'" height="'+(s*3)+'" fill="'+p.b2+'"/>'+
  '<rect x="'+(x-s*2)+'" y="'+y+'" width="'+(s*5)+'" height="'+s+'" fill="'+p.b2+'"/>'+
  '<rect x="'+x+'" y="'+(y-s*2)+'" width="'+s+'" height="'+(s*5)+'" fill="'+p.b2+'"/>'+
  '<rect x="'+x+'" y="'+y+'" width="'+s+'" height="'+s+'" fill="'+p.b1+'"/>'+
  '<rect x="'+(x-s)+'" y="'+y+'" width="'+s+'" height="'+s+'" fill="'+p.b1+'"/>'+
  '<rect x="'+(x+s)+'" y="'+y+'" width="'+s+'" height="'+s+'" fill="'+p.b1+'"/>'+
  '<rect x="'+x+'" y="'+(y-s)+'" width="'+s+'" height="'+s+'" fill="'+p.b1+'"/>'+
  '<rect x="'+x+'" y="'+(y+s)+'" width="'+s+'" height="'+s+'" fill="'+p.b1+'"/>'+
  '<rect x="'+x+'" y="'+y+'" width="'+s+'" height="'+s+'" fill="'+p.core+'"/>';
}
function sparkSVG(x, y, s, c){
  return '<rect x="'+x+'" y="'+(y-s)+'" width="'+s+'" height="'+(s*3)+'" fill="'+c+'"/><rect x="'+(x-s)+'" y="'+y+'" width="'+(s*3)+'" height="'+s+'" fill="'+c+'"/>';
}
function stemFlowerSVG(theme){
  var p = PIXEL_PAL[theme]||PIXEL_PAL.kawaii;
  var g = "";
  // стебель
  g += '<rect x="58" y="30" width="4" height="40" fill="'+p.leaf+'"/>';
  g += '<rect x="50" y="48" width="8" height="4" fill="'+p.leaf+'"/>';
  g += '<rect x="62" y="56" width="8" height="4" fill="'+p.leaf+'"/>';
  // бутончик сбоку
  g += '<rect x="70" y="44" width="3" height="12" fill="'+p.leaf+'"/>';
  g += blossomSVG(73, 40, 2, p);
  // большой цветок на макушке
  g += blossomSVG(60, 22, 5, p);
  g += sparkSVG(30, 24, 2, p.spark) + sparkSVG(92, 30, 2, p.spark);
  return '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="цветок на стебле">'+g+'</svg>';
}
function bonsaiSVG(theme){
  var p = PIXEL_PAL[theme]||PIXEL_PAL.kawaii;
  var pot = theme==="gothic" ? "#1a1420" : theme==="dark" ? "#34344a" : theme==="light" ? "#e8e8f2" : "#ffd3e6";
  var soil = theme==="light" ? "#d8cbb0" : "#c9b69a";
  var g = "";
  // горшок
  g += '<rect x="34" y="60" width="52" height="10" fill="'+pot+'"/>';
  g += '<rect x="30" y="58" width="60" height="4" fill="'+pot+'"/>';
  g += '<rect x="38" y="60" width="44" height="4" fill="'+soil+'"/>';
  // ствол лесенкой
  g += '<rect x="58" y="54" width="6" height="6" fill="'+p.branch+'"/>';
  g += '<rect x="56" y="46" width="6" height="8" fill="'+p.branch+'"/>';
  g += '<rect x="60" y="38" width="6" height="8" fill="'+p.branch+'"/>';
  g += '<rect x="52" y="40" width="10" height="4" fill="'+p.branch+'"/>';
  g += '<rect x="64" y="32" width="10" height="4" fill="'+p.branch+'"/>';
  // крона-облачка
  function cloud(x,y,w){
    var c = '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="8" fill="'+p.b1+'"/>';
    c += '<rect x="'+(x+4)+'" y="'+(y-4)+'" width="'+(w-8)+'" height="4" fill="'+p.b1+'"/>';
    c += '<rect x="'+(x+4)+'" y="'+(y+8)+'" width="'+(w-8)+'" height="3" fill="'+p.b2+'"/>';
    return c;
  }
  g += cloud(66, 22, 30) + cloud(44, 30, 26) + cloud(24, 40, 26) + cloud(70, 34, 24);
  g += sparkSVG(20, 24, 2, p.spark) + sparkSVG(100, 20, 2, p.spark);
  return '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="бонсай">'+g+'</svg>';
}
function clusterSVG(theme){
  var p = PIXEL_PAL[theme]||PIXEL_PAL.kawaii;
  var g = "";
  g += '<rect x="56" y="40" width="6" height="34" fill="'+p.branch+'"/>';
  g += '<rect x="44" y="52" width="12" height="4" fill="'+p.branch+'"/>';
  g += blossomSVG(40, 34, 6, p) + blossomSVG(62, 26, 7, p) + blossomSVG(82, 36, 6, p);
  g += blossomSVG(52, 48, 4, p) + blossomSVG(72, 48, 4, p);
  g += sparkSVG(24, 22, 2, p.spark) + sparkSVG(100, 22, 2, p.spark);
  return '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="гроздь цветов">'+g+'</svg>';
}
function cupBloomSVG(theme){
  var p = PIXEL_PAL[theme]||PIXEL_PAL.kawaii;
  var g = "";
  function petal(x, y, w, h){
    var s = '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+p.b1+'"/>';
    s += '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="3" fill="'+p.b2+'" opacity=".7"/>';
    s += '<rect x="'+x+'" y="'+(y+h-3)+'" width="'+w+'" height="3" fill="'+p.b2+'" opacity=".5"/>';
    return s;
  }
  // 5 лепестков чашей
  g += petal(48, 8, 24, 22) + petal(24, 24, 24, 20) + petal(72, 24, 24, 20) + petal(32, 48, 22, 18) + petal(66, 48, 22, 18);
  // серединка-чаша светлая
  g += '<rect x="48" y="34" width="24" height="18" fill="'+p.core+'" opacity=".55"/>';
  // тычинки-пылинки
  var st = [[52,30],[58,26],[64,26],[70,30],[50,36],[72,38],[55,42],[66,42],[60,32]];
  st.forEach(function(q){ g += '<rect x="'+q[0]+'" y="'+q[1]+'" width="3" height="3" fill="'+p.core+'"/>'; });
  g += '<rect x="58" y="36" width="5" height="5" fill="'+p.b2+'"/>';
  // искры + лепесток
  g += sparkSVG(20, 30, 2, p.spark) + sparkSVG(100, 16, 2, p.spark) + sparkSVG(24, 62, 2, p.spark);
  g += '<rect x="86" y="58" width="4" height="4" fill="'+p.b1+'"/>';
  return '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="пышный цветок">'+g+'</svg>';
}
function flowerVariantSVG(theme, v){
  v = v % 7;
  if(v===3) return stemFlowerSVG(theme);
  if(v===4) return bonsaiSVG(theme);
  if(v===5) return clusterSVG(theme);
  if(v===6) return cupBloomSVG(theme);
  return pixelBranchSVG(theme, v);
}
function pixelBranchSVG(theme, v){
  var p = PIXEL_PAL[theme]||PIXEL_PAL.kawaii;
  v = v||0;
  // ветка лесенкой слева направо
  var branch = "";
  var pts = [[8,58],[16,56],[24,54],[32,52],[40,50],[48,48],[56,46],[64,44],[72,42],[80,40],[88,38],[96,36],[104,34]];
  pts.forEach(function(q){ branch += '<rect x="'+q[0]+'" y="'+q[1]+'" width="8" height="4" fill="'+p.branch+'"/>'; });
  branch += '<rect x="100" y="26" width="4" height="10" fill="'+p.branch+'"/><rect x="60" y="38" width="4" height="10" fill="'+p.branch+'"/><rect x="36" y="44" width="4" height="10" fill="'+p.branch+'"/>';
  // листики-пиксели
  branch += '<rect x="52" y="52" width="6" height="3" fill="'+p.leaf+'"/><rect x="84" y="42" width="6" height="3" fill="'+p.leaf+'"/>';
  // раскладки цветов: 3 варианта
  var layouts = [
    [[26,44,3],[48,36,4],[70,32,3],[92,26,4],[108,28,3]],
    [[20,48,4],[44,40,3],[66,28,4],[88,32,3],[106,24,3]],
    [[30,40,3],[52,44,4],[74,36,3],[94,30,4],[110,32,3]]
  ];
  var L = layouts[v%layouts.length];
  var fl = "";
  L.forEach(function(b){ fl += blossomSVG(b[0], b[1], b[2], p); });
  // падающие лепестки + искры
  fl += '<rect x="40" y="62" width="4" height="4" fill="'+p.b1+'"/><rect x="86" y="60" width="3" height="3" fill="'+p.b2+'"/>';
  fl += sparkSVG(58, 20, 2, p.spark) + sparkSVG(100, 52, 2, p.spark);
  return '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" role="img" aria-label="цветочная веточка">'+branch+fl+'</svg>';
}
var FLOWER_PHRASES = {
  kawaii: ["Ты как сакура — нежная! 🌸", "Веточка цветёт — и ты цвети! 🌷", "Розовые лепестки к счастью!"],
  light: ["Ты как белая сакура — светлая!", "Лёгкая веточка — лёгкий день!", "Белые лепестки к удаче!"],
  dark: ["Ты как лунная сакура — загадочная!", "Даже ночью веточка цветёт!", "Сиреневые лепестки к мечте!"],
  gothic: ["Ты как чёрная роза — сильная! 🥀", "Красота в темноте! 🌷", "Тёмные лепестки тоже цветут!"]
};
var flowerPhraseI = 0;
function currentDecor(){ return DB.decor||"girls"; }
function flowerVariantCount(){ return 7; }
function flowerRandomize(){
  var t = DB.theme||"kawaii";
  var n = flowerIndex(), cur = n;
  var guard = 0;
  while(guard<10){
    n = Math.floor(Math.random()*flowerVariantCount());
    if(n!==cur) break;
    guard++;
  }
  if(!DB.flowerI) DB.flowerI={};
  DB.flowerI[t]=n; save();
  return n;
}
function flowerIndex(){
  var t = DB.theme||"kawaii";
  return (DB.flowerI && DB.flowerI[t]) || 0;
}
function flowerHTML(cls){
  return '<div class="'+(cls||"flower-mini")+'">'+flowerVariantSVG(DB.theme||"kawaii", flowerIndex())+'</div>';
}
function renderDecorButtons(){
  if(!els["decor-girls"]) return;
  var d = currentDecor();
  els["decor-girls"].classList.toggle("active", d==="girls");
  els["decor-flowers"].classList.toggle("active", d==="flowers");
  els["decor-none"].classList.toggle("active", d==="none");
  var hints = {
    girls: "Девочки: твои Настя, Алиса, Нюша, Ксюша с чередованием по тапу ♡",
    flowers: "Цветочки: "+FLOWER_NAMES[DB.theme||"kawaii"]+" — главная, тапай по ней, будут и другие ✿",
    none: "Чистый интерфейс: без девочек и цветочков, только дневник ✧"
  };
  if(els["decor-hint"]) els["decor-hint"].textContent = hints[d];
}
function applyDecor(){
  var d = currentDecor();
  renderDecorButtons();
  if(d==="none"){
    // прячем всё совсем
    if(els["mascot"]) els["mascot"].style.display = "none";
    ["progress-girl","empty-girl","done-girl"].forEach(function(k){ if(els[k]) els[k].innerHTML=""; });
    return;
  }
  if(els["mascot"]) els["mascot"].style.display = "";
  if(d==="flowers"){
    var f = flowerHTML("flower-mascot");
    if(els["mascot-img"]) els["mascot-img"].innerHTML = f;
    if(els["mascot"]) els["mascot"].title = "Цветочек ♡ тап — другой";
    if(els["progress-girl"]) els["progress-girl"].innerHTML = flowerHTML("flower-mini");
    if(els["empty-girl"]) els["empty-girl"].innerHTML = flowerHTML("flower-big");
    if(els["done-girl"]) els["done-girl"].innerHTML = flowerHTML("flower-big");
    return;
  }
  // девочки — твои файлы не трогаем, только показываем (все места следуют за текущим образом)
  var g = themeGirl();
  setMascot();
  var gh = girlVariantHTML(g, "");
  ["progress-girl","empty-girl","done-girl"].forEach(function(k){ if(els[k]) els[k].innerHTML=gh; });
}
/* смена образа при каждом действии ♡ */
function bumpDecor(){
  var d = currentDecor();
  if(d==="flowers"){ flowerRandomize(); applyDecor(); return; }
  if(d!=="girls") return;
  var g = themeGirl();
  var list = AVAILABLE[g]||[];
  if(list.length>1){
    VARIANT_I[g] = (VARIANT_I[g]+1)%list.length;
    saveVariant(g); save();
  }
  applyDecor();
}

/* ---------- темы ---------- */
function applyTheme(){
  document.body.setAttribute("data-theme", DB.theme||"kawaii");
  renderThemes();
  renderBgSymbols();
  applyDecor();
}
function decorPreviewFor(t){
  var d = currentDecor();
  if(d==="none") return '<div class="tgirl" style="color:var(--muted);font-size:12px">— чисто —</div>';
  if(d==="flowers"){
    return '<div class="tgirl flower-mini">'+pixelBranchSVG(t.id, 0)+'</div>';
  }
  return '<div class="tgirl">'+girlHTML(t.girl)+'</div>';
}
function themeCardName(t){
  var d = currentDecor();
  var base = {kawaii:"Кавай", light:"Светлая", dark:"Тёмная", gothic:"Готика"}[t.id] || t.name;
  if(d==="flowers") return base + " — " + (FLOWER_NAMES[t.id]||"цветочек");
  if(d==="none") return base;
  return t.name;
}
function renderThemes(){
  els["themes-grid"].innerHTML = "";
  THEMES.forEach(function(t){
    var b = document.createElement("button");
    b.className = "theme-card"+(DB.theme===t.id?" active":"");
    b.innerHTML = '<div class="theme-dot" style="background:'+t.color+'"></div>'+decorPreviewFor(t)+'<div>'+themeCardName(t)+'</div>';
    b.onclick = function(){ DB.theme=t.id; if(currentDecor()==="flowers"){ if(!DB.flowerI) DB.flowerI={}; DB.flowerI[t.id]=Math.floor(Math.random()*flowerVariantCount()); } save(); applyTheme(); bumpDecor(); };
    els["themes-grid"].appendChild(b);
  });
}
function renderBgSymbols(){
  var map = {kawaii:["♡","✧","🎀","♡","✿"], light:["✧","○","✿"], dark:["✧","☾","⋆"], gothic:["✧","†","♱","🦇"]};
  var arr = map[DB.theme]||map.kawaii;
  els["bg-symbols"].innerHTML="";
  for(var i=0;i<16;i++){
    var s=document.createElement("span");
    s.textContent=arr[i%arr.length];
    s.style.left=(Math.random()*100)+"vw";
    s.style.top=(40+Math.random()*80)+"vh";
    s.style.fontSize=(14+Math.random()*18)+"px";
    s.style.animationDuration=(9+Math.random()*10)+"s";
    s.style.animationDelay=(-Math.random()*12)+"s";
    els["bg-symbols"].appendChild(s);
  }
}

/* ---------- тосты ---------- */
function toast(msg, pink){
  var t=document.createElement("div");
  t.className="toast"+(pink?" pink":"");
  t.textContent=msg;
  els["toast-wrap"].appendChild(t);
  setTimeout(function(){ t.style.opacity="0"; t.style.transition="opacity .4s"; setTimeout(function(){ t.remove(); },450); }, 4200);
}

/* ---------- неделя ---------- */
function entriesFor(iso){ return DB.entries.filter(function(e){ return e.date===iso; }).sort(function(a,b){ return (a.time||"")<(b.time||"")?-1:1; }); }
function renderWeek(){
  els["week-pill"].textContent = fmtRange(weekStart);
  els["col-left"].innerHTML=""; els["col-right"].innerHTML="";
  var total=0, done=0;
  for(var i=0;i<7;i++){
    var d = addDays(weekStart,i);
    var iso = toISO(d);
    var list = entriesFor(iso);
    total+=list.length;
    done+=list.filter(function(e){return e.done;}).length;
    var card=document.createElement("div");
    card.className="day-card"+(iso===toISO(new Date())?" today":"");
    var head='<div class="day-name">'+DAYS_SHORT[i]+'</div>';
    var tasks="";
    if(!list.length){ tasks='<div style="text-align:center;color:var(--muted);font-size:12px;margin:6px 0">— ♡ —</div>'; }
    list.slice(0,4).forEach(function(e){
      tasks+='<div class="task-pill'+(e.done?" done":"")+'"><button class="task-check'+(e.done?" on":"")+'" data-toggle="'+e.id+'">'+(e.done?"✓":"")+'</button><span class="task-text">'+escapeHtml((e.text||"без текста").slice(0,40))+'</span></div>';
    });
    if(list.length>4) tasks+='<div style="font-size:11px;color:var(--muted);text-align:center">+ ещё '+(list.length-4)+'</div>';
    var foot='<div class="day-foot"><span>'+d.getDate()+" "+MONTHS_SHORT[d.getMonth()]+'</span><b>☑ '+list.filter(function(e){return e.done;}).length+'/'+list.length+'</b></div>';
    card.innerHTML=head+tasks+foot;
    (function(isoCopy, cardEl){
      cardEl.addEventListener("click", function(ev){
        var t = ev.target.closest("[data-toggle]");
        if(t){ ev.stopPropagation(); toggleDone(t.getAttribute("data-toggle")); return; }
        openDay(isoCopy);
      });
    })(iso, card);
    if(i<3) els["col-left"].appendChild(card); else els["col-right"].appendChild(card);
  }
  // кольцо
  var pct = total? Math.round(done/total*100):0;
  var C = 201;
  els["ring-fg"].style.strokeDashoffset = String(C - C*pct/100);
  els["ring-text"].textContent = pct+"%";
  els["progress-sub"].textContent = "☑ "+done+"/"+total;
  if(total>0 && pct===100) els["progress-sub"].textContent += " — Умница! 🎀";
}
function toggleDone(id){
  var e = DB.entries.find(function(x){return x.id===id;});
  if(!e) return;
  e.done=!e.done; save(); renderWeek(); bumpDecor();
  if(els["view-day"].classList.contains("hidden")===false) renderDay();
}

/* ---------- день ---------- */
function openDay(iso){
  dayISO=iso;
  els["view-week"].classList.add("hidden");
  els["view-day"].classList.remove("hidden");
  els["f-date"].value=iso;
  if(!els["f-time"].value) els["f-time"].value="12:00";
  renderDay(); bumpDecor();
  window.scrollTo({top:0, behavior:"smooth"});
}
function renderDay(){
  var d=parseISO(dayISO);
  var dow=(d.getDay()+6)%7;
  els["day-title"].textContent=DAYS_RU[dow];
  els["day-sub"].textContent=fmtDayLong(dayISO);
  var list=entriesFor(dayISO);
  var done=list.filter(function(e){return e.done;}).length;
  els["day-counter"].textContent="☑ "+done+"/"+list.length;
  els["day-list"].innerHTML="";
  els["day-empty"].classList.toggle("hidden", list.length>0);
  els["day-done"].classList.toggle("hidden", !(list.length>0 && done===list.length));
  list.forEach(function(e){
    var div=document.createElement("div");
    div.className="entry"+(e.done?" done":"");
    var remTxt = e.rem && e.rem.on ? " ⏰ "+escapeHtml(e.rem.when.replace("T"," ")) : "";
    var photoHtml = e.photo ? '<img class="photo" src="'+e.photo+'" alt="фото записи">' : "";
    div.innerHTML =
      '<div class="entry-top"><span class="entry-time">🕒 '+escapeHtml(e.time||"--:--")+'</span>'+
      '<button class="mini-btn" data-act="done">'+(e.done?"↩ вернуть":"☑ готово")+'</button>'+
      '<button class="mini-btn danger" data-act="del">удалить</button></div>'+
      '<div class="entry-text">'+escapeHtml(e.text||"")+'</div>'+ photoHtml +
      '<div style="font-size:12px;color:var(--muted)">📅 '+escapeHtml(e.date)+remTxt+'</div>'+
      '<div class="entry-edit-row"><input type="date" value="'+escapeHtml(e.date)+'" data-f="date"><input type="time" value="'+escapeHtml(e.time||"12:00")+'" data-f="time"><button class="mini-btn" data-act="save">сохранить дату ♡</button></div>';
    div.querySelector('[data-act="done"]').onclick=function(){ toggleDone(e.id); };
    div.querySelector('[data-act="del"]').onclick=function(){
      askDelete(function(){
        DB.entries=DB.entries.filter(function(x){return x.id!==e.id;});
        try{ delete DB.fired[e.id]; }catch(err){}
        save(); renderDay(); renderWeek(); bumpDecor();
      });
    };
    div.querySelector('[data-act="save"]').onclick=function(){
      var nd=div.querySelector('[data-f="date"]').value;
      var nt=div.querySelector('[data-f="time"]').value;
      if(nd) e.date=nd; if(nt) e.time=nt;
      save(); renderDay(); renderWeek(); toast("Дата обновлена ♡", true); bumpDecor();
    };
    els["day-list"].appendChild(div);
  });
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }

/* милое окно удаления вместо системного confirm */
var delCb = null;
function askDelete(cb){
  delCb = cb || null;
  if(els["del-backdrop"]) els["del-backdrop"].classList.remove("hidden");
  if(els["del-modal"]) els["del-modal"].classList.remove("hidden");
}
function hideDelete(){
  if(els["del-backdrop"]) els["del-backdrop"].classList.add("hidden");
  if(els["del-modal"]) els["del-modal"].classList.add("hidden");
}
if(els["del-yes"]) els["del-yes"].onclick=function(){ hideDelete(); if(delCb){ var f=delCb; delCb=null; f(); } };
if(els["del-no"]) els["del-no"].onclick=function(){ delCb=null; hideDelete(); };
if(els["del-backdrop"]) els["del-backdrop"].onclick=function(){ delCb=null; hideDelete(); };

/* ---------- добавление + сжатие фото ---------- */
function compressImage(file){
  function fromBitmap(bmp){
    var max=900, w=bmp.width, h=bmp.height;
    var k=Math.min(1, max/Math.max(w,h));
    var cw=Math.max(1, Math.round(w*k)), ch=Math.max(1, Math.round(h*k));
    var c=document.createElement("canvas"); c.width=cw; c.height=ch;
    c.getContext("2d").drawImage(bmp,0,0,cw,ch);
    try{ if(bmp.close) bmp.close(); }catch(e){}
    return c.toDataURL("image/jpeg",0.82);
  }
  // сначала пробуем с учётом поворота фото (EXIF), чтобы с iPhone не вставало боком
  try{
    if(typeof createImageBitmap==="function"){
      return createImageBitmap(file, {imageOrientation:"from-image"}).then(function(bmp){
        return fromBitmap(bmp);
      }).catch(function(){ return oldCompress(file); });
    }
  }catch(e){}
  return oldCompress(file);
}
function oldCompress(file){
  return new Promise(function(res, rej){
    var img=new Image();
    var url=URL.createObjectURL(file);
    img.onload=function(){
      try{
        var max=900, w=img.width, h=img.height;
        var k=Math.min(1, max/Math.max(w,h));
        var cw=Math.max(1, Math.round(w*k)), ch=Math.max(1, Math.round(h*k));
        var c=document.createElement("canvas"); c.width=cw; c.height=ch;
        c.getContext("2d").drawImage(img,0,0,cw,ch);
        URL.revokeObjectURL(url);
        res(c.toDataURL("image/jpeg",0.82));
      }catch(e){ try{URL.revokeObjectURL(url);}catch(err){} rej(e); }
    };
    img.onerror=function(){ try{URL.revokeObjectURL(url);}catch(e){} rej(new Error("img")); };
    img.src=url;
  });
}
els["f-photo"].addEventListener("change", function(){
  var f=els["f-photo"].files[0];
  if(!f) return;
  compressImage(f).then(function(dataUrl){
    pendingPhoto=dataUrl;
    els["photo-preview"].src=dataUrl;
    els["photo-preview-wrap"].classList.remove("hidden");
  }).catch(function(){ toast("Не получилось сжать фото :("); });
});
els["photo-clear"].onclick=function(){ pendingPhoto=""; els["f-photo"].value=""; els["photo-preview-wrap"].classList.add("hidden"); };
/* окошко-подсказка при включении напоминания */
function showRemInfo(){
  if(!els["rem-modal"]) return;
  els["rem-backdrop"].classList.remove("hidden");
  els["rem-modal"].classList.remove("hidden");
}
function hideRemInfo(){
  if(!els["rem-modal"]) return;
  els["rem-backdrop"].classList.add("hidden");
  els["rem-modal"].classList.add("hidden");
}
if(els["f-rem-on"]) els["f-rem-on"].addEventListener("change", function(){
  if(els["f-rem-on"].checked) showRemInfo();
});
if(els["rem-modal-ok"]) els["rem-modal-ok"].onclick=hideRemInfo;
if(els["rem-backdrop"]) els["rem-backdrop"].onclick=hideRemInfo;
els["add-form"].addEventListener("submit", function(ev){
  ev.preventDefault();
  var text=els["f-text"].value.trim();
  var date=els["f-date"].value || dayISO;
  var time=els["f-time"].value || "12:00";
  if(!text && !pendingPhoto){ toast("Напиши текст или добавь фото ♡"); return; }
  var remOn=els["f-rem-on"].checked;
  var remWhen=els["f-rem-when"].value;
  if(remOn && !remWhen){ toast("Выбери дату напоминания ⏰"); return; }
  DB.entries.push({id:uid(), text:text, date:date, time:time, photo:pendingPhoto||"", rem:{on:remOn, when:remWhen||""}, done:false, created:Date.now()});
  if(!save()){ DB.entries.pop(); renderDay(); renderWeek(); return; }
  els["f-text"].value=""; pendingPhoto=""; els["f-photo"].value=""; els["photo-preview-wrap"].classList.add("hidden");
  els["f-rem-on"].checked=false; els["f-rem-when"].value="";
  dayISO=date; renderDay(); renderWeek();
  toast("Записано! Ты умница ♡", true); bumpDecor();
});

/* ---------- листы ---------- */
function openSheet(which){
  els["sheet-backdrop"].classList.remove("hidden");
  els["week-sheet"].classList.toggle("hidden", which!=="week");
  els["settings-sheet"].classList.toggle("hidden", which!=="settings");
  if(which==="week") renderSheet();
}
function closeSheets(){
  els["sheet-backdrop"].classList.add("hidden");
  els["week-sheet"].classList.add("hidden");
  els["settings-sheet"].classList.add("hidden");
}
els["week-pill"].onclick=function(){ sheetYear=weekStart.getFullYear(); sheetMonth=weekStart.getMonth(); openSheet("week"); };
els["btn-settings"].onclick=function(){ openSheet("settings"); };
els["week-sheet-close"].onclick=closeSheets;
els["settings-close"].onclick=closeSheets;
els["sheet-backdrop"].onclick=closeSheets;
// ползунок тоже закрывает + свайп вниз по листу
try{
  var handles = document.querySelectorAll(".sheet-handle");
  for(var hi=0; hi<handles.length; hi++){
    (function(h){ h.addEventListener("click", closeSheets); })(handles[hi]);
  }
}catch(e){}
["week-sheet","settings-sheet"].forEach(function(id){
  var sh = $(id);
  if(!sh || !sh.addEventListener) return;
  var sy = null;
  sh.addEventListener("touchstart", function(e){ if(e.touches && e.touches.length===1) sy=e.touches[0].clientY; }, {passive:true});
  sh.addEventListener("touchmove", function(e){
    if(sy===null || !e.touches) return;
    var dy=e.touches[0].clientY-sy;
    if(dy>0) sh.style.transform="translateY("+dy+"px)";
  }, {passive:true});
  sh.addEventListener("touchend", function(e){
    var dy=0;
    try{ dy=(e.changedTouches[0].clientY-sy)||0; }catch(err){}
    sh.style.transform="";
    if(dy>70) closeSheets();
    sy=null;
  });
});
els["btn-back"].onclick=function(){ els["view-day"].classList.add("hidden"); els["view-week"].classList.remove("hidden"); renderWeek(); bumpDecor(); };
els["btn-home"].onclick=function(){ weekStart=startOfWeekMonday(new Date()); els["view-day"].classList.add("hidden"); els["view-week"].classList.remove("hidden"); renderWeek(); bumpDecor(); window.scrollTo({top:0,behavior:"smooth"}); };
/* стрелочки листания недель без открытия выбора */
function stepWeek(dir){
  weekStart=addDays(weekStart, dir*7);
  els["view-day"].classList.add("hidden");
  els["view-week"].classList.remove("hidden");
  renderWeek(); bumpDecor();
}
if(els["week-prev"]) els["week-prev"].onclick=function(){ stepWeek(-1); };
if(els["week-next"]) els["week-next"].onclick=function(){ stepWeek(1); };

function renderSheet(){
  els["year-label"].textContent=sheetYear;
  els["months-grid"].innerHTML="";
  MONTHS_NAMES.forEach(function(m, i){
    var b=document.createElement("button");
    b.className="month-btn"+(i===sheetMonth?" active":"");
    b.textContent=m;
    b.onclick=function(){ sheetMonth=i; renderSheet(); };
    els["months-grid"].appendChild(b);
  });
  // недели месяца: понедельники, чьи недели пересекают месяц
  els["weeks-list"].innerHTML="";
  var first=new Date(sheetYear, sheetMonth, 1);
  var last=new Date(sheetYear, sheetMonth+1, 0);
  var cur=startOfWeekMonday(first);
  while(cur<=last){
    var mon=new Date(cur);
    var sun=addDays(mon,6);
    var label=mon.getDate()+" "+MONTHS_SHORT[mon.getMonth()]+" – "+sun.getDate()+" "+MONTHS_SHORT[sun.getMonth()];
    var b=document.createElement("button");
    var isCur = toISO(mon)===toISO(weekStart);
    b.className="week-btn"+(isCur?" active":"");
    b.textContent=(isCur?"💗 ":"🤍 ")+label;
    (function(m){ b.onclick=function(){ weekStart=startOfWeekMonday(m); els["view-day"].classList.add("hidden"); els["view-week"].classList.remove("hidden"); renderWeek(); bumpDecor(); closeSheets(); }; })(mon);
    els["weeks-list"].appendChild(b);
    cur=addDays(cur,7);
    if(els["weeks-list"].children.length>6) break;
  }
}
els["year-prev"].onclick=function(){ sheetYear--; renderSheet(); };
els["year-next"].onclick=function(){ sheetYear++; renderSheet(); };

/* ---------- напоминания: перезвон + вибрация + Notification, пока открыто ---------- */
var audioCtx=null;
function ensureAudio(){
  try{
    if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==="suspended") audioCtx.resume();
  }catch(e){}
}
document.addEventListener("pointerdown", ensureAudio, {passive:true});
function beep(){
  try{
    ensureAudio();
    if(!audioCtx) return;
    [523,659,784].forEach(function(f,i){
      var o=audioCtx.createOscillator(), g=audioCtx.createGain();
      o.type="sine"; o.frequency.value=f;
      var t=audioCtx.currentTime+i*0.22;
      g.gain.setValueAtTime(0.0001,t);
      g.gain.exponentialRampToValueAtTime(0.25,t+0.03);
      g.gain.exponentialRampToValueAtTime(0.0001,t+0.2);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t); o.stop(t+0.22);
    });
  }catch(e){}
}
els["btn-test-sound"].onclick=function(){ beep(); toast("Слышишь? ♪ Это перезвон ♡", true); };
els["btn-notify"].onclick=function(){
  try{
    if(!("Notification" in window)){ toast("Этот браузер не умеет уведомления"); return; }
    Notification.requestPermission().then(function(p){
      toast(p==="granted" ? "Ура! Уведомления разрешены ♡" : "Ладно, буду звенеть и тостами ♡", true);
    });
  }catch(e){ toast("Не получилось спросить разрешение"); }
};
function fireReminder(e){
  beep();
  try{ if(navigator.vibrate) navigator.vibrate([200,100,200]); }catch(err){}
  var txt=(e.text||"Пора!").slice(0,80);
  try{
    if("Notification" in window && Notification.permission==="granted"){
      new Notification("Дневник Суи ⏰", {body:txt});
    }
  }catch(err){}
  toast("⏰ "+txt, true);
}
function checkReminders(showMissed){
  var now=new Date();
  var pad2=function(n){return (n<10?"0":"")+n;};
  var nowLocal = now.getFullYear()+"-"+pad2(now.getMonth()+1)+"-"+pad2(now.getDate())+"T"+pad2(now.getHours())+":"+pad2(now.getMinutes());
  DB.entries.forEach(function(e){
    if(!e.rem || !e.rem.on || !e.rem.when) return;
    if(DB.fired[e.id]) return;
    if(e.rem.when<=nowLocal){
      DB.fired[e.id]=1;
      save();
      fireReminder(e);
      if(showMissed) toast("Пропущенное ⏰: "+(e.text||"задача").slice(0,60));
    }
  });
}

/* ---------- маскот ---------- */
var phraseI=0;
els["mascot-img"].addEventListener("click", function(){
  ensureAudio();
  var d = currentDecor();
  var b=els["mascot-bubble"];
  bumpDecor();
  if(d==="flowers"){
    var t = DB.theme||"kawaii";
    var arr = FLOWER_PHRASES[t]||FLOWER_PHRASES.kawaii;
    var txt = arr[flowerPhraseI%arr.length]; flowerPhraseI++;
    b.textContent = txt;
  } else {
    var g = themeGirl();
    var arr2 = PHRASES_BY_GIRL[g] || PHRASES;
    var txt2 = arr2[phraseI%arr2.length]; phraseI++;
    b.textContent = themeGirlName() + ": " + txt2;
  }
  b.classList.remove("hidden");
  clearTimeout(b._t);
  b._t=setTimeout(function(){ b.classList.add("hidden"); }, 2600);
});

/* ---------- кнопки декора ---------- */
if(els["decor-girls"]) els["decor-girls"].onclick=function(){ DB.decor="girls"; save(); applyTheme(); toast("Девочки вернулись ♡", true); };
if(els["decor-flowers"]) els["decor-flowers"].onclick=function(){ DB.decor="flowers"; flowerRandomize(); save(); applyTheme(); toast("Теперь цветочки ✿", true); };
if(els["decor-none"]) els["decor-none"].onclick=function(){ DB.decor="none"; save(); applyTheme(); toast("Чистый интерфейс ✧", true); };

/* ---------- старт ---------- */
function init(){
  applyTheme();
  els["f-date"].value=dayISO;
  els["f-time"].value="12:00";
  renderWeek();
  // ищем локальные картинки для чередования, потом обновляем маскота
  discoverGirls(function(){ applyDecor(); renderThemes(); });
  // пропущенные при входе
  setTimeout(function(){ checkReminders(true); }, 800);
  setInterval(function(){ checkReminders(false); }, 20000);
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(function(){});
  }
}
init();
})();
