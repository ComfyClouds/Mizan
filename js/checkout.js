// ============================================================
//  Al Mizan — checkout.js
//  Handles course checkout AND appointment final review page
// ============================================================

document.addEventListener('DOMContentLoaded', initCheckout);

function initCheckout() {
  const page = location.pathname.split('/').pop();

  if (page === 'checkout-course.html') {
    initCourseCheckout();
  } else if (page === 'checkout-appointment.html') {
    initApptReview();
  }
}

// ════════════════════════════════════════════════════════════
//  COURSE CHECKOUT
// ════════════════════════════════════════════════════════════
function initCourseCheckout() {
  const raw = sessionStorage.getItem('checkout_course');

  if (!raw) {
    document.getElementById('noCourseAlert').style.display = 'block';
    return;
  }

  let course;
  try { course = JSON.parse(raw); }
  catch { document.getElementById('noCourseAlert').style.display = 'block'; return; }

  document.getElementById('checkoutWrap').style.display = 'grid';

  // Populate payment info
  document.getElementById('piBank').textContent   = CONFIG.PAYMENT.bankName;
  document.getElementById('piName').textContent   = CONFIG.PAYMENT.accountName;
  document.getElementById('piAccNum').textContent = CONFIG.PAYMENT.accountNum;
  document.getElementById('piIban').textContent   = CONFIG.PAYMENT.iban;

  // Populate order summary
  const summary = document.getElementById('courseSummary');
  summary.innerHTML = `
    ${course.image
      ? `<img src="${esc(course.image)}" alt="${esc(course.title)}" class="summary-img" onerror="this.style.display='none';">`
      : `<div class="summary-img-placeholder">📚</div>`}
    <div class="summary-title">${esc(course.title)}</div>
    <div class="summary-cat">${esc(course.category || '')} • ${esc(course.level || '')}</div>
    ${course.duration ? `<div class="summary-row"><span>Duration</span><strong>${esc(course.duration)}</strong></div>` : ''}
    <div class="summary-total">
      <span>Total</span>
      <strong>${formatCurrency(course.price)}</strong>
    </div>
  `;

  document.getElementById('submitCourse').addEventListener('click', () => submitCourseOrder(course));
}

async function submitCourseOrder(course) {
  const name  = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const email = document.getElementById('coEmail').value.trim();
  const notes = document.getElementById('coNotes').value.trim();

  if (!name || !phone || !email) {
    showAlert('#checkoutAlert', 'Please fill in all required fields.', 'error');
    return;
  }

  const btn = document.getElementById('submitCourse');
  btn.disabled = true;
  btn.textContent = 'Submitting…';

  try {
    const data = await apiPost({
      action:      'buyCourse',
      name, phone, email, notes,
      courseId:    course.id,
      courseTitle: course.title,
      amount:      course.price,
    });

    if (data.success) {
      sessionStorage.setItem('ty_type',   'course');
      sessionStorage.setItem('ty_name',   name);
      sessionStorage.setItem('ty_detail', course.title);
      sessionStorage.removeItem('checkout_course');
      window.location.href = 'thank-you.html';
    } else {
      showAlert('#checkoutAlert', data.message || 'Submission failed. Please try again.', 'error');
      btn.disabled = false;
      btn.textContent = '✓ Confirm Enrollment';
    }
  } catch {
    showAlert('#checkoutAlert', 'Network error. Please check your connection.', 'error');
    btn.disabled = false;
    btn.textContent = '✓ Confirm Enrollment';
  }
}

// ════════════════════════════════════════════════════════════
//  APPOINTMENT REVIEW (checkout-appointment.html)
//  This page is optional — the main flow is handled inline in
//  appointments.html (Step 3). This standalone page can be used
//  if you redirect from appointments.html instead.
// ════════════════════════════════════════════════════════════
function initApptReview() {
  const raw = sessionStorage.getItem('pending_appointment');

  if (!raw) {
    document.getElementById('noApptAlert').style.display = 'block';
    return;
  }

  let appt;
  try { appt = JSON.parse(raw); }
  catch { document.getElementById('noApptAlert').style.display = 'block'; return; }

  document.getElementById('apptReviewWrap').style.display = 'block';

  const rows = document.getElementById('apptReviewRows');
  rows.innerHTML = `
    <div class="review-row"><span class="review-label">Date</span><span class="review-value">${formatDate(appt.date)}</span></div>
    <div class="review-row"><span class="review-label">Time</span><span class="review-value">${formatTime(appt.time)}</span></div>
    <div class="review-row"><span class="review-label">Name</span><span class="review-value">${esc(appt.name)}</span></div>
    <div class="review-row"><span class="review-label">Phone</span><span class="review-value">${esc(appt.phone)}</span></div>
    <div class="review-row"><span class="review-label">Email</span><span class="review-value">${esc(appt.email)}</span></div>
    <div class="review-row"><span class="review-label">Service</span><span class="review-value">${esc(appt.service)}</span></div>
  `;

  document.getElementById('submitApptFinal').addEventListener('click', () => submitApptFinal(appt));
}

async function submitApptFinal(appt) {
  const btn = document.getElementById('submitApptFinal');
  btn.disabled = true;
  btn.textContent = 'Submitting…';

  try {
    const data = await apiPost({ action: 'bookAppointment', ...appt });

    if (data.success) {
      sessionStorage.setItem('ty_type',    'appointment');
      sessionStorage.setItem('ty_name',    appt.name);
      sessionStorage.setItem('ty_detail',  `${formatDate(appt.date)} at ${formatTime(appt.time)}`);
      sessionStorage.setItem('ty_service', appt.service);
      sessionStorage.removeItem('pending_appointment');
      window.location.href = 'thank-you.html';
    } else {
      showAlert('#checkoutAlert', data.message || 'Submission failed.', 'error');
      btn.disabled = false;
      btn.textContent = '✓ Submit Appointment Request';
    }
  } catch {
    showAlert('#checkoutAlert', 'Network error.', 'error');
    btn.disabled = false;
    btn.textContent = '✓ Submit Appointment Request';
  }
}

// ── Helper ───────────────────────────────────────────────────
function esc(s) {
  if (s == null) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
