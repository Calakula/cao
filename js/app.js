const TN=[["Network fundamentals","Основы сетей","Желі негіздері"],["Cisco IOS & devices","Cisco IOS и устройства","Cisco IOS және құрылғылар"],["Ethernet, switching & media","Ethernet, коммутация, среды","Ethernet, коммутация, орта"],["IPv4 / IPv6 addressing","Адресация IPv4 / IPv6","IPv4 / IPv6 адрестеу"],["Transport, apps & security","Транспорт, приложения, безопасность","Транспорт, қолданбалар, қауіпсіздік"]];
const S={en:{sub:"Computer Organization & Architecture — final exam",topics:"Quizzes by topic",full:"Full quiz",rev:"Review mistakes",calc:"Subnet calculator",best:"Best",next:"Next",fin:"Finish",res:"Result",again:"Try again",home:"Home",ok:"✅ Correct!",no:"❌ Wrong",why:"Explanation",ph:"e.g. 192.168.1.96/27",net:"Network",bc:"Broadcast",hs:"Usable hosts",rng:"Host range",mask:"Mask",none:"No mistakes saved yet",reset:"Reset progress",qs:"questions",tip:"Wrong answers are saved to «Review mistakes».",untr:"English only for now (translation coming)",multi:"choose N",chk:"Check",ot:"Only translated questions",tr:"translated"},
ru:{sub:"Computer Organization & Architecture — финал",topics:"Квизы по темам",full:"Полный квиз",rev:"Работа над ошибками",calc:"Калькулятор подсетей",best:"Лучший",next:"Далее",fin:"Завершить",res:"Результат",again:"Ещё раз",home:"Главная",ok:"✅ Верно!",no:"❌ Неверно",why:"Объяснение",ph:"напр. 192.168.1.96/27",net:"Сеть",bc:"Broadcast",hs:"Доступно хостов",rng:"Диапазон хостов",mask:"Маска",none:"Ошибок пока нет",reset:"Сбросить прогресс",qs:"вопросов",tip:"Неверные ответы сохраняются в «Работе над ошибками».",untr:"Пока только на английском (перевод скоро)",multi:"выберите N",chk:"Проверить",ot:"Только переведённые вопросы",tr:"переведено"},
kk:{sub:"Computer Organization & Architecture — финал",topics:"Тақырып бойынша квиздер",full:"Толық квиз",rev:"Қателермен жұмыс",calc:"Ішкі желі калькуляторы",best:"Үздік",next:"Келесі",fin:"Аяқтау",res:"Нәтиже",again:"Қайта",home:"Басты бет",ok:"✅ Дұрыс!",no:"❌ Қате",why:"Түсініктеме",ph:"мыс. 192.168.1.96/27",net:"Желі",bc:"Broadcast",hs:"Қолжетімді хост",rng:"Хост диапазоны",mask:"Маска",none:"Қателер әлі жоқ",reset:"Прогрессті тазалау",qs:"сұрақ",tip:"Қате жауаптар «Қателермен жұмыс» бөліміне сақталады.",untr:"Әзірге тек ағылшынша (аударма жақында)",multi:"N жауап таңдаңыз",chk:"Тексеру",ot:"Тек аударылған сұрақтар",tr:"аударылған"}};
let P={w:[],b:{},l:"en",th:null,ot:false};try{Object.assign(P,JSON.parse(localStorage.getItem("ccna1v2")||"{}"))}catch(e){}
const sv=()=>{try{localStorage.setItem("ccna1v2",JSON.stringify(P))}catch(e){}};
const $=document.getElementById("app"),L=()=>S[P.l],li=()=>["en","ru","kk"].indexOf(P.l);
const theme=()=>{const d=P.th||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=d;return d};
const T=q=>P.l=="en"?null:(window["TR_"+P.l.toUpperCase()]||{})[q.id];
const qq=q=>T(q)?T(q).q:q.q,qo=q=>T(q)?T(q).o.map((o,i)=>o||q.o[i]):q.o,qe=q=>T(q)&&T(q).e?T(q).e:q.e,CA=q=>[].concat(q.a);
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pool=()=>QS.filter(q=>!(P.ot&&P.l!="en"&&!T(q)));
let cur=home,G=null;const go=f=>{cur=f;f()};
function hd(){const d=theme();return `<header><div><h1>🌐 CCNA 1 Exam Prep</h1><p class="sub">${L().sub}</p></div><div class="tools">${["en","ru","kk"].map(l=>`<button class="${l==P.l?"on":""}" onclick="setL('${l}')">${l.toUpperCase()}</button>`).join("")}<button onclick="tog()" title="Theme">${d=="dark"?"☀️":"🌙"}</button></div></header>`}
function setL(l){P.l=l;sv();cur()}
function tog(){P.th=theme()=="dark"?"light":"dark";sv();cur()}
function setOT(v){P.ot=v;sv();home()}
function home(){const pl=pool(),nt=QS.filter(T).length;
$.innerHTML=hd()+`<button class="card hero" onclick="start('full',shuf(pool()))"><b>🎯 ${L().full}</b><small>${pl.length} ${L().qs}${P.b.full!=null?" · "+L().best+": "+P.b.full+"%":""}</small></button>
${P.l!="en"?`<p class="sub" style="margin:10px 0 0"><label><input type="checkbox" ${P.ot?"checked":""} onchange="setOT(this.checked)"> ${L().ot}</label> · ${nt}/${QS.length} ${L().tr}</p>`:""}
<h2>${L().topics}</h2><div class="grid">${TN.map((t,k)=>{const n=pl.filter(q=>q.t==k).length;return `<button class="card" onclick="start('t${k}',shuf(pool().filter(q=>q.t==${k})).slice(0,20))"><b>${t[li()]}</b><small>${Math.min(20,n)} / ${n} ${L().qs}${P.b["t"+k]!=null?" · "+L().best+": "+P.b["t"+k]+"%":""}</small></button>`}).join("")}</div>
<h2>🧰</h2><div class="grid"><button class="card" onclick="rev()"><b>🔁 ${L().rev}</b><small>${P.w.length} ${L().qs}</small></button><button class="card" onclick="go(calc)"><b>🧮 ${L().calc}</b><small>/24, /27, /30 …</small></button></div>
<p class="sub" style="margin-top:22px">${L().tip} <a href="#" onclick="P.w=[];P.b={};sv();home();return false">${L().reset}</a></p>`}
function rev(){const l=QS.filter(q=>P.w.includes(q.id));if(!l.length)return alert(L().none);start("rev",shuf(l))}
function start(key,list){if(!list.length)return;G={key,list,i:0,s:0,a:null,sel:[]};go(quiz)}
function quiz(){const q=G.list[G.i],n=G.list.length,ca=CA(q),m=ca.length>1,tr=T(q);
const cls=i=>G.a==null?(G.sel.includes(i)?"sel":""):(ca.includes(i)?"ok":G.sel.includes(i)?"no":"");
$.innerHTML=hd()+`<div class="bar"><i style="width:${G.i/n*100}%"></i></div><div class="q"><span class="meta">${G.i+1} / ${n} · ${TN[q.t][li()]}${m?" · "+L().multi.replace("N",ca.length):""}${P.l!="en"&&!tr?"<br>🌐 "+L().untr:""}</span><h3>${qq(q)}</h3>
${qo(q).map((o,i)=>`<button class="o ${cls(i)}" ${G.a!=null?"disabled":""} onclick="pick(${i})">${o}</button>`).join("")}
${G.a==null&&m?`<button class="btn" onclick="chk()">${L().chk}</button>`:""}
${G.a!=null?`<div class="ex"><b>${G.ok?L().ok:L().no}</b><br><b>${L().why}:</b> ${qe(q)}</div><button class="btn" onclick="nxt()">${G.i+1<n?L().next:L().fin} →</button>`:""}</div><button class="btn g" onclick="go(home)">← ${L().home}</button>`}
function pick(i){if(G.a!=null)return;const q=G.list[G.i];if(CA(q).length>1){G.sel=G.sel.includes(i)?G.sel.filter(x=>x!=i):G.sel.concat(i);return quiz()}G.sel=[i];fin()}
function chk(){if(G.sel.length)fin()}
function fin(){const q=G.list[G.i],ca=CA(q);G.a=1;G.ok=ca.length==G.sel.length&&ca.every(x=>G.sel.includes(x));if(G.ok){G.s++;P.w=P.w.filter(x=>x!=q.id)}else if(!P.w.includes(q.id))P.w.push(q.id);sv();quiz()}
function nxt(){G.i++;G.a=null;G.sel=[];G.ok=0;if(G.i<G.list.length)return quiz();const p=Math.round(G.s/G.list.length*100);if(G.key!="rev")P.b[G.key]=Math.max(P.b[G.key]||0,p);sv();cur=()=>{};
$.innerHTML=hd()+`<div class="q"><h3>${L().res}</h3><div class="big" style="color:${p>=70?"var(--ok)":"var(--no)"}">${G.s} / ${G.list.length} · ${p}%</div><div class="bar"><i style="width:${p}%"></i></div><button class="btn" onclick="start('${G.key}',shuf(G.list))">${L().again}</button><button class="btn g" onclick="go(home)">${L().home}</button></div>`}
function calc(){$.innerHTML=hd()+`<div class="q"><h3>🧮 ${L().calc}</h3><input type="text" id="ip" placeholder="${L().ph}" oninput="calcR()" value="192.168.1.96/27"><div id="r"></div></div><button class="btn g" onclick="go(home)">← ${L().home}</button>`;calcR()}
function calcR(){const v=document.getElementById("ip").value.trim().match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)\/(\d+)$/),r=document.getElementById("r");if(!v||v.slice(1,5).some(x=>x>255)||v[5]>32){r.innerHTML="";return}
const p=+v[5],ip=((v[1]<<24)|(v[2]<<16)|(v[3]<<8)|+v[4])>>>0,m=p?(~0<<(32-p))>>>0:0,net=(ip&m)>>>0,bc=(net|~m)>>>0,f=n=>[24,16,8,0].map(s=>n>>>s&255).join("."),h=p>=31?0:2**(32-p)-2;
r.innerHTML=`<table><tr><td>${L().mask}</td><td>${f(m)}</td></tr><tr><td>${L().net}</td><td>${f(net)}</td></tr><tr><td>${L().bc}</td><td>${f(bc)}</td></tr><tr><td>${L().rng}</td><td>${h?f(net+1)+" – "+f(bc-1):"—"}</td></tr><tr><td>${L().hs}</td><td>${h}</td></tr></table>`}
home();
