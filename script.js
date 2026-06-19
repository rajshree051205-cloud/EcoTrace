// ── DATA ──
const countryData = {
  india: {
    flag:'🇮🇳', name:'India',
    issues:[
      {icon:'🌫️',title:'Air Pollution',desc:'India has 9 of the world\'s 10 most polluted cities. PM2.5 levels are dangerously high in northern states.',sev:'sev-high'},
      {icon:'🌊',title:'Water Scarcity',desc:'Over 600 million people face severe water stress. Groundwater depletion is accelerating rapidly.',sev:'sev-high'},
      {icon:'🌳',title:'Deforestation',desc:'India loses thousands of hectares of forest annually to urbanization and agricultural expansion.',sev:'sev-med'},
      {icon:'🌡️',title:'Extreme Heat',desc:'Temperature records are being broken every year. Heatwaves now last longer and are more intense.',sev:'sev-high'},
      {icon:'🗑️',title:'Plastic Pollution',desc:'India generates 9.4 million tonnes of plastic waste annually, with rivers carrying much of it to oceans.',sev:'sev-med'},
      {icon:'🐯',title:'Biodiversity Loss',desc:'Habitat destruction threatens tigers, elephants, and thousands of endemic species across the subcontinent.',sev:'sev-med'}
    ]
  },
  brazil: {
    flag:'🇧🇷', name:'Brazil',
    issues:[
      {icon:'🌳',title:'Amazon Deforestation',desc:'The Amazon loses millions of acres annually. This affects rainfall patterns globally and threatens millions of species.',sev:'sev-high'},
      {icon:'🔥',title:'Wildfires',desc:'Illegal burning and climate change combine to produce devastating wildfire seasons in the Amazon and Cerrado.',sev:'sev-high'},
      {icon:'💧',title:'River Pollution',desc:'Industrial waste and mining contaminate major rivers, threatening aquatic ecosystems and drinking water.',sev:'sev-med'},
      {icon:'🦜',title:'Species Extinction',desc:'Brazil holds 20% of the world\'s biodiversity — now under severe threat from habitat loss.',sev:'sev-high'}
    ]
  },
  usa: {
    flag:'🇺🇸', name:'United States',
    issues:[
      {icon:'🌡️',title:'Climate Change Emissions',desc:'The US is the world\'s second largest CO₂ emitter, with fossil fuels dominating the energy sector.',sev:'sev-high'},
      {icon:'🌪️',title:'Extreme Weather',desc:'Hurricanes, tornadoes and wildfires are intensifying due to rising temperatures across the country.',sev:'sev-high'},
      {icon:'🌊',title:'Coastal Flooding',desc:'Sea levels are rising along both coasts, threatening millions of homes and critical infrastructure.',sev:'sev-med'},
      {icon:'🏭',title:'Industrial Pollution',desc:'Chemical spills and industrial runoff continue to contaminate soil and waterways in many states.',sev:'sev-med'}
    ]
  },
  china: {
    flag:'🇨🇳', name:'China',
    issues:[
      {icon:'🌫️',title:'Air Pollution',desc:'Industrial smog affects hundreds of millions. PM2.5 levels frequently exceed safe limits in major cities.',sev:'sev-high'},
      {icon:'🏭',title:'Carbon Emissions',desc:'China is the world\'s largest CO₂ emitter, though renewable energy investments are growing rapidly.',sev:'sev-high'},
      {icon:'💧',title:'Water Contamination',desc:'Industrial waste has polluted rivers and groundwater, affecting drinking water for millions.',sev:'sev-med'},
      {icon:'🌳',title:'Soil Degradation',desc:'Overuse of farmland and chemical fertilizers is causing desertification in northern regions.',sev:'sev-med'}
    ]
  },
  australia: {
    flag:'🇦🇺', name:'Australia',
    issues:[
      {icon:'🔥',title:'Bushfires',desc:'Catastrophic bushfire seasons are becoming the new normal, destroying ecosystems and forcing mass evacuations.',sev:'sev-high'},
      {icon:'🐠',title:'Coral Reef Bleaching',desc:'The Great Barrier Reef faces repeated bleaching events due to rising ocean temperatures.',sev:'sev-high'},
      {icon:'🌡️',title:'Extreme Heat',desc:'Record-breaking temperatures are pushing ecosystems and communities to their limits.',sev:'sev-high'},
      {icon:'🦘',title:'Species Extinction',desc:'Australia leads the world in mammal extinctions with unique species under severe pressure.',sev:'sev-med'}
    ]
  },
  nigeria: {
    flag:'🇳🇬', name:'Nigeria',
    issues:[
      {icon:'🌳',title:'Deforestation',desc:'Nigeria has one of the world\'s highest deforestation rates, losing forests to agriculture and fuel wood.',sev:'sev-high'},
      {icon:'🛢️',title:'Oil Pollution',desc:'Decades of oil spills in the Niger Delta have devastated local ecosystems and communities.',sev:'sev-high'},
      {icon:'🏜️',title:'Desertification',desc:'The Sahara is advancing southward, swallowing farmland and displacing millions of people.',sev:'sev-med'},
      {icon:'💧',title:'Water Crisis',desc:'Millions lack access to clean water due to pollution, drought and poor infrastructure.',sev:'sev-high'}
    ]
  },
  germany: {
    flag:'🇩🇪', name:'Germany',
    issues:[
      {icon:'🌊',title:'Flooding',desc:'Severe floods have devastated entire regions. Climate change is making extreme rainfall more frequent.',sev:'sev-high'},
      {icon:'🌡️',title:'Rising Temperatures',desc:'Germany is warming faster than the global average, affecting agriculture and ecosystems.',sev:'sev-med'},
      {icon:'🏭',title:'Industrial Emissions',desc:'Despite progress, Germany still relies on coal in some regions, contributing to CO₂ targets being missed.',sev:'sev-med'},
      {icon:'🌿',title:'Biodiversity Loss',desc:'Intensive agriculture has reduced insect populations dramatically, threatening pollination and food chains.',sev:'sev-med'}
    ]
  },
  japan: {
    flag:'🇯🇵', name:'Japan',
    issues:[
      {icon:'🌊',title:'Rising Sea Levels',desc:'As an island nation, Japan is highly vulnerable to rising seas threatening coastal communities.',sev:'sev-high'},
      {icon:'🌪️',title:'Typhoons',desc:'Typhoons are becoming more intense and frequent, causing devastating floods and landslides.',sev:'sev-high'},
      {icon:'🗑️',title:'Ocean Plastic',desc:'Pacific currents bring plastic pollution to Japanese coasts, threatening marine ecosystems.',sev:'sev-med'},
      {icon:'🌡️',title:'Urban Heat Islands',desc:'Dense cities like Tokyo experience extreme heat amplified by concrete and reduced green spaces.',sev:'sev-med'}
    ]
  }
};

