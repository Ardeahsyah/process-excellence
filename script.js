const T={
en:{n_agile:"Agile",n_lss:"Lean Six Sigma",n_dt:"Design Thinking",n_pick:"Find your fit",
h_title:"Process excellence is a habit, not a project.",
h_sub:"Three ways of working that help teams deliver sooner, make fewer mistakes and build what people actually need. Tap a node to explore.",
s1:"defects per million at 6σ",s2:"weeks in a typical sprint",s3:"design thinking stages",
a_t:"Agile way of working",a_l:"Deliver in small steps, learn from real feedback and adjust early. Tap a card to move it across the board.",
cols:["Backlog","In progress","Review","Done"],
cards:["Map customer journey","Build login page","Fix payment error","Write release notes","Set up dashboard"],
reset:"Reset board",done:(d,n)=>`${d} of ${n} items done this sprint`,
tags:["Iterate often","Collaborate daily","Welcome change","Deliver value early"],
l_t:"Lean Six Sigma",l_l:"Lean removes waste. Six Sigma reduces variation. Together they make work flow smoothly and predictably. Explore the DMAIC cycle below.",
dmaic:[["Define","Clarify the problem, the customer and the goal.","Tools: project charter, SIPOC, voice of customer"],
["Measure","Collect data to see how the process performs today.","Tools: data plan, process map, capability study"],
["Analyse","Find the root causes behind the defects and delays.","Tools: fishbone, 5 Whys, Pareto chart"],
["Improve","Test and put in place solutions that remove the causes.","Tools: pilot, poka-yoke, kaizen event"],
["Control","Keep the gains with standards, monitoring and ownership.","Tools: control chart, SOP, response plan"]],
sig_t:"Sigma level explorer",sig_d:"Slide to see how quality improves as variation shrinks.",dpmo:"defects per million opportunities",yield:"Process yield",
w_t:"Spot the 8 wastes",w_d:"Tap each waste when you see it in your own process.",
wastes:["Defects","Overproduction","Waiting","Unused talent","Transport","Inventory","Motion","Extra processing"],wc:n=>`${n} of 8 wastes spotted`,
d_t:"Design Thinking",d_l:"Start with people, not solutions. Move through five stages and loop back whenever you learn something new.",
dt:[["Empathise","Observe and listen to the people you design for.","Try: interviews, shadowing, empathy maps"],
["Define","Turn what you learned into one clear problem statement.","Try: point-of-view statement, “How might we…?”"],
["Ideate","Generate many ideas before choosing any.","Try: brainstorming, crazy 8s, dot voting"],
["Prototype","Make a rough version quickly and cheaply.","Try: paper sketches, storyboards, mock-ups"],
["Test","Put it in front of users and learn what to change.","Try: usability tests, feedback grids, A/B tests"]],
prev:"Back",next:"Next stage",restart:"Start over",
p_t:"Find your fit",p_l:"Choose the situation closest to yours.",
sit:["Requirements keep changing","Too many errors and rework","We don’t know what users need"],
rec:[["Agile","Work in short sprints, review often and re-prioritise the backlog with your customer so change becomes an advantage."],
["Lean Six Sigma","Use DMAIC to measure the problem, find root causes and remove variation, then lock in the improvement."],
["Design Thinking","Go back to the users. Empathise, define the real problem and test small prototypes before you build."]],
foot:"Process Excellence Hub · Agile, Lean Six Sigma and Design Thinking"},
ms:{n_agile:"Agile",n_lss:"Lean Six Sigma",n_dt:"Pemikiran Reka Bentuk",n_pick:"Cari yang sesuai",
h_title:"Kecemerlangan proses ialah tabiat, bukan projek.",
h_sub:"Tiga cara bekerja yang membantu pasukan menyampaikan lebih awal, mengurangkan kesilapan dan membina apa yang benar-benar diperlukan. Ketik nod untuk meneroka.",
s1:"kecacatan sejuta pada 6σ",s2:"minggu bagi satu sprint biasa",s3:"peringkat pemikiran reka bentuk",
a_t:"Cara kerja Agile",a_l:"Hasilkan dalam langkah kecil, belajar daripada maklum balas sebenar dan sesuaikan lebih awal. Ketik kad untuk menggerakkannya merentasi papan.",
cols:["Tertunggak","Sedang dibuat","Semakan","Siap"],
cards:["Petakan perjalanan pelanggan","Bina halaman log masuk","Betulkan ralat pembayaran","Tulis nota keluaran","Sediakan papan pemuka"],
reset:"Set semula papan",done:(d,n)=>`${d} daripada ${n} item siap dalam sprint ini`,
tags:["Ulang dengan kerap","Bekerjasama setiap hari","Terima perubahan","Beri nilai lebih awal"],
l_t:"Lean Six Sigma",l_l:"Lean menghapuskan pembaziran. Six Sigma mengurangkan variasi. Bersama-sama, kerja mengalir lancar dan boleh diramal. Terokai kitaran DMAIC di bawah.",
dmaic:[["Takrif","Jelaskan masalah, pelanggan dan matlamat.","Alat: piagam projek, SIPOC, suara pelanggan"],
["Ukur","Kumpul data untuk melihat prestasi proses hari ini.","Alat: pelan data, peta proses, kajian keupayaan"],
["Analisis","Cari punca sebenar di sebalik kecacatan dan kelewatan.","Alat: rajah tulang ikan, 5 Mengapa, carta Pareto"],
["Tambah baik","Uji dan laksanakan penyelesaian yang menghapuskan punca.","Alat: perintis, poka-yoke, acara kaizen"],
["Kawal","Kekalkan hasil melalui piawaian, pemantauan dan pemilikan.","Alat: carta kawalan, SOP, pelan tindak balas"]],
sig_t:"Penjelajah tahap sigma",sig_d:"Gelongsor untuk melihat kualiti meningkat apabila variasi mengecil.",dpmo:"kecacatan bagi sejuta peluang",yield:"Hasil proses",
w_t:"Kenal pasti 8 pembaziran",w_d:"Ketik setiap pembaziran apabila anda nampak dalam proses anda.",
wastes:["Kecacatan","Pengeluaran berlebihan","Penantian","Bakat tidak digunakan","Pengangkutan","Inventori","Pergerakan","Pemprosesan berlebihan"],wc:n=>`${n} daripada 8 pembaziran dikesan`,
d_t:"Pemikiran Reka Bentuk",d_l:"Mulakan dengan manusia, bukan penyelesaian. Lalui lima peringkat dan kembali semula apabila anda belajar sesuatu yang baharu.",
dt:[["Berempati","Perhati dan dengar orang yang anda reka untuk mereka.","Cuba: temu bual, mengekori, peta empati"],
["Takrif","Ubah apa yang dipelajari kepada satu pernyataan masalah yang jelas.","Cuba: pernyataan sudut pandang, “Bagaimana kita boleh…?”"],
["Jana idea","Hasilkan banyak idea sebelum memilih mana-mana.","Cuba: sumbang saran, crazy 8s, undi titik"],
["Prototaip","Buat versi kasar dengan cepat dan murah.","Cuba: lakaran kertas, papan cerita, model contoh"],
["Uji","Tunjukkan kepada pengguna dan belajar apa yang perlu diubah.","Cuba: ujian kebolehgunaan, grid maklum balas, ujian A/B"]],
prev:"Kembali",next:"Peringkat seterusnya",restart:"Mula semula",
p_t:"Cari yang sesuai",p_l:"Pilih situasi yang paling hampir dengan anda.",
sit:["Keperluan sentiasa berubah","Terlalu banyak ralat dan kerja semula","Kami tidak tahu apa pengguna perlukan"],
rec:[["Agile","Bekerja dalam sprint pendek, semak kerap dan susun semula keutamaan bersama pelanggan supaya perubahan menjadi kelebihan."],
["Lean Six Sigma","Guna DMAIC untuk mengukur masalah, mencari punca dan mengurangkan variasi, kemudian kukuhkan penambahbaikan."],
["Pemikiran Reka Bentuk","Kembali kepada pengguna. Berempati, takrifkan masalah sebenar dan uji prototaip kecil sebelum membina."]],
foot:"Hab Kecemerlangan Proses · Agile, Lean Six Sigma dan Pemikiran Reka Bentuk"}
};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L='en',cols=[0,0,0,1,2],moved=-1,tab=0,stage=0,spotted=new Set(),sit=-1,sig=3;
const DPMO={1:691462,2:308538,3:66807,4:6210,5:233,6:3.4};
const COL=['var(--ag)','var(--ls)','var(--dt)'];

