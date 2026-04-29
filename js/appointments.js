// ============================================================
//  Al Mizan — appointments.js
//  Handles date selection, slot fetching, multi-step form,
//  and POST to Google Apps Script
// ============================================================

document.addEventListener('DOMContentLoaded', initAppointments);

let selectedDate = '';
let selectedTime = '';

function initAppointments() {
  const dateInput = document.getElementById('apptDate');

  // Set min date to today using LOCAL time — toISOString() returns UTC
  // which can be yesterday's date in timezones ahead of UTC (e.g. Egypt UTC+2/+3)
  const today = new Date();
  const localToday = today.getFullYear() + '-'
    + String(today.getMonth() + 1).padStart(2, '0') + '-'
    + String(today.getDate()).padStart(2, '0');
  dateInput.min = localToday;

  dateInput.addEventListener('change', onDateChange);

  // Step navigation
  document.getElementById('step1Next').addEventListener('click', goToStep2);
  document.getElementById('step2Next').addEventListener('click', goToStep3);
  document.getElementById('step2Back').addEventListener('click', () => goToStep(1));
  document.getElementById('step3Back').addEventListener('click', goToStep2Back);
  document.getElementById('submitAppt').addEventListener('click', submitAppointment);
}

// ── Date change → fetch slots ────────────────────────────────
async function onDateChange(e) {
  selectedDate = e.target.value;
  selectedTime = '';

  const slotsBlock = document.getElementById('slotsBlock');
  const noSlotsMsg = document.getElementById('noSlotsMsg');
  const step1Next  = document.getElementById('step1Next');

  slotsBlock.style.display = 'block';
  noSlotsMsg.style.display = 'none';
  step1Next.disabled = true;

  document.getElementById('slotsContainer').innerHTML = '<div class="spinner"></div>';

  // Block weekends (Friday = 5, Saturday = 6 in JS)
  const dayOfWeek = new Date(selectedDate + 'T00:00:00').getDay();
  if (dayOfWeek === 5 || dayOfWeek === 6) {
    document.getElementById('slotsContainer').innerHTML = '';
    noSlotsMsg.textContent = 'We are closed on Fridays and Saturdays. Please choose a weekday (Sun–Thu).';
    noSlotsMsg.style.display = 'block';
    slotsBlock.style.display = 'none';
    return;
  }

  try {
    const data = await apiGet({ action: 'getSlots', date: selectedDate });

    if (!data.success || !data.slots || data.slots.length === 0) {
      document.getElementById('slotsContainer').innerHTML = '';
      noSlotsMsg.textContent = 'No available slots for this date. Please select another day.';
      noSlotsMsg.style.display = 'block';
      slotsBlock.style.display = 'none';
      return;
    }

    renderSlots(data.slots);
  } catch (err) {
    document.getElementById('slotsContainer').innerHTML =
      '<div class="alert alert-error">Could not load slots. Please check your connection or try again.</div>';
  }
}

// ── Render time slot buttons ─────────────────────────────────
function renderSlots(slots) {
  const container = document.getElementById('slotsContainer');
  container.innerHTML = '<div class="slots-grid"></div>';
  const grid = container.querySelector('.slots-grid');

  slots.forEach(time => {
    const btn = document.createElement('button');
    btn.className = 'slot-btn';
    btn.textContent = formatTime(time);
    btn.dataset.time = time;
    btn.addEventListener('click', () => selectSlot(btn, time));
    grid.appendChild(btn);
  });
}

function selectSlot(btn, time) {
  document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedTime = time;
  document.getElementById('step1Next').disabled = false;
}

// ── Step navigation ──────────────────────────────────────────
function goToStep(n) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`stepPanel${i}`).style.display = i === n ? 'block' : 'none';
    const ind = document.getElementById(`step${i}Ind`);
    ind.classList.remove('active', 'completed');
    if (i === n)   ind.classList.add('active');
    if (i < n)     ind.classList.add('completed');
  }
}

function goToStep2() {
  if (!selectedDate || !selectedTime) return;
  goToStep(2);
}

function goToStep2Back() {
  goToStep(2);
}

function goToStep3() {
  const name    = document.getElementById('apptName').value.trim();
  const phone   = document.getElementById('apptPhone').value.trim();
  const email   = document.getElementById('apptEmail').value.trim();
  const service = document.getElementById('apptService').value;

  if (!name || !phone || !email || !service) {
    showAlert('#formAlert', 'Please fill in all required fields.', 'error');
    document.getElementById('formAlert').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  // Render review block
  const review = document.getElementById('reviewBlock');
  review.innerHTML = `
    <div class="review-row">
      <span class="review-label">Date</span>
      <span class="review-value">${formatDate(selectedDate)}</span>
    </div>
    <div class="review-row">
      <span class="review-label">Time</span>
      <span class="review-value">${formatTime(selectedTime)}</span>
    </div>
    <div class="review-row">
      <span class="review-label">Name</span>
      <span class="review-value">${escHtml(name)}</span>
    </div>
    <div class="review-row">
      <span class="review-label">Phone</span>
      <span class="review-value">${escHtml(phone)}</span>
    </div>
    <div class="review-row">
      <span class="review-label">Email</span>
      <span class="review-value">${escHtml(email)}</span>
    </div>
    <div class="review-row">
      <span class="review-label">Service</span>
      <span class="review-value">${escHtml(service)}</span>
    </div>
  `;

  goToStep(3);
}

// ── Submit ───────────────────────────────────────────────────
async function submitAppointment() {
  const btn = document.getElementById('submitAppt');
  btn.disabled = true;
  btn.textContent = 'Submitting…';

  const payload = {
    action:  'bookAppointment',
    name:    document.getElementById('apptName').value.trim(),
    phone:   document.getElementById('apptPhone').value.trim(),
    email:   document.getElementById('apptEmail').value.trim(),
    service: document.getElementById('apptService').value,
    date:    selectedDate,
    time:    selectedTime,
    notes:   document.getElementById('apptNotes').value.trim(),
  };

  try {
    const data = await apiPost(payload);

    if (data.success) {
      // Store info for thank-you page
      sessionStorage.setItem('ty_type',    'appointment');
      sessionStorage.setItem('ty_name',    payload.name);
      sessionStorage.setItem('ty_detail',  `${formatDate(selectedDate)} at ${formatTime(selectedTime)}`);
      sessionStorage.setItem('ty_service', payload.service);
      window.location.href = 'thank-you.html';
    } else {
      showAlert('#formAlert', data.message || 'Submission failed. Please try again.', 'error');
      btn.disabled = false;
      btn.textContent = '✓ Submit Request';
    }
  } catch (err) {
    showAlert('#formAlert', 'Network error. Please check your connection.', 'error');
    btn.disabled = false;
    btn.textContent = '✓ Submit Request';
  }
}

// ── Helper ───────────────────────────────────────────────────
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
