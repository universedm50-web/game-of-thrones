// ============================================================
// BÌNH MINH EQUIPMENT — MAIN JAVASCRIPT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- 1. HEADER SCROLL BEHAVIOUR ----
  const header = document.querySelector('.header');
  const topbar = document.querySelector('.topbar');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
        if (topbar) topbar.style.transform = 'translateY(-100%)';
        header.style.top = '0';
      } else {
        header.classList.remove('scrolled');
        if (topbar) topbar.style.transform = '';
        header.style.top = '';
      }
    }, { passive: true });
  }

  // ---- 2. HAMBURGER MENU ----
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (nav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity  = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // ---- 3. HERO SLIDER ----
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  if (slides.length) {
    let cur = 0, timer;
    const goto = (n) => {
      slides[cur].classList.remove('active');
      dots[cur]?.classList.remove('active');
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dots[cur]?.classList.add('active');
    };
    const next = () => goto(cur + 1);
    const start = () => { timer = setInterval(next, 5500); };
    const stop  = () => clearInterval(timer);

    document.querySelector('.slider-next')?.addEventListener('click', () => { stop(); next(); start(); });
    document.querySelector('.slider-prev')?.addEventListener('click', () => { stop(); goto(cur - 1); start(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { stop(); goto(i); start(); }));
    start();
  }

  // ---- 4. SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // ---- 5. COUNTER ANIMATION ----
  const counters = document.querySelectorAll('[data-count]');
  const cObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
      let start = 0; const dur = 1600, step = 16;
      const tick = () => {
        start += target / (dur / step);
        el.textContent = (start >= target ? target : Math.floor(start)) + suffix;
        if (start < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => cObserver.observe(el));

  // ---- 6. SEARCH BAR ----
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = document.getElementById('search-input')?.value.trim();
      if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}`;
    });
  }

  // ---- 7. PRODUCT FILTER (products.html) ----
  if (document.getElementById('product-grid')) {
    initProductFilter();
  }

  // ---- 8. PRODUCT DETAIL (product-detail.html) ----
  if (document.getElementById('detail-root')) {
    initProductDetail();
  }

  // ---- 9. NEWS PAGE (news.html) ----
  if (document.getElementById('news-root')) {
    initNewsPage();
  }

  // ---- 10. CONTACT FORM ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // ---- 11. LIGHTBOX ----
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.gallery-main')) {
        const img = e.target.closest('.gallery-main').querySelector('img');
        if (img) { lightbox.querySelector('img').src = img.src; lightbox.classList.add('open'); }
      }
    });
    lightbox.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
  }

  // ---- 12. MODAL ----
  const modalOverlay = document.getElementById('modal-overlay');
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => modalOverlay?.classList.add('open'));
  });
  document.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => modalOverlay?.classList.remove('open'));
  });
  modalOverlay?.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('open'); });

  const modalForm = document.getElementById('modal-form');
  if (modalForm) modalForm.addEventListener('submit', handleModalForm);

  // ---- 13. ACTIVE NAV LINK ----
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});

// ============================
// PRODUCT FILTER LOGIC
// ============================
function initProductFilter() {
  const grid = document.getElementById('product-grid');
  const countEl = document.getElementById('product-count');
  const params = new URLSearchParams(window.location.search);

  const categorySelect = document.getElementById('filter-category');
  const priceSelect    = document.getElementById('filter-price');

  // Pre-check from URL
  const urlBrand = params.get('brand');
  const urlQ     = params.get('q');
  if (urlBrand && categorySelect) {
    categorySelect.value = urlBrand;
  }

  function render() {
    const category = categorySelect ? categorySelect.value : '';
    const price    = priceSelect ? priceSelect.value : '';
    const q        = urlQ ? urlQ.toLowerCase() : '';

    const filtered = BM_DATA.products.filter(p => {
      if (category && p.brand !== category) return false;
      if (price && p.priceRange !== price) return false;
      if (q && !p.name.toLowerCase().includes(q)) return false;
      return true;
    });

    if (countEl) countEl.innerHTML = `Hiển thị <strong>${filtered.length}</strong> sản phẩm`;

    if (!filtered.length) {
      grid.innerHTML = `<div class="no-results"><i>🔍</i><p>Không tìm thấy sản phẩm phù hợp.</p></div>`;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <div class="product-card fade-in" onclick="window.location='product-detail.html?id=${p.id}'">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <span class="brand-badge">${p.brand.toUpperCase()}</span>
          <span class="status-badge ${p.status === 'new' ? 'status-new' : 'status-used'}">
            ${p.status === 'new' ? 'Mới 100%' : 'Đã qua sử dụng'}
          </span>
        </div>
        <div class="card-body">
          <h4>${p.name}</h4>
          <div class="specs">
            ${p.weight !== '—' ? `<span class="spec-tag">⚖ ${p.weight}</span>` : ''}
            ${p.power  !== '—' ? `<span class="spec-tag">⚡ ${p.power}</span>` : ''}
            ${p.bucket !== '—' ? `<span class="spec-tag">🪣 ${p.bucket}</span>` : ''}
          </div>
          <div class="price-row">
            <span class="price-label">Liên hệ báo giá</span>
            <button class="inquiry-btn" onclick="event.stopPropagation();document.getElementById('modal-overlay')?.classList.add('open')">Hỏi giá</button>
          </div>
        </div>
      </div>
    `).join('');

    // Animate new cards
    setTimeout(() => {
      grid.querySelectorAll('.fade-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 60);
      });
    }, 50);
  }

  categorySelect?.addEventListener('change', render);
  priceSelect?.addEventListener('change', render);

  document.getElementById('reset-filter')?.addEventListener('click', () => {
    if (categorySelect) categorySelect.value = '';
    if (priceSelect) priceSelect.value = '';
    render();
  });

  render();
}

