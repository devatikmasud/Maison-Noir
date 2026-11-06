(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],B=document.body;
// header: solid on scroll, mobile menu
const h=$('.hd'),t=$('.menu-btn'),sc=()=>h.classList.toggle('on',scrollY>10);sc();addEventListener('scroll',sc,{passive:true});
t.onclick=()=>{const o=B.classList.toggle('nav-open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close menu':'Open menu')};
addEventListener('keydown',e=>{if(e.key==='Escape'&&B.classList.contains('nav-open'))t.click()});
// work filter
$$('[data-filter]').forEach(b=>b.onclick=()=>{$$('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b));$$('[data-cat]').forEach(c=>c.hidden=b.dataset.filter!=='All'&&c.dataset.cat!==b.dataset.filter)});
// testimonials
const q=$$('.q');if(q.length){let i=0;const go=d=>{i=(i+d+q.length)%q.length;q.forEach((e,k)=>e.hidden=k!==i);$('.q-n').textContent=(i+1)+' / '+q.length};$('.q-prev').onclick=()=>go(-1);$('.q-next').onclick=()=>go(1)}
// manifesto: words light up as you scroll
const m=$('.manifesto');if(m&&!matchMedia('(prefers-reduced-motion:reduce)').matches){m.innerHTML=m.textContent.trim().split(/\s+/).map(w=>'<span>'+w+'</span>').join(' ');const s=$$('span',m),up=()=>{const r=m.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.3)));s.forEach((e,k)=>e.style.opacity=k/s.length<p?1:.22)};up();addEventListener('scroll',up,{passive:true})}
// "View" cursor on project cards
const c=$('.cur');if(c&&matchMedia('(hover:hover)').matches)addEventListener('mousemove',e=>{c.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)';c.classList.toggle('show',!!e.target.closest('.card'))});
// contact form (front-end only; connect to Formspree/Netlify/PHP — see HANDOVER.md)
const f=$('#enquiry');if(f)f.onsubmit=e=>{e.preventDefault();f.hidden=true;const o=$('.ok');o.hidden=false;$('.who',o).textContent=f.elements.fullname.value.split(' ')[0]||'there';o.focus()};
// stat counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,to=+el.dataset.to,sx=el.dataset.sx||'';if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;let st;const tick=n=>{st=st||n;const p=Math.min(1,(n-st)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+sx;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}));$$('[data-to]').forEach(e=>io.observe(e));
// process tabs
$$('[role=tab]').forEach(b=>b.onclick=()=>{$$('[role=tab]').forEach(x=>x.setAttribute('aria-selected',x===b));$$('[role=tabpanel]').forEach(p=>p.hidden=p.id!==b.getAttribute('aria-controls'))});
// team carousel
const tc=$('.tc');if(tc){$('.tc-prev').onclick=()=>tc.scrollBy({left:-340,behavior:'smooth'});$('.tc-next').onclick=()=>tc.scrollBy({left:340,behavior:'smooth'})}
})();