const allActions = [
  {emoji:'🌳',label:'Plant a Tree',desc:'One tree absorbs 22kg CO₂/year'},
  {emoji:'♻️',label:'Reduce Plastic',desc:'Refuse single-use plastic today'},
  {emoji:'💧',label:'Save Water',desc:'Fix leaks, take shorter showers'},
  {emoji:'🚲',label:'Cycle Instead',desc:'Skip one car trip this week'},
  {emoji:'🌱',label:'Go Vegetarian',desc:'One meal saves 2.5kg CO₂'},
  {emoji:'💡',label:'Save Energy',desc:'Switch off unused appliances'},
  {emoji:'🛍️',label:'Buy Local',desc:'Support local sustainable farms'},
  {emoji:'📢',label:'Spread Awareness',desc:'Share climate facts online'}
];

let selectedAction = null;
let userActions = JSON.parse(localStorage.getItem('ecoActions') || '[]');
let currentUser = '';

// ── THEME ──
function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById('themeBtn');
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    btn.textContent = '🌙 Dark';
  } else {
    html.dataset.theme = 'dark';
    btn.textContent = '☀️ Light';
  }
}

// ── PARTICLES ──
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*8}s;
    `;
    container.appendChild(p);
  }
}

// ── EARTH CANVAS ──
function drawEarth() {
  const canvas = document.getElementById('earthCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 600; canvas.height = 600;
  let angle = 0;
  function frame() {
    ctx.clearRect(0,0,600,600);
    const cx=300,cy=300,r=220;
    ctx.save();
    ctx.translate(cx,cy);
    ctx.rotate(angle);
    // Outer glow ring
    for(let i=3;i>0;i--) {
      ctx.beginPath();
      ctx.arc(0,0,r+i*10,0,Math.PI*2);
      ctx.strokeStyle=`rgba(0,255,135,${0.03*i})`;
      ctx.lineWidth=i*6;
      ctx.stroke();
    }
    // Grid lines
    ctx.strokeStyle='rgba(0,255,135,0.12)';
    ctx.lineWidth=0.8;
    for(let lat=-80;lat<=80;lat+=20) {
      const y=r*Math.sin(lat*Math.PI/180);
      const rr=Math.sqrt(r*r-y*y);
      ctx.beginPath(); ctx.arc(0,y/1,rr,0,Math.PI*2); ctx.stroke();
    }
    for(let lon=0;lon<360;lon+=20) {
      ctx.beginPath();
      ctx.ellipse(0,0,r*Math.abs(Math.cos(lon*Math.PI/180)),r,lon*Math.PI/180,0,Math.PI*2);
      ctx.stroke();
    }
    // Continents (simplified blobs)
    ctx.fillStyle='rgba(0,180,100,0.25)';
    const blobs=[[40,-60,80,50],[-100,10,90,60],[-20,0,60,70],[80,-20,55,45],[120,30,45,35],[135,-25,40,30]];
    blobs.forEach(([x,y,w,h])=>{
      ctx.beginPath();
      ctx.ellipse(x,y,w/2,h/2,0,0,Math.PI*2);
      ctx.fill();
    });
    ctx.restore();
    angle+=0.002;
    requestAnimationFrame(frame);
  }
  frame();
}

// ── SEARCH ──
const countryInput = document.getElementById("countryInput");

countryInput.addEventListener("input", async () => {
  const text = countryInput.value;

  if (text.length < 2) return;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${text}?fields=name`
  );

  const data = await res.json();

  const countries = data.map(c => c.name.common);

  console.log(countries);
});
function searchCountry() {
  const input = document.getElementById('countryInput').value.trim().toLowerCase();
  const data = countryData[input] || getGenericData(input);
  showResult(data, input);
}

