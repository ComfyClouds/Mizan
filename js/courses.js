// ============================================================
//  Al Mizan — courses.js
//  Fetches courses from Google Sheets and renders the grid
// ============================================================

document.addEventListener('DOMContentLoaded', loadCourses);

let allCourses = [];

async function loadCourses() {
  const grid = document.getElementById('coursesGrid');

  try {
    const data = await apiGet({ action: 'getCourses' });

    if (!data.success || !data.courses || data.courses.length === 0) {
      renderEmpty(grid, 'No courses available at the moment. Check back soon.');
      return;
    }

    allCourses = data.courses;
    buildFilterBar(allCourses);
    renderCourses(allCourses, grid);

  } catch (err) {
    renderEmpty(grid, 'Could not load courses. Please check your connection and try again.');
  }
}

// ── Filter Bar ───────────────────────────────────────────────
function buildFilterBar(courses) {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  const categories = ['all', ...new Set(courses.map(c => c.category).filter(Boolean))];

  bar.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'all' ? ' active' : '');
    btn.dataset.cat = cat;
    btn.textContent = cat === 'all' ? 'All Courses' : cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtered = cat === 'all' ? allCourses : allCourses.filter(c => c.category === cat);
      renderCourses(filtered, document.getElementById('coursesGrid'));
    });
    bar.appendChild(btn);
  });

  bar.style.display = categories.length > 2 ? 'flex' : 'none';
}

// ── Render Courses ────────────────────────────────────────────
function renderCourses(courses, grid) {
  grid.innerHTML = '';

  if (courses.length === 0) {
    renderEmpty(grid, 'No courses found in this category.');
    return;
  }

  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';

    const imgHtml = course.image
      ? `<img src="${escHtml(course.image)}" alt="${escHtml(course.title)}" class="course-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="course-img-placeholder" style="display:none;">📚</div>`
      : `<div class="course-img-placeholder">📚</div>`;

    card.innerHTML = `
      ${imgHtml}
      <div class="course-body">
        <div class="course-meta">
          <span class="course-cat">${escHtml(course.category || 'Law')}</span>
          <span class="course-level">${escHtml(course.level || 'All Levels')}</span>
        </div>
        <h3 class="course-title">${escHtml(course.title)}</h3>
        <p class="course-desc">${escHtml(course.description || '')}</p>
        <div class="course-footer">
          <div>
            <div class="course-price">${formatCurrency(course.price)}</div>
            ${course.duration ? `<div class="course-duration">⏱ ${escHtml(course.duration)}</div>` : ''}
          </div>
          <button class="course-enroll-btn" onclick="enrollCourse(${JSON.stringify(course).replace(/"/g, '&quot;')})">
            Enroll Now
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── Enroll → go to checkout ───────────────────────────────────
function enrollCourse(course) {
  sessionStorage.setItem('checkout_course', JSON.stringify(course));
  window.location.href = 'checkout-course.html';
}

// ── Empty State ───────────────────────────────────────────────
function renderEmpty(grid, msg) {
  grid.innerHTML = `
    <div class="courses-empty">
      <div class="empty-icon">📋</div>
      <p>${msg}</p>
    </div>
  `;
}

function escHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
