// ============================================================
//  Al Mizan — contact.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Populate contact details from CONFIG
  const ci = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  ci('ciPhone', CONFIG.FIRM.phone);
  ci('ciEmail', CONFIG.FIRM.email);
  ci('ciAddr',  CONFIG.FIRM.address);

  document.getElementById('ctSubmit')?.addEventListener('click', submitContact);
});

async function submitContact() {
  const name    = document.getElementById('ctName').value.trim();
  const phone   = document.getElementById('ctPhone').value.trim();
  const email   = document.getElementById('ctEmail').value.trim();
  const subject = document.getElementById('ctSubject').value.trim();
  const message = document.getElementById('ctMessage').value.trim();

  if (!name || !email || !subject || !message) {
    showAlert('#contactAlert', 'Please fill in all required fields.', 'error');
    return;
  }

  const btn = document.getElementById('ctSubmit');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const data = await apiPost({ action: 'submitContact', name, phone, email, subject, message });

    if (data.success) {
      showAlert('#contactAlert', '✅ Your message has been sent. We will respond within 1 business day.', 'success');
      ['ctName','ctPhone','ctEmail','ctSubject','ctMessage'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
    } else {
      showAlert('#contactAlert', data.message || 'Failed to send. Please try again.', 'error');
    }
  } catch {
    showAlert('#contactAlert', 'Network error. Please check your connection.', 'error');
  }

  btn.disabled = false;
  btn.textContent = 'Send Message';
}