document.getElementById('countryInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchCountry();
});

function getGenericData(name) {
  const display = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    flag:'🌍', name: display,
    issues:[
      {icon:'🌡️',title:'Rising Temperatures',desc:`${display} is experiencing temperature increases above the global average, affecting ecosystems and communities.`,sev:'sev-high'},
      {icon:'🌳',title:'Forest Degradation',desc:'Deforestation and land use changes are reducing carbon sinks and destroying vital habitats.',sev:'sev-med'},
      {icon:'💧',title:'Water Stress',desc:'Changing rainfall patterns and overuse of groundwater are threatening freshwater availability.',sev:'sev-med'},
      {icon:'🗑️',title:'Plastic Pollution',desc:'Plastic waste is contaminating soil, rivers and coastal areas at an alarming rate.',sev:'sev-med'},
      {icon:'🌫️',title:'Air Quality',desc:'Urban air pollution from vehicles and industry poses serious public health risks.',sev:'sev-med'},
      {icon:'🌊',title:'Coastal Erosion',desc:'Changing sea levels and weather patterns are eroding coastlines and threatening communities.',sev:'sev-low'}
    ]
  };
}

function showResult(data, key) {
  document.getElementById('countryFlag').textContent = data.flag;
  document.getElementById('countryNameDisplay').textContent = data.name;
  const grid = document.getElementById('issuesGrid');
  grid.innerHTML = data.issues.map((issue, i) => `
    <div class="issue-card" style="animation-delay:${i*0.08}s">
      <div class="issue-icon">${issue.icon}</div>
      <div class="issue-title">${issue.title}</div>
      <div class="issue-desc">${issue.desc}</div>
      <span class="severity ${issue.sev}">${issue.sev==='sev-high'?'⚠️ High Priority':issue.sev==='sev-med'?'⚡ Medium':'✅ Monitored'}</span>
    </div>
  `).join('');
  renderActions();
  const section = document.getElementById('resultSection');
  section.classList.add('visible');
  setTimeout(()=>section.scrollIntoView({behavior:'smooth'}), 100);
}

function renderActions() {
  const grid = document.getElementById('actionsGrid');
  grid.innerHTML = allActions.map((a,i) => `
    <div class="action-btn" onclick="selectAction(${i},this)">
      <div class="action-emoji">${a.emoji}</div>
      <div class="action-label">${a.label}</div>
      <div class="action-desc">${a.desc}</div>
    </div>
  `).join('');
}

function selectAction(i, el) {
  document.querySelectorAll('.action-btn').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  selectedAction = allActions[i];
}

function handleUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const preview = document.getElementById('uploadPreview');
  const img = document.getElementById('previewImg');
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = ev => { img.src = ev.target.result; preview.style.display='block'; };
    reader.readAsDataURL(file);
  } else {
    preview.style.display='block';
    img.src=''; img.alt='Video uploaded ✅';
    img.style.padding='1rem';
  }
}

