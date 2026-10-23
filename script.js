const IMGS=["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1599629954294-14df9ec8c6f5?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"];
const P=[
{id:1,n:"Simsiz quloqchin Pro",c:"Elektronika",p:289000,o:459000,r:4.8,v:1240,e:"🎧",bg:"#e8dcff"},
{id:2,n:"Smart soat, 1.8″ ekran",c:"Elektronika",p:349000,o:520000,r:4.6,v:860,e:"⌚",bg:"#d9ecff"},
{id:3,n:"Telefon uchun powerbank 20000 mAh",c:"Elektronika",p:179000,o:240000,r:4.7,v:2310,e:"🔋",bg:"#fff0c9"},
{id:4,n:"Bluetooth kolonka",c:"Elektronika",p:210000,o:0,r:4.5,v:540,e:"🔊",bg:"#ffd9e0"},
{id:5,n:"Erkaklar kurtkasi, qishki",c:"Kiyim",p:420000,o:690000,r:4.4,v:310,e:"🧥",bg:"#dcefe3"},
{id:6,n:"Sport krossovka",c:"Kiyim",p:260000,o:350000,r:4.6,v:970,e:"👟",bg:"#ffe3cc"},
{id:7,n:"Ayollar sumkasi",c:"Kiyim",p:195000,o:0,r:4.3,v:210,e:"👜",bg:"#f4d9ff"},
{id:8,n:"Paxta ko‘ylak, 3 dona",c:"Kiyim",p:150000,o:210000,r:4.5,v:660,e:"👕",bg:"#d9f3f0"},
{id:9,n:"Elektr choynak 1.7 l",c:"Uy-ro‘zg‘or",p:135000,o:190000,r:4.7,v:1820,e:"🫖",bg:"#ffd9d9"},
{id:10,n:"Choyshab to‘plami, 2 kishilik",c:"Uy-ro‘zg‘or",p:230000,o:340000,r:4.6,v:730,e:"🛏️",bg:"#e0e8ff"},
{id:11,n:"Kosa-tarelka to‘plami",c:"Uy-ro‘zg‘or",p:310000,o:0,r:4.4,v:290,e:"🍽️",bg:"#fff3d1"},
{id:12,n:"Qozon, 8 litr",c:"Uy-ro‘zg‘or",p:380000,o:480000,r:4.9,v:1500,e:"🍲",bg:"#ffe0d1"},
{id:13,n:"Bolalar konstruktori, 500 qism",c:"Bolalar",p:165000,o:240000,r:4.8,v:940,e:"🧩",bg:"#d9f5d9"},
{id:14,n:"Yumshoq ayiq o‘yinchoq",c:"Bolalar",p:89000,o:0,r:4.7,v:1100,e:"🧸",bg:"#f9e0c8"},
{id:15,n:"Maktab ryukzagi",c:"Bolalar",p:175000,o:250000,r:4.5,v:580,e:"🎒",bg:"#d6e6ff"},
{id:16,n:"Rasm chizish to‘plami",c:"Bolalar",p:72000,o:99000,r:4.6,v:370,e:"🎨",bg:"#ffe0f0"}
];
const C=["Barchasi",...new Set(P.map(x=>x.c))];
let cat="Barchasi",term="",cart={};
const $=id=>document.getElementById(id);
const fmt=n=>n.toLocaleString("ru-RU")+" so‘m";
function renderCats(){$("cats").innerHTML=C.map(c=>`<button class="${c===cat?"on":""}" data-c="${c}">${c}</button>`).join("")}
function renderGrid(){
const list=P.filter(x=>(cat==="Barchasi"||x.c===cat)&&x.n.toLowerCase().includes(term));
$("title").textContent=cat==="Barchasi"?"Barcha mahsulotlar":cat;
$("grid").innerHTML=list.length?list.map(x=>`<article class="card"><div class="pic" style="background:${x.bg}"><img src="${IMGS[x.id-1]}" alt="${x.n}" loading="lazy">${x.o?`<span class="badge">−${Math.round((1-x.p/x.o)*100)}%</span>`:""}</div><div class="info"><div class="name">${x.n}</div><div class="rate">★ ${x.r} (${x.v} baho)</div><div class="old">${x.o?fmt(x.o):""}</div><div class="price">${fmt(x.p)}</div><button class="add" data-id="${x.id}">Savatga qo‘shish</button></div></article>`).join(""):`<div class="empty">“${term}” bo‘yicha hech narsa topilmadi. Boshqa so‘z bilan izlang.</div>`}
function renderCart(){
const ids=Object.keys(cart);let n=0,s=0;
$("items").innerHTML=ids.length?ids.map(i=>{const x=P.find(p=>p.id==i),q=cart[i];n+=q;s+=q*x.p;return `<div class="row"><div class="t" style="background:${x.bg}"><img src="${IMGS[x.id-1]}" alt=""></div><div class="m">${x.n}<div><b>${fmt(x.p)}</b></div><div class="qty"><button data-d="-1" data-id="${i}" aria-label="Kamaytirish">−</button>${q}<button data-d="1" data-id="${i}" aria-label="Ko‘paytirish">+</button></div></div></div>`}).join(""):`<p style="color:var(--mute);text-align:center;margin-top:40px">Savat bo‘sh. Mahsulot tanlab, “Savatga qo‘shish” tugmasini bosing.</p>`;
$("cnt").textContent=n;$("sum").textContent=fmt(s)}
function toast(t){const e=$("toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),1800)}
function panel(o){$("cart").classList.toggle("open",o);$("shade").classList.toggle("open",o)}
$("cats").onclick=e=>{const c=e.target.dataset.c;if(c){cat=c;renderCats();renderGrid()}};
$("q").oninput=e=>{term=e.target.value.trim().toLowerCase();renderGrid()};
$("grid").onclick=e=>{const id=e.target.dataset.id;if(id){cart[id]=(cart[id]||0)+1;renderCart();toast("Savatga qo‘shildi")}};
$("items").onclick=e=>{const id=e.target.dataset.id,d=+e.target.dataset.d;if(id&&d){cart[id]+=d;if(cart[id]<1)delete cart[id];renderCart()}};
$("open").onclick=()=>panel(true);$("close").onclick=$("shade").onclick=()=>panel(false);
$("buy").onclick=()=>{if(!Object.keys(cart).length){toast("Avval savatga mahsulot qo‘shing");return}cart={};renderCart();panel(false);toast("Buyurtma qabul qilindi!")};
renderCats();renderGrid();renderCart();
