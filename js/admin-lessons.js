/* ==========================================================================
   LinguaVerse — admin-lessons.js
   Powers the Lessons Management page. Assumes admin.js has already run.
   All data is in-memory (resets on refresh).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sample Data ── */
  let lessons = [
    { id:1, name:'Greetings & Introductions', language:'English', level:'Beginner', duration:'15 min', status:'Published', order:1, desc:'Learn how to greet people and introduce yourself in everyday situations.' },
    { id:2, name:'Numbers & Counting',        language:'English', level:'Beginner', duration:'20 min', status:'Published', order:2, desc:'Master numbers 1–100 and basic counting in English.' },
    { id:3, name:'Common Phrases',            language:'Spanish', level:'Beginner', duration:'18 min', status:'Published', order:1, desc:'Essential Spanish phrases for everyday conversations.' },
    { id:4, name:'Present Tense Verbs',       language:'Spanish', level:'Intermediate', duration:'25 min', status:'Published', order:2, desc:'Conjugate regular and irregular verbs in the present tense.' },
    { id:5, name:'Hiragana Basics',           language:'Japanese', level:'Beginner', duration:'30 min', status:'Published', order:1, desc:'Learn all 46 Hiragana characters and their pronunciation.' },
    { id:6, name:'Katakana Writing',          language:'Japanese', level:'Beginner', duration:'30 min', status:'Draft', order:2, desc:'Learn Katakana for foreign loanwords and special terms.' },
    { id:7, name:'Kanji Level 1',             language:'Japanese', level:'Intermediate', duration:'40 min', status:'Published', order:3, desc:'Introduction to the first 80 essential Kanji characters.' },
    { id:8, name:'Bonjour! First Words',      language:'French', level:'Beginner', duration:'12 min', status:'Published', order:1, desc:'Your very first French words and basic greetings.' },
    { id:9, name:'French Cuisine Vocabulary', language:'French', level:'Intermediate', duration:'22 min', status:'Draft', order:5, desc:'Learn vocabulary for French food, dishes and restaurant phrases.' },
    { id:10, name:'Namaste & Greetings',      language:'Hindi', level:'Beginner', duration:'15 min', status:'Published', order:1, desc:'Common Hindi greetings and polite expressions.' },
    { id:11, name:'Devanagari Script',        language:'Hindi', level:'Beginner', duration:'35 min', status:'Published', order:2, desc:'Read and write the Devanagari alphabet used in Hindi.' },
    { id:12, name:'Telugu Alphabet Part 1',   language:'Telugu', level:'Beginner', duration:'28 min', status:'Archived', order:1, desc:'Introduction to the Telugu script — vowels and first consonants.' },
    { id:13, name:'Business English Emails',  language:'English', level:'Advanced', duration:'45 min', status:'Published', order:10, desc:'Write professional emails and formal business correspondence.' },
    { id:14, name:'Advanced Grammar',         language:'English', level:'Advanced', duration:'50 min', status:'Draft', order:11, desc:'Complex sentence structures, conditionals, and subjunctive mood.' },
    { id:15, name:'Spanish Past Tense',       language:'Spanish', level:'Advanced', duration:'35 min', status:'Published', order:8, desc:'Master preterite and imperfect past tenses in Spanish.' },
  ];

  /* ── State ── */
  const PAGE_SIZE = 8;
  let currentPage = 1;
  let searchTerm = '';
  let langFilter = 'all';
  let levelFilter = 'all';
  let modalMode = 'add'; // 'add' | 'edit'
  let activeLessonId = null;
  let pendingDeleteId = null;

  /* ── DOM refs ── */
  const tableBody      = document.getElementById('lessonsTableBody');
  const emptyState     = document.getElementById('lessonsEmptyState');
  const pagination     = document.getElementById('lessonsPagination');
  const countBadge     = document.getElementById('lessonCountBadge');
  const searchInput    = document.getElementById('lessonSearchInput');
  const langFilterSel  = document.getElementById('lessonLangFilter');
  const levelFilterSel = document.getElementById('lessonLevelFilter');
  const clearBtn       = document.getElementById('lsClearFiltersBtn');
  const openAddBtn     = document.getElementById('openAddLessonBtn');

  const formOverlay  = document.getElementById('lessonFormModalOverlay');
  const deleteOverlay= document.getElementById('lessonDeleteModalOverlay');
  const modalTitle   = document.getElementById('lessonFormModalTitle');
  const form         = document.getElementById('lessonForm');
  const submitBtn    = document.getElementById('lessonFormSubmitBtn');
  const deleteNameEl = document.getElementById('deleteLessonName');
  const confirmDelBtn= document.getElementById('lsConfirmDeleteBtn');

  const lsNameInput    = document.getElementById('lsNameInput');
  const lsLangInput    = document.getElementById('lsLangInput');
  const lsLevelInput   = document.getElementById('lsLevelInput');
  const lsDurationInput= document.getElementById('lsDurationInput');
  const lsStatusInput  = document.getElementById('lsStatusInput');
  const lsOrderInput   = document.getElementById('lsOrderInput');
  const lsDescInput    = document.getElementById('lsDescInput');

  if (!tableBody) return;

  /* ── Filter ── */
  function getFiltered() {
    return lessons.filter(l => {
      const matchSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchLang   = langFilter  === 'all' || l.language === langFilter;
      const matchLevel  = levelFilter === 'all' || l.level    === levelFilter;
      return matchSearch && matchLang && matchLevel;
    });
  }

  /* ── Render ── */
  function render() {
    const filtered   = getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    currentPage      = Math.min(currentPage, totalPages);

    const start     = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    countBadge.innerHTML = `<i class="fa-solid fa-book-open"></i> ${filtered.length} lesson${filtered.length===1?'':'s'}`;

    if (filtered.length === 0) {
      tableBody.innerHTML = '';
      emptyState.classList.add('show');
      pagination.innerHTML = '';
      return;
    }
    emptyState.classList.remove('show');
    tableBody.innerHTML = pageItems.map((l, i) => rowHTML(l, start + i + 1)).join('');
    renderPagination(totalPages);
  }

  function rowHTML(l, num) {
    const levelClass  = { Beginner:'level-beginner', Intermediate:'level-intermediate', Advanced:'level-advanced' }[l.level] || '';
    const statusClass = { Published:'status-published', Draft:'status-draft', Archived:'status-archived' }[l.status] || '';
    return `
      <tr>
        <td style="color:var(--text-muted);font-size:0.82rem;">${num}</td>
        <td>
          <strong style="display:block;">${l.name}</strong>
          <span style="font-size:0.78rem;color:var(--text-muted);">Order #${l.order}</span>
        </td>
        <td>${l.language}</td>
        <td><span class="level-badge ${levelClass}">${l.level}</span></td>
        <td>${l.duration}</td>
        <td><span class="admin-status-pill ${statusClass}">${l.status}</span></td>
        <td>
          <button type="button" class="ls-action-btn" data-ls-action="edit"   data-id="${l.id}" aria-label="Edit ${l.name}"><i class="fa-solid fa-pen"></i></button>
          <button type="button" class="ls-action-btn danger" data-ls-action="delete" data-id="${l.id}" aria-label="Delete ${l.name}"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>`;
  }

  function renderPagination(totalPages) {
    let html = `<button type="button" class="ls-page-btn" data-ls-page="prev" ${currentPage===1?'disabled':''}><i class="fa-solid fa-chevron-left"></i></button>`;
    for (let p = 1; p <= totalPages; p++) {
      html += `<button type="button" class="ls-page-btn ${p===currentPage?'active':''}" data-ls-page="${p}">${p}</button>`;
    }
    html += `<button type="button" class="ls-page-btn" data-ls-page="next" ${currentPage===totalPages?'disabled':''}><i class="fa-solid fa-chevron-right"></i></button>`;
    pagination.innerHTML = html;
  }

  /* ── Event listeners ── */
  searchInput.addEventListener('input', () => { searchTerm = searchInput.value.trim(); currentPage=1; render(); });
  langFilterSel.addEventListener('change', () => { langFilter = langFilterSel.value; currentPage=1; render(); });
  levelFilterSel.addEventListener('change', () => { levelFilter = levelFilterSel.value; currentPage=1; render(); });

  clearBtn.addEventListener('click', () => {
    searchTerm=''; langFilter='all'; levelFilter='all'; currentPage=1;
    searchInput.value=''; langFilterSel.value='all'; levelFilterSel.value='all';
    render();
  });

  pagination.addEventListener('click', e => {
    const btn = e.target.closest('[data-ls-page]');
    if (!btn || btn.disabled) return;
    const totalPages = Math.max(1, Math.ceil(getFiltered().length / PAGE_SIZE));
    if (btn.dataset.lsPage === 'prev') currentPage = Math.max(1, currentPage - 1);
    else if (btn.dataset.lsPage === 'next') currentPage = Math.min(totalPages, currentPage + 1);
    else currentPage = parseInt(btn.dataset.lsPage, 10);
    render();
  });

  tableBody.addEventListener('click', e => {
    const btn = e.target.closest('[data-ls-action]');
    if (!btn) return;
    const id   = parseInt(btn.dataset.id, 10);
    const less = lessons.find(l => l.id === id);
    if (!less) return;
    if (btn.dataset.lsAction === 'edit')   openFormModal('edit', less);
    if (btn.dataset.lsAction === 'delete') openDeleteModal(less);
  });

  openAddBtn.addEventListener('click', () => openFormModal('add'));

  /* ── Modal: Add / Edit ── */
  function openFormModal(mode, less) {
    modalMode    = mode;
    activeLessonId = less ? less.id : null;

    if (mode === 'add') {
      modalTitle.textContent = 'Add New Lesson';
      submitBtn.textContent  = 'Add Lesson';
      form.reset();
    } else {
      modalTitle.textContent  = 'Edit Lesson';
      submitBtn.textContent   = 'Save Changes';
      lsNameInput.value       = less.name;
      lsLangInput.value       = less.language;
      lsLevelInput.value      = less.level;
      lsDurationInput.value   = less.duration;
      lsStatusInput.value     = less.status;
      lsOrderInput.value      = less.order;
      lsDescInput.value       = less.desc || '';
    }
    openModal(formOverlay);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!lsNameInput.value.trim() || !lsLangInput.value || !lsDurationInput.value.trim()) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    const payload = {
      name:     lsNameInput.value.trim(),
      language: lsLangInput.value,
      level:    lsLevelInput.value,
      duration: lsDurationInput.value.trim(),
      status:   lsStatusInput.value,
      order:    parseInt(lsOrderInput.value, 10) || 1,
      desc:     lsDescInput.value.trim(),
    };
    if (modalMode === 'add') {
      const newId = lessons.length ? Math.max(...lessons.map(l=>l.id)) + 1 : 1;
      lessons.push({ id: newId, ...payload });
      showToast(`"${payload.name}" added successfully.`, 'success');
    } else {
      const idx = lessons.findIndex(l => l.id === activeLessonId);
      if (idx !== -1) lessons[idx] = { ...lessons[idx], ...payload };
      showToast(`"${payload.name}" updated successfully.`, 'success');
    }
    closeModal(formOverlay);
    render();
  });

  /* ── Modal: Delete ── */
  function openDeleteModal(less) {
    pendingDeleteId = less.id;
    deleteNameEl.textContent = less.name;
    openModal(deleteOverlay);
  }

  confirmDelBtn.addEventListener('click', () => {
    const less = lessons.find(l => l.id === pendingDeleteId);
    lessons = lessons.filter(l => l.id !== pendingDeleteId);
    closeModal(deleteOverlay);
    render();
    if (less) showToast(`"${less.name}" deleted.`, 'success');
  });

  /* ── Modal helpers ── */
  function openModal(overlay)  { overlay.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function closeModal(overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }

  document.querySelectorAll('[data-ls-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(document.getElementById(btn.dataset.lsClose)));
  });
  [formOverlay, deleteOverlay].forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) closeModal(o); });
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (formOverlay.classList.contains('open'))  closeModal(formOverlay);
    if (deleteOverlay.classList.contains('open')) closeModal(deleteOverlay);
  });

  /* ── Toast ── */
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.ls-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'ls-toast';
      toast.innerHTML = '<i class="fa-solid"></i><span></span>';
      document.body.appendChild(toast);
    }
    toast.className = `ls-toast ${type}`;
    toast.querySelector('i').className = `fa-solid ${type==='success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`;
    toast.querySelector('span').textContent = message;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  /* ── Init ── */
  render();
});