function submitAction() {
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  if (!name || !email) { alert('Please enter your name and email!'); return; }
  if (!selectedAction) { alert('Please select an action you took!'); return; }
  currentUser = name;
  const action = {
    name, email,
    action: selectedAction.label,
    emoji: selectedAction.emoji,
    date: new Date().toISOString(),
    country: document.getElementById('countryNameDisplay').textContent
  };
  userActions.push(action);
  localStorage.setItem('ecoActions', JSON.stringify(userActions));
  showModal(name, selectedAction);
}

function showModal(name, action) {
  document.getElementById('modalText').textContent =
    `Amazing work, ${name}! Your "${action.label}" action has been recorded. A heartfelt appreciation email is on its way to you! Together we are healing the planet 🌍`;
  document.getElementById('modal').classList.add('open');
  spawnConfetti();
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  showDashboard();
}

function spawnConfetti() {
  const modal = document.getElementById('modalBox');
  const colors = ['#00ff87','#00c96b','#87ceeb','#ffd700','#ff6b6b','#c2855a'];
  for (let i=0;i<25;i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.cssText = `
      left:${Math.random()*100}%;
      top:0;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-delay:${Math.random()*0.5}s;
      transform:rotate(${Math.random()*360}deg);
    `;
    modal.appendChild(c);
    setTimeout(()=>c.remove(), 2500);
  }
}

function showDashboard() {
  const total = userActions.length;
  const now = new Date();
  const weekAgo = new Date(now - 7*24*60*60*1000);
  const monthAgo = new Date(now - 30*24*60*60*1000);
  const week = userActions.filter(a=>new Date(a.date)>weekAgo).length;
  const month = userActions.filter(a=>new Date(a.date)>monthAgo).length;
  document.getElementById('totalActions').textContent = total;
  document.getElementById('weekActions').textContent = week;
  document.getElementById('monthActions').textContent = month;
  document.getElementById('dashGreeting').textContent =
    `Welcome back, ${currentUser}! Here's your climate impact so far.`;
  document.getElementById('shareUsername').textContent = currentUser + ' 🌱';
  document.getElementById('shareImpact').textContent =
    `I've taken ${total} eco-action${total!==1?'s':''} this month including ${selectedAction?.label||'climate action'} — join me on EcoTrace!`;
  renderActionsList('weekly');
  const dash = document.getElementById('dashSection');
  dash.classList.add('visible');
  setTimeout(()=>dash.scrollIntoView({behavior:'smooth'}), 100);
}

function renderActionsList(period) {
  const now = new Date();
  const cutoff = period==='weekly'?new Date(now-7*24*60*60*1000):period==='monthly'?new Date(now-30*24*60*60*1000):new Date(0);
  const filtered = userActions.filter(a=>new Date(a.date)>cutoff);
  const list = document.getElementById('actionsList');
  if (!filtered.length) {
    list.innerHTML = `<p style="color:var(--muted);text-align:center;padding:2rem;">No actions in this period yet. Start contributing above!</p>`;
    return;
  }
  list.innerHTML = filtered.reverse().map(a=>`
    <div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:0.7rem;">
      <span style="font-size:1.8rem;">${a.emoji}</span>
      <div style="flex:1;">
        <div style="font-weight:600;font-size:0.95rem;">${a.action}</div>
        <div style="font-size:0.78rem;color:var(--muted);">${a.country} · ${new Date(a.date).toLocaleDateString()}</div>
      </div>
      <span style="font-size:0.75rem;color:var(--g1);font-weight:700;background:rgba(0,255,135,0.1);padding:0.25rem 0.7rem;border-radius:50px;">✅ Done</span>
    </div>
  `).join('');
}

function switchTab(period, el) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderActionsList(period);
}

function share(platform) {
  const text = encodeURIComponent(document.getElementById('shareImpact').textContent + ' 🌿 #EcoTrace #ClimateAction');
  const urls = {
    twitter: `https://twitter.com/intent/tweet?text=${text}`,
    whatsapp: `https://wa.me/?text=${text}`,
    instagram: `https://www.instagram.com/`
  };
  window.open(urls[platform], '_blank');
}

function copyCard() {
  const text = document.getElementById('shareImpact').textContent + ' 🌿 #EcoTrace #ClimateAction';
  navigator.clipboard.writeText(text).then(()=>alert('Copied to clipboard! ✅'));
}

// ── INIT ──
createParticles();
drawEarth();S