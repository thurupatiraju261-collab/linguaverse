/* ==========================================================================
   LinguaVerse — admin-login.js
   Handles admin login form validation, demo-credential authentication,
   password visibility toggle, and redirect to the dashboard.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Demo credentials ---------- */
  const DEMO_EMAIL    = 'admin@linguaverse.com';
  const DEMO_PASSWORD = 'admin123';

  /* ---------- DOM refs ---------- */
  const form        = document.getElementById('adminLoginForm');
  const emailInput  = document.getElementById('adminEmail');
  const passInput   = document.getElementById('adminPassword');
  const alertBox    = document.getElementById('adminLoginAlert');
  const toggleBtn   = document.getElementById('toggleAdminPassword');

  if (!form) return;

  /* ---------- Password visibility toggle ---------- */
  if (toggleBtn && passInput) {
    toggleBtn.addEventListener('click', function () {
      const isPassword = passInput.type === 'password';
      passInput.type = isPassword ? 'text' : 'password';
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = isPassword
          ? 'fa-solid fa-eye-slash'
          : 'fa-solid fa-eye';
      }
      toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  }

  /* ---------- Helpers ---------- */
  function showFieldError(input, message) {
    const group = input.closest('.admin-form-group');
    if (!group) return;
    const errorSpan = group.querySelector('.admin-field-error');
    if (errorSpan) errorSpan.textContent = message;
    input.style.borderColor = '#ef4444';
  }

  function clearFieldError(input) {
    const group = input.closest('.admin-form-group');
    if (!group) return;
    const errorSpan = group.querySelector('.admin-field-error');
    if (errorSpan) errorSpan.textContent = '';
    input.style.borderColor = '';
  }

  function showAlert(message, type) {
    if (!alertBox) return;
    alertBox.classList.remove('is-hidden', 'admin-alert-error', 'admin-alert-success');
    alertBox.classList.add(type === 'success' ? 'admin-alert-success' : 'admin-alert-error');
    alertBox.querySelector('span').textContent = message;
  }

  function hideAlert() {
    if (alertBox) alertBox.classList.add('is-hidden');
  }

  /* Clear errors on input */
  [emailInput, passInput].forEach(function (el) {
    if (el) el.addEventListener('input', function () { clearFieldError(el); hideAlert(); });
  });

  /* ---------- Form submission ---------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideAlert();

    let valid = true;
    const email = emailInput.value.trim();
    const password = passInput.value;

    /* Basic validation */
    if (!email) {
      showFieldError(emailInput, 'Please enter your email address.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError(emailInput, 'Please enter a valid email address.');
      valid = false;
    }

    if (!password) {
      showFieldError(passInput, 'Please enter your password.');
      valid = false;
    }

    if (!valid) return;

    /* Simulate a tiny loading delay, then check credentials */
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing in…';
    }

    setTimeout(function () {
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        /* Store a simple session flag + admin name so the dashboard can greet them */
        sessionStorage.setItem('lv_admin_auth', 'true');
        sessionStorage.setItem('lv_admin_name', 'Admin');
        sessionStorage.setItem('lv_admin_email', email);

        showAlert('Login successful! Redirecting…', 'success');

        setTimeout(function () {
          window.location.href = 'dashboard.html';
        }, 600);
      } else {
        showAlert('Invalid email or password. Try the demo credentials below.', 'error');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Log In <i class="fa-solid fa-arrow-right"></i>';
        }
      }
    }, 800);
  });

  /* ---------- Theme toggle (re-uses theme.js logic) ---------- */
  const themeToggle = document.querySelector('.admin-auth-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('lv-theme', next);
    });
  }
})();