// ============================
// PRODUCT DETAIL LOGIC
// ============================
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id     = +params.get('id') || 1;
  const p      = BM_DATA.products.find(x => x.id === id) || BM_DATA.products[0];

  document.getElementById('detail-name').textContent  = p.name;
  document.getElementById('detail-desc').textContent  = p.desc;
  document.getElementById('detail-brand').textContent = p.brand.toUpperCase();
  document.getElementById('detail-status').textContent= p.status === 'new' ? 'Mới 100%' : 'Đã qua sử dụng';
  document.getElementById('detail-status').className += ' ' + (p.status === 'new' ? 'status-new' : 'status-used');

  const mainImg = document.querySelector('.gallery-main img');
  if (mainImg) mainImg.src = p.image;

  // Specs table
  const tbody = document.getElementById('specs-tbody');
  if (tbody) {
    tbody.innerHTML = Object.entries(p.specs).map(([k, v]) => `
      <tr><td>${k}</td><td>${v}</td></tr>
    `).join('');
  }

  // Tags
  const tagsEl = document.getElementById('detail-tags');
  if (tagsEl) {
    tagsEl.innerHTML = p.tags.map(t => `<span class="meta-tag"><i class="fas fa-tag"></i>${t}</span>`).join('');
  }

  // Related products
  const related = BM_DATA.products.filter(x => x.brand === p.brand && x.id !== p.id).slice(0, 3);
  const relGrid = document.getElementById('related-grid');
  if (relGrid) {
    relGrid.innerHTML = related.map(r => `
      <div class="product-card fade-in" onclick="window.location='product-detail.html?id=${r.id}'">
        <div class="card-img-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy">
          <span class="brand-badge">${r.brand.toUpperCase()}</span>
        </div>
        <div class="card-body">
          <h4>${r.name}</h4>
          <div class="price-row">
            <span class="price-label">Liên hệ báo giá</span>
            <button class="inquiry-btn">Hỏi giá</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Page title
  document.title = `${p.name} | Bình Minh Equipment`;
}

// ============================
// NEWS PAGE LOGIC
// ============================
function initNewsPage() {
  // Render news articles
  const newsGrid = document.getElementById('news-list-grid');
  if (newsGrid) {
    newsGrid.innerHTML = BM_DATA.news.map(n => `
      <div class="news-card fade-in">
        <div class="card-img">
          <img src="${n.image}" alt="${n.title}" loading="lazy">
          <span class="card-cat">${n.cat}</span>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span><i class="far fa-calendar"></i> ${n.date}</span>
            <span><i class="far fa-user"></i> ${n.author}</span>
          </div>
          <h3>${n.title}</h3>
          <p>${n.excerpt}</p>
          <a href="#" class="read-more">Đọc tiếp <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    `).join('');
  }

  // Render jobs
  const jobsGrid = document.getElementById('jobs-grid');
  if (jobsGrid) {
    jobsGrid.innerHTML = BM_DATA.jobs.map(j => `
      <div class="recruit-card fade-in">
        <h3 class="job-title">${j.title}</h3>
        <div class="job-meta">
          <span class="job-tag"><i class="fas fa-map-marker-alt"></i> ${j.location}</span>
          <span class="job-tag"><i class="far fa-clock"></i> ${j.type}</span>
          <span class="job-tag"><i class="fas fa-money-bill-wave"></i> ${j.salary}</span>
        </div>
        <p>${j.desc}</p>
        <p class="deadline"><i class="far fa-calendar-times"></i> Hạn nộp: ${j.deadline}</p>
        <a href="contact.html" class="btn btn-primary btn-sm">Ứng Tuyển Ngay</a>
      </div>
    `).join('');
  }

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });
}

// ============================
// FORM HANDLERS
// ============================
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Đang gửi...';
  setTimeout(() => {
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 1200);
}

function handleModalForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Đang gửi...';
  setTimeout(() => {
    document.getElementById('modal-overlay').classList.remove('open');
    btn.disabled = false; btn.textContent = 'Gửi Yêu Cầu';
    form.reset();
    // Show toast
    showToast('✅ Yêu cầu đã được gửi! Chúng tôi sẽ liên hệ bạn sớm nhất.');
  }, 1200);
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-notify';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)',
    background: '#28A745', color: '#fff', padding: '14px 28px', borderRadius: '12px',
    fontWeight: '600', fontSize: '.95rem', zIndex: '99999', fontFamily: "'Montserrat', sans-serif",
    boxShadow: '0 8px 32px rgba(0,0,0,.2)', transition: 'all .4s ease', opacity: '0'
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.style.opacity = '1', 50);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 500); }, 3500);
}
