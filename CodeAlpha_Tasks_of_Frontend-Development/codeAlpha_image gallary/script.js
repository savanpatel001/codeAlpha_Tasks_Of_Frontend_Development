// ── DOM REFERENCES ──
const gallery    = document.getElementById('gallery');
const lightbox   = document.getElementById('lightbox');
const lbImg      = document.getElementById('lbImg');
const lbTitle    = document.getElementById('lbTitle');
const lbDesc     = document.getElementById('lbDesc');
const lbCounter  = document.getElementById('lbCounter');
const lbThumbs   = document.getElementById('lbThumbs');
const noResults  = document.getElementById('noResults');
const statsText  = document.getElementById('statsText');

// ── STATE ──
let currentItems   = [];
let currentIndex   = 0;
let activeFilter   = 'all';
let currentCssFilter = 'filter-none';
let searchQuery    = '';
let touchStartX    = 0;

// ── HELPERS ──
function getVisibleItems() {
  return [...document.querySelectorAll('.gallery-item:not(.hidden)')];
}

// ── CATEGORY FILTER ──
document.getElementById('filterGroup').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.cat;
  applyFilters();
});

// ── SEARCH ──
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  applyFilters();
});

// ── APPLY FILTERS (category + search combined) ──
function applyFilters() {
  const items = document.querySelectorAll('.gallery-item');
  let visible = 0;

  items.forEach(item => {
    const cat   = item.dataset.cat;
    const title = item.dataset.title.toLowerCase();
    const desc  = item.dataset.desc.toLowerCase();

    const matchCat    = activeFilter === 'all' || cat === activeFilter;
    const matchSearch = !searchQuery
      || title.includes(searchQuery)
      || desc.includes(searchQuery)
      || cat.includes(searchQuery);

    const show = matchCat && matchSearch;
    item.classList.toggle('hidden', !show);

    if (show) {
      item.style.animationDelay = (visible * 0.04) + 's';
      visible++;
    }
  });

  noResults.classList.toggle('show', visible === 0);
  statsText.textContent = `Showing ${visible} image${visible !== 1 ? 's' : ''}`;
}

// ── CSS IMAGE FILTER ──
document.getElementById('cssFilter').addEventListener('change', e => {
  gallery.classList.remove(currentCssFilter);
  currentCssFilter = e.target.value;
  gallery.classList.add(currentCssFilter);
});

// ── VIEW TOGGLE (Grid / List) ──
document.getElementById('gridBtn').addEventListener('click', () => {
  gallery.classList.remove('grid-list');
  gallery.classList.add('grid-masonry');
  document.getElementById('gridBtn').classList.add('active');
  document.getElementById('listBtn').classList.remove('active');
});

document.getElementById('listBtn').addEventListener('click', () => {
  gallery.classList.remove('grid-masonry');
  gallery.classList.add('grid-list');
  document.getElementById('listBtn').classList.add('active');
  document.getElementById('gridBtn').classList.remove('active');
});

// ── LIKE BUTTONS & GALLERY CLICK ──
gallery.addEventListener('click', e => {
  // Like button
  const likeBtn = e.target.closest('.item-like');
  if (likeBtn) {
    e.stopPropagation();
    likeBtn.classList.toggle('liked');
    likeBtn.style.transform = 'scale(1.3)';
    setTimeout(() => { likeBtn.style.transform = ''; }, 200);
    return;
  }

  // Open lightbox on card click
  const item = e.target.closest('.gallery-item');
  if (item) openLightbox(item);
});

// ── LIGHTBOX — BUILD THUMBNAILS ──
function buildThumbs() {
  lbThumbs.innerHTML = '';
  currentItems.forEach((item, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === currentIndex ? ' active' : '');
    thumb.innerHTML = `<img src="${item.querySelector('img').src}" alt="" />`;
    thumb.addEventListener('click', () => {
      currentIndex = i;
      updateLightbox();
    });
    lbThumbs.appendChild(thumb);
  });
}

// ── LIGHTBOX — OPEN ──
function openLightbox(item) {
  currentItems = getVisibleItems();
  currentIndex = currentItems.indexOf(item);
  buildThumbs();
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── LIGHTBOX — UPDATE ──
function updateLightbox() {
  const item = currentItems[currentIndex];
  const img  = item.querySelector('img');

  // Swap to higher resolution for lightbox
  lbImg.src = img.src
    .replace('w=600', 'w=1200')
    .replace('w=900', 'w=1400');
  lbImg.alt = img.alt;

  lbTitle.textContent   = item.dataset.title;
  lbDesc.textContent    = item.dataset.desc;
  lbCounter.textContent = `${currentIndex + 1} / ${currentItems.length}`;

  // Highlight active thumbnail
  lbThumbs.querySelectorAll('.lb-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === currentIndex);
  });

  // Scroll active thumb into view
  const activeThumb = lbThumbs.querySelector('.lb-thumb.active');
  if (activeThumb) {
    activeThumb.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }
}

// ── LIGHTBOX — CLOSE ──
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 350);
}

// ── LIGHTBOX — NAVIGATION BUTTONS ──
document.getElementById('lbClose').addEventListener('click', closeLightbox);

document.getElementById('lbPrev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
  updateLightbox();
});

document.getElementById('lbNext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentItems.length;
  updateLightbox();
});

// Click outside image to close
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// ── KEYBOARD NAVIGATION ──
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateLightbox();
  } else if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateLightbox();
  }
});

// ── TOUCH SWIPE (mobile) ──
lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) {
      currentIndex = (currentIndex + 1) % currentItems.length;
    } else {
      currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    }
    updateLightbox();
  }
}, { passive: true });

// ── STAGGER INITIAL ANIMATION ──
document.querySelectorAll('.gallery-item').forEach((item, i) => {
  item.style.animationDelay = (i * 0.04) + 's';
});