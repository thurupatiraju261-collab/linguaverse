/* ==========================================================================
   LinguaVerse — admin-users.js
   Powers the Users Management page. Assumes admin.js has already run.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Avatar colour palette ── */
  const AVATAR_COLORS = [
    '#0d9488','#6366f1','#f59e0b','#ec4899','#14b8a6',
    '#8b5cf6','#ef4444','#0ea5e9','#10b981','#f97316',
  ];
  function avatarColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
  }
  function initials(name) {
    return name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase();
  }

  /* ── Sample Data ── */
  let users = [
    { id:1,  name:'Priya Sharma',    email:'priya.s@example.com',  language:'English',  joinDate:'2025-12-01', progress:72, lessons:86,  streak:12, status:'Active'   },
    { id:2,  name:'Rahul Kumar',     email:'rahulk@example.com',   language:'Japanese', joinDate:'2025-11-15', progress:35, lessons:42,  streak:5,  status:'Active'   },
    { id:3,  name:'Maria Garcia',    email:'maria.g@example.com',  language:'Spanish',  joinDate:'2025-10-20', progress:90, lessons:108, streak:30, status:'Active'   },
    { id:4,  name:'Arjun Reddy',     email:'arjunr@example.com',   language:'Telugu',   joinDate:'2026-01-08', progress:18, lessons:21,  streak:3,  status:'Inactive' },
    { id:5,  name:'Sophie Laurent',  email:'sophie.l@example.com', language:'French',   joinDate:'2025-09-05', progress:60, lessons:72,  streak:20, status:'Active'   },
    { id:6,  name:'Chen Wei',        email:'chenw@example.com',    language:'English',  joinDate:'2026-02-14', progress:45, lessons:54,  streak:7,  status:'Active'   },
    { id:7,  name:'Anika Patel',     email:'anikap@example.com',   language:'Hindi',    joinDate:'2025-08-30', progress:80, lessons:96,  streak:25, status:'Active'   },
    { id:8,  name:'Jake Morrison',   email:'jake.m@example.com',   language:'Spanish',  joinDate:'2026-03-01', progress:10, lessons:12,  streak:2,  status:'Active'   },
    { id:9,  name:'Yuki Tanaka',     email:'yukit@example.com',    language:'Japanese', joinDate:'2025-07-22', progress:95, lessons:114, streak:42, status:'Active'   },
    { id:10, name:'Fatima Al-Sayed', email:'fatimaa@example.com',  language:'French',   joinDate:'2026-01-30', progress:25, lessons:30,  streak:4,  status:'Blocked'  },
    { id:11, name:'Carlos Vega',     email:'carlosv@example.com',  language:'English',  joinDate:'2025-06-10', progress:55, lessons:66,  streak:15, status:'Active'   },
    { id:12, name:'Meera Iyer',      email:'meerai@example.com',   language:'Hindi',    joinDate:'2025-12-25', progress:40, lessons:48,  streak:8,  status:'Inactive' },
  ];

  /* ── State ── */
  const PAGE_SIZE = 8;
  let currentPage   = 1;
  let searchTerm    = '';
  let langFilter    = 'all';
  let statusFilter  = 'all';
  let activeUserId  = null;
  let pendingDelId  = null;

  /* ── DOM refs ── */
  const tableBody      = document.getElementById('usersTableBody');
  const emptyState     = document.getElementById('usersEmptyState');
  const pagination     = document.getElementById('usersPagination');
  const countBadge     = document.getElementById('userCountBadge');
  const searchInput    = document.getElementById('userSearchInput');
  const langFilterSel  = document.getElementById('userLangFilter');
  const statusFilterSel= document.getElementById('userStatusFilter');

  const viewOverlay  = document.getElementById('viewUserModalOverlay');
  const editOverlay  = document.getElementById('editUserModalOverlay');
  const delOverlay   = document.getElementById('deleteUserModalOverlay');
  const editForm     = document.getElementById('editUserForm');
  const confirmDelBtn= document.getElementById('usrConfirmDeleteBtn');

  if (!tableBody) return;

  /* ── Filter ── */
  function getFiltered() {
    return users.filter(u => {
      const term = searchTerm.toLowerCase();
      const matchSearch = u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term);
      const matchLang   = langFilter   === 'all' || u.language === langFilter;
      const matchStatus = statusFilter === 'all' || u.status   === statusFilter;
      return matchSearch && matchLang && matchStatus;
    });
  }

  /* ── Render ── */
  function render() {
    const filtered   = getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    currentPage      = Math.min(currentPage, totalPages);
    const start      = (currentPage - 1) * PAGE_SIZE;
    const pageItems  = filtered.slice(start, start + PAGE_SIZE);

    countBadge.innerHTML = `<i class="fa-solid fa-users"></i> ${filtered.length} user${filtered.length===1?'':'s'}`;

    if (filtered.length === 0) {
      tableBody.innerHTML = '';
      emptyState.classList.add('show');
      pagination.innerHTML = '';
      return;
    }
    emptyState.classList.remove('show');
    tableBody.innerHTML = pageItems.map(rowHTML).join('');
    renderPagination(totalPages);
  }

  function rowHTML(u) {
    const color = avatarColor(u.name);
    const init  = initials(u.name);
    const statusClass = { Active:'status-active', Inactive:'status-inactive', Blocked:'status-blocked' }[u.status] || '';
    const join  = new Date(u.joinDate).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
    return `
      <tr>
        <td>
          <span class="usr-avatar" style="background:${color};">${init}</span>
        </td>
        <td style="font-weight:600;">${u.name}</td>
        <td style="color:var(--text-muted);font-size:0.88rem;">${u.email}</td>
        <td>${u.language}</td>
        <td style="color:var(--text-muted);font-size:0.85rem;">${join}</td>
        <td>
          <div class="usr-progress-wrap">
            <div class="usr-progress-bar"><div class="usr-progress-fill" style="width:${u.progress}%;"></div></div>
            <span class="usr-progress-label">${u.progress}%</span>
          </div>
        </td>
        <td><span class="admin-status-pill ${statusClass}">${u.status}</span></td>
        <td>
          <button type="button" class="usr-action-btn" data-usr-action="view"   data-id="${u.id}" aria-label="View ${u.name}"><i class="fa-solid fa-eye"></i></button>
          <button type="button" class="usr-action-btn" data-usr-action="edit"   data-id="${u.id}" aria-label="Edit ${u.name}"><i class="fa-solid fa-pen"></i></button>
          <button type="button" class="usr-action-btn block"  data-usr-action="block"  data-id="${u.id}" aria-label="Block ${u.name}" title="${u.status==='Blocked'?'Unblock':'Block'}"><i class="fa-solid fa-ban"></i></button>
          <button type="button" class="usr-action-btn danger" data-usr-action="delete" data-id="${u.id}" aria-label="Delete ${u.name}"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>`;
  }

  function renderPagination(totalPages) {
    let html = `<button type="button" class="usr-page-btn" data-usr-page="prev" ${currentPage===1?'disabled':''}><i class="fa-solid fa-chevron-left"></i></button>`;
    for (let p = 1; p <= totalPages; p++) {
      html += `<button type="button" class="usr-page-btn ${p===currentPage?'active':''}" data-usr-page="${p}">${p}</button>`;
    }
    html += `<button type="button" class="usr-page-btn" data-usr-page="next" ${currentPage===totalPages?'disabled':''}><i class="fa-solid fa-chevron-right"></i></button>`;
    pagination.innerHTML = html;
  }

  /* ── Events ── */
  searchInput.addEventListener('input',    () => { searchTerm   = searchInput.value.trim(); currentPage=1; render(); });
  langFilterSel.addEventListener('change', () => { langFilter   = langFilterSel.value;       currentPage=1; render(); });
  statusFilterSel.addEventListener('change',()=>{ statusFilter = statusFilterSel.value;    currentPage=1; render(); });

  pagination.addEventListener('click', e => {
    const btn = e.target.closest('[data-usr-page]');
    if (!btn || btn.disabled) return;
    const totalPages = Math.max(1, Math.ceil(getFiltered().length / PAGE_SIZE));
    if (btn.dataset.usrPage === 'prev') currentPage = Math.max(1, currentPage - 1);
    else if (btn.dataset.usrPage === 'next') currentPage = Math.min(totalPages, currentPage + 1);
    else currentPage = parseInt(btn.dataset.usrPage, 10);
    render();
  });

  tableBody.addEventListener('click', e => {
    const btn = e.target.closest('[data-usr-action]');
    if (!btn) return;
    const id   = parseInt(btn.dataset.id, 10);
    const user = users.find(u => u.id === id);
    if (!user) return;
    const action = btn.dataset.usrAction;
    if (action === 'view')   openViewModal(user);
    if (action === 'edit')   openEditModal(user);
    if (action === 'block')  toggleBlock(user);
    if (action === 'delete') openDeleteModal(user);
  });

  /* ── View modal ── */
  function openViewModal(user) {
    const color = avatarColor(user.name);
    document.getElementById('viewUserAvatar').style.background = color;
    document.getElementById('viewUserAvatar').textContent = initials(user.name);
    document.getElementById('viewUserName').textContent   = user.name;
    document.getElementById('viewUserEmail').textContent  = user.email;
    document.getElementById('viewUserLang').textContent   = user.language;
    document.getElementById('viewUserStatus').textContent = user.status;
    document.getElementById('viewUserJoin').textContent   = new Date(user.joinDate).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
    document.getElementById('viewUserProgress').textContent = user.progress + '%';
    document.getElementById('viewUserLessons').textContent  = user.lessons;
    document.getElementById('viewUserStreak').textContent   = user.streak + ' days';
    openModal(viewOverlay);
  }

  /* ── Edit modal ── */
  function openEditModal(user) {
    activeUserId = user.id;
    document.getElementById('editUserName').value   = user.name;
    document.getElementById('editUserEmail').value  = user.email;
    document.getElementById('editUserLang').value   = user.language;
    document.getElementById('editUserStatus').value = user.status;
    openModal(editOverlay);
  }

  editForm.addEventListener('submit', e => {
    e.preventDefault();
    const idx = users.findIndex(u => u.id === activeUserId);
    if (idx === -1) return;
    users[idx].name     = document.getElementById('editUserName').value.trim();
    users[idx].email    = document.getElementById('editUserEmail').value.trim();
    users[idx].language = document.getElementById('editUserLang').value;
    users[idx].status   = document.getElementById('editUserStatus').value;
    closeModal(editOverlay);
    render();
    showToast(`${users[idx].name} updated successfully.`, 'success');
  });

  /* ── Block/Unblock ── */
  function toggleBlock(user) {
    const idx = users.findIndex(u => u.id === user.id);
    if (idx === -1) return;
    const wasBlocked = users[idx].status === 'Blocked';
    users[idx].status = wasBlocked ? 'Active' : 'Blocked';
    render();
    showToast(`${users[idx].name} ${wasBlocked ? 'unblocked' : 'blocked'}.`, wasBlocked ? 'success' : 'warn');
  }

  /* ── Delete modal ── */
  function openDeleteModal(user) {
    pendingDelId = user.id;
    document.getElementById('deleteUserNameLabel').textContent = user.name;
    openModal(delOverlay);
  }

  confirmDelBtn.addEventListener('click', () => {
    const user = users.find(u => u.id === pendingDelId);
    users = users.filter(u => u.id !== pendingDelId);
    closeModal(delOverlay);
    render();
    if (user) showToast(`${user.name} deleted.`, 'success');
  });

  /* ── Modal helpers ── */
  function openModal(overlay)  { overlay.classList.add('open');    document.body.style.overflow='hidden'; }
  function closeModal(overlay) { overlay.classList.remove('open'); document.body.style.overflow=''; }

  document.querySelectorAll('[data-usr-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(document.getElementById(btn.dataset.usrClose)));
  });
  [viewOverlay, editOverlay, delOverlay].forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) closeModal(o); });
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    [viewOverlay, editOverlay, delOverlay].forEach(o => { if (o.classList.contains('open')) closeModal(o); });
  });

  /* ── Toast ── */
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.usr-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'usr-toast';
      toast.innerHTML = '<i class="fa-solid"></i><span></span>';
      document.body.appendChild(toast);
    }
    toast.className = `usr-toast ${type}`;
    const icons = { success:'fa-circle-check', error:'fa-circle-exclamation', warn:'fa-triangle-exclamation' };
    toast.querySelector('i').className = `fa-solid ${icons[type] || 'fa-circle-check'}`;
    toast.querySelector('span').textContent = message;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  /* ── Init ── */
  render();
});
