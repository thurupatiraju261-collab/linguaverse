/* ==========================================================================
   LinguaVerse — admin.js
   Dashboard interactivity: auth guard, sidebar toggle, dropdowns,
   stat counters, chart bars, quick-action toasts, and logout.
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Auth guard ---------- */
  /* If the user hasn't logged in, bounce back to the login page. */
  if (sessionStorage.getItem('lv_admin_auth') !== 'true') {
    window.location.replace('login.html');
    return;
  }

  /* ---------- Personalise the dashboard ---------- */
  const adminName = sessionStorage.getItem('lv_admin_name') || 'Admin';
  document.querySelectorAll('[data-admin-name]').forEach(function (el) {
    el.textContent = adminName;
  });
  document.querySelectorAll('[data-admin-initials]').forEach(function (el) {
    el.textContent = adminName.charAt(0).toUpperCase();
  });

  /* Today's date */
  const todayEl = document.querySelector('[data-today-date]');
  if (todayEl) {
    todayEl.textContent = new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  /* ---------- Sidebar toggle (mobile) ---------- */
  const sidebar      = document.querySelector('.admin-sidebar');
  const sidebarBtn   = document.getElementById('sidebarToggle');
  const sidebarOvr   = document.querySelector('.admin-sidebar-overlay');

  function openSidebar()  { sidebar.classList.add('is-open'); sidebarOvr.classList.add('is-open'); }
  function closeSidebar() { sidebar.classList.remove('is-open'); sidebarOvr.classList.remove('is-open'); }

  if (sidebarBtn) sidebarBtn.addEventListener('click', openSidebar);
  if (sidebarOvr) sidebarOvr.addEventListener('click', closeSidebar);

  /* ---------- Dropdowns ---------- */
  document.querySelectorAll('[data-dropdown-trigger]').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const parent = trigger.closest('.admin-dropdown');
      const menu   = parent && parent.querySelector('.admin-dropdown-menu');
      if (!menu) return;

      /* Close every other open menu first */
      document.querySelectorAll('.admin-dropdown-menu.is-open').forEach(function (m) {
        if (m !== menu) m.classList.remove('is-open');
      });

      menu.classList.toggle('is-open');
    });
  });

  /* Close dropdowns when clicking outside */
  document.addEventListener('click', function () {
    document.querySelectorAll('.admin-dropdown-menu.is-open').forEach(function (m) {
      m.classList.remove('is-open');
    });
  });

  /* ---------- Stat counter animation ---------- */
  document.querySelectorAll('[data-stat-counter]').forEach(function (el) {
    const target = parseFloat(el.getAttribute('data-stat-counter'));
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

  /* ---------- Chart bars ---------- */
  document.querySelectorAll('.admin-chart-bar').forEach(function (bar) {
    const value = bar.getAttribute('data-value') || 50;
    /* Delay slightly for visual effect */
    setTimeout(function () {
      bar.style.height = value + '%';
    }, 200);
  });

  /* ---------- Quick actions (toast placeholder) ---------- */
  document.querySelectorAll('[data-quick-action]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const msg = btn.getAttribute('data-quick-action');
      showToast(msg);
    });
  });

  function showToast(message) {
    const existing = document.querySelector('.admin-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.textContent = message;
    toast.style.cssText =
      'position:fixed;bottom:1.5rem;right:1.5rem;background:#0f172a;color:#fff;' +
      'padding:0.75rem 1.25rem;border-radius:0.5rem;font-size:0.88rem;z-index:9999;' +
      'box-shadow:0 8px 30px rgba(0,0,0,0.18);opacity:0;transform:translateY(10px);' +
      'transition:opacity 0.3s,transform 0.3s;';
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
  }

  /* ---------- Logout ---------- */
  document.querySelectorAll('[data-logout]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      sessionStorage.removeItem('lv_admin_auth');
      sessionStorage.removeItem('lv_admin_name');
      sessionStorage.removeItem('lv_admin_email');
      window.location.href = 'login.html';
    });
  });

  /* ---------- Theme toggle ---------- */
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('lv-theme', next);
    });
  }
})();
