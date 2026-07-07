/* ==========================================================================
   LinguaVerse — admin-settings.js
   Powers the Settings page. Assumes admin.js has run.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Tabs ── */
  const tabs   = document.querySelectorAll('[data-stg-tab]');
  const panels = document.querySelectorAll('.stg-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(`stg-${tab.dataset.stgTab}`);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Color picker sync ── */
  function syncColor(colorInputId, hexInputId) {
    const colorPicker = document.getElementById(colorInputId);
    const hexInput    = document.getElementById(hexInputId);
    if (!colorPicker || !hexInput) return;

    colorPicker.addEventListener('input', () => { hexInput.value = colorPicker.value; });
    hexInput.addEventListener('input', () => {
      if (/^#[0-9a-fA-F]{6}$/.test(hexInput.value)) colorPicker.value = hexInput.value;
    });
  }
  syncColor('stgPrimaryColor',   'stgPrimaryColorHex');
  syncColor('stgSecondaryColor', 'stgSecondaryColorHex');

  /* ── Colour swatches ── */
  const swatches = document.querySelectorAll('.stg-swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      const color = swatch.dataset.color;
      const pc = document.getElementById('stgPrimaryColor');
      const ph = document.getElementById('stgPrimaryColorHex');
      if (pc) pc.value = color;
      if (ph) ph.value = color;
      showToast(`Theme colour set to ${color}. Save to apply.`, 'success');
    });
  });

  /* ── Upload area: show filename ── */
  document.querySelectorAll('.stg-upload-area input[type=file]').forEach(input => {
    input.addEventListener('change', () => {
      if (!input.files.length) return;
      const h5 = input.closest('.stg-upload-area').querySelector('h5');
      if (h5) h5.textContent = input.files[0].name;
    });
  });

  /* ── Password strength ── */
  const newPwdInput   = document.getElementById('stgNewPwd');
  const strengthSegs  = [
    document.getElementById('seg1'),
    document.getElementById('seg2'),
    document.getElementById('seg3'),
    document.getElementById('seg4'),
  ];
  const strengthLabel = document.getElementById('stgStrengthLabel');

  if (newPwdInput) {
    newPwdInput.addEventListener('input', () => {
      const pwd = newPwdInput.value;
      let score = 0;
      if (pwd.length >= 8)          score++;
      if (/[A-Z]/.test(pwd))        score++;
      if (/[0-9]/.test(pwd))        score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;

      const colors  = ['#ef4444','#f59e0b','#14b8a6','#10b981'];
      const labels  = ['Weak','Fair','Good','Strong'];
      strengthSegs.forEach((seg, i) => {
        seg.style.background = i < score ? colors[score - 1] : 'var(--border-color)';
      });
      if (strengthLabel) {
        strengthLabel.textContent = pwd.length ? `Strength: ${labels[score - 1] || 'Weak'}` : 'Password strength';
      }
    });
  }

  /* ── Toggle password visibility ── */
  document.querySelectorAll('.admin-toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.pwdTarget);
      if (!input) return;
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.querySelector('i').className = isHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    });
  });

  /* ── Save password ── */
  const savePwdBtn = document.getElementById('stgSavePwdBtn');
  if (savePwdBtn) {
    savePwdBtn.addEventListener('click', () => {
      const current = document.getElementById('stgCurrentPwd').value;
      const newPwd  = document.getElementById('stgNewPwd').value;
      const confirm = document.getElementById('stgConfirmPwd').value;

      if (!current) { showToast('Please enter your current password.', 'error'); return; }
      if (newPwd.length < 8) { showToast('New password must be at least 8 characters.', 'error'); return; }
      if (newPwd !== confirm) { showToast('Passwords do not match.', 'error'); return; }

      // In a real app: send to server. Here we just confirm.
      document.getElementById('stgCurrentPwd').value = '';
      document.getElementById('stgNewPwd').value = '';
      document.getElementById('stgConfirmPwd').value = '';
      strengthSegs.forEach(s => { s.style.background = 'var(--border-color)'; });
      if (strengthLabel) strengthLabel.textContent = 'Password strength';
      showToast('Password updated successfully.', 'success');
    });
  }

  /* ── Generic Save Changes ── */
  document.querySelectorAll('[data-stg-save]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Settings saved successfully.', 'success');
    });
  });

  /* ── Generic Reset ── */
  document.querySelectorAll('[data-stg-reset]').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Settings reset to defaults.', 'success');
    });
  });

  /* ── Toast ── */
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.stg-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'stg-toast';
      toast.innerHTML = '<i class="fa-solid"></i><span></span>';
      document.body.appendChild(toast);
    }
    toast.className = `stg-toast ${type}`;
    toast.querySelector('i').className = `fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`;
    toast.querySelector('span').textContent = message;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }
});