function countTo(el,to,dec){
  const t0=performance.now(),d=1100,from=parseFloat(el.dataset.cur||0);
  (function f(t){const p=Math.min(1,(t-t0)/d),e=1-Math.pow(1-p,3),v=from+(to-from)*e;
    el.textContent=dec?v.toFixed(1):Math.round(v).toLocaleString('en-US');
    if(p<1)requestAnimationFrame(f);else el.dataset.cur=to})(t0);
}
function board(){
  const t=T[L];
  $('#board').innerHTML=t.cols.map((c,ci)=>{
    const items=cols.map((v,i)=>v===ci?i:-1).filter(i=>i>=0);
    return `<div class="col ${ci===3?'done':''}"><h3>${c}<span>${items.length}</span></h3>`+
      items.map(i=>`<button class="card ${i===moved?'pop':''}" data-i="${i}">${t.cards[i]}</button>`).join('')+`</div>`}).join('');
  const d=cols.filter(v=>v===3).length;
  $('#aBar').style.width=d/cols.length*100+'%';$('#aTxt').textContent=t.done(d,cols.length);
  $('#aTags').innerHTML=t.tags.map(x=>`<span class="chip">${x}</span>`).join('');
}
function tabs(){
  const t=T[L];
  $('#tabs').innerHTML=t.dmaic.map((x,i)=>`<button role="tab" aria-selected="${i===tab}" data-i="${i}" title="${x[0]}">${'DMAIC'[i]}</button>`).join('');
  const x=t.dmaic[tab];
  $('#dmaic').innerHTML=`<div class="swap"><h3>${x[0]}</h3><p>${x[1]}</p><p class="tool" style="--c:var(--ls)">${x[2]}</p></div>`;
}
function sigma(first){
  $('#sigV').textContent=sig;const v=DPMO[sig];
  const el=$('#dpmo');countTo(el,v,sig===6);
  const y=(1-v/1e6)*100;$('#yBar').style.width=y+'%';$('#yTxt').textContent=y.toFixed(sig>=5?4:2)+'%';
}
function waste(){
  const t=T[L];
  $('#waste').innerHTML=t.wastes.map((w,i)=>`<button class="chip ${spotted.has(i)?'on':''}" data-i="${i}">${w}</button>`).join('');
  $('#wCount').textContent=t.wc(spotted.size);
}
function dt(){
  const t=T[L],x=t.dt[stage];
  $('#steps').innerHTML=`<div class="fill" id="fill" style="width:${stage/4*90}%"></div>`+t.dt.map((s,i)=>
    `<button class="step ${i<=stage?'reached':''} ${i===stage?'now':''}" data-i="${i}"><b>${i+1}</b>${s[0]}</button>`).join('');
  $('#dtBody').innerHTML=`<div class="swap"><h3>${x[0]}</h3><p>${x[1]}</p><p class="tool" style="--c:var(--dt)">${x[2]}</p></div>`;
  $('#prev').textContent=t.prev;$('#prev').disabled=stage===0;
  $('#next').textContent=stage===4?t.restart:t.next;
}
function pick(){
  const t=T[L];
  $('#opts').innerHTML=t.sit.map((s,i)=>`<button data-i="${i}" aria-pressed="${i===sit}" style="--rc:${COL[i]}">${s}</button>`).join('');
  const r=t.rec[sit];
  $('#rec').innerHTML=sit<0?`<span style="color:var(--mute)">${t.p_l}</span>`:
    `<div class="swap"><h3 style="color:${COL[sit]}">${r[0]}</h3><p style="margin:0">${r[1]}</p></div>`;
}
function setLang(l){
  L=l;document.documentElement.lang=l==='ms'?'ms':'en';
  $$('[data-i18n]').forEach(e=>e.textContent=T[l][e.dataset.i18n]);
  $$('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
  board();tabs();waste();dt();pick();
  $('#ringSub').textContent=l==='ms'?'ketik nod':'tap a node';
  $('#ringLabel').textContent=l==='ms'?'Kecemerlangan Proses':'Process Excellence';
}
/* events */
$$('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
$('#board').onclick=e=>{const c=e.target.closest('.card');if(!c)return;
  const i=+c.dataset.i;cols[i]=Math.min(3,cols[i]+1);moved=i;board();moved=-1};
$('#aReset').onclick=()=>{cols=[0,0,0,1,2];board()};
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(b){tab=+b.dataset.i;tabs()}};
$('#sig').oninput=e=>{sig=+e.target.value;sigma()};
$('#waste').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const i=+b.dataset.i;
  spotted.has(i)?spotted.delete(i):spotted.add(i);waste()};
$('#steps').onclick=e=>{const b=e.target.closest('.step');if(b){stage=+b.dataset.i;dt()}};
$('#prev').onclick=()=>{stage=Math.max(0,stage-1);dt()};
$('#next').onclick=()=>{stage=stage===4?0:stage+1;dt()};
$('#opts').onclick=e=>{const b=e.target.closest('button');if(b){sit=+b.dataset.i;pick()}};
$$('.node').forEach(n=>{
  const lbl=$('#ringLabel');
  const on=()=>lbl.textContent=n.dataset.k,off=()=>lbl.textContent=L==='ms'?'Kecemerlangan Proses':'Process Excellence';
  n.onmouseenter=n.onfocus=on;n.onmouseleave=n.onblur=off;
  const go=()=>document.getElementById(n.dataset.go).scrollIntoView({behavior:'smooth'});
  n.onclick=go;n.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}};
});
/* init */
setLang('en');sigma();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
  const el=e.target;countTo(el,+el.dataset.count,el.dataset.count.includes('.'));io.unobserve(el)}}),{threshold:.6});
$$('[data-count]').forEach(el=>io.observe(el));
