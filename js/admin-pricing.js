/* ==========================================================================
   LinguaVerse — admin-pricing.js
   Powers the Pricing Management page. Assumes admin.js has run.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const PLAN_ICONS = {
    Starter: { icon:'fa-seedling', gradient:'linear-gradient(135deg,#14b8a6,#0d9488)' },
    Pro:     { icon:'fa-bolt',     gradient:'linear-gradient(135deg,#6366f1,#4f46e5)' },
    Lifetime:{ icon:'fa-crown',    gradient:'linear-gradient(135deg,#f59e0b,#d97706)' },
  };
  function planIcon(name) {
    return PLAN_ICONS[name] || { icon:'fa-tag', gradient:'linear-gradient(135deg,#64748b,#475569)' };
  }

  /* ── Sample data ── */
  let plans = [
    {
      id: 1, name:'Starter', price:'Free', popular:false, status:'Active',
      desc:'Perfect for casual learners getting started.',
      features:[
        { text:'Access to 1 language', active:true },
        { text:'30 lessons',           active:true },
        { text:'Basic progress tracking', active:true },
        { text:'Community forums',     active:true },
        { text:'Offline access',       active:false },
        { text:'Priority support',     active:false },
      ],
    },
    {
      id: 2, name:'Pro', price:'$9.99/mo', popular:true, status:'Active',
      desc:'For dedicated learners who want full access.',
      features:[
        { text:'All 6 languages',        active:true },
        { text:'Unlimited lessons',      active:true },
        { text:'Advanced analytics',     active:true },
        { text:'Offline access',         active:true },
        { text:'Priority email support', active:true },
        { text:'Exclusive live sessions',active:false },
      ],
    },
    {
      id: 3, name:'Lifetime', price:'$199 once', popular:false, status:'Active',
      desc:'Pay once, learn forever — the best value.',
      features:[
        { text:'All 6 languages',        active:true },
        { text:'Unlimited lessons',      active:true },
        { text:'Advanced analytics',     active:true },
        { text:'Offline access',         active:true },
        { text:'Priority support',       active:true },
        { text:'Exclusive live sessions',active:true },
      ],
    },
  ];

  /* ── State ── */
  let searchTerm   = '';
  let modalMode    = 'add';
  let activePlanId = null;
  let pendingDelId = null;

  /* ── DOM refs ── */
  const cardsGrid    = document.getElementById('planCardsGrid');
  const searchInput  = document.getElementById('planSearchInput');
  const openAddBtn   = document.getElementById('openAddPlanBtn');
  const formOverlay  = document.getElementById('planFormModalOverlay');
  const delOverlay   = document.getElementById('planDeleteModalOverlay');
  const modalTitle   = document.getElementById('planFormModalTitle');
  const planForm     = document.getElementById('planForm');
  const submitBtn    = document.getElementById('planFormSubmitBtn');
  const delNameLabel = document.getElementById('deletePlanNameLabel');
  const confirmDelBtn= document.getElementById('prcConfirmDeleteBtn');

  const planNameInput    = document.getElementById('planNameInput');
  const planPriceInput   = document.getElementById('planPriceInput');
  const planStatusInput  = document.getElementById('planStatusInput');
  const planPopularInput = document.getElementById('planPopularInput');
  const planDescInput    = document.getElementById('planDescInput');
  const planFeaturesInput= document.getElementById('planFeaturesInput');

  if (!cardsGrid) return;

  /* ── Filter ── */
  function getFiltered() {
    return plans.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  /* ── Render cards ── */
  function render() {
    const filtered = getFiltered();
    if (filtered.length === 0) {
      cardsGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:var(--space-xl);color:var(--text-muted);"><i class="fa-solid fa-tags" style="font-size:2.5rem;margin-bottom:14px;display:block;opacity:0.4;"></i><h4 style="color:var(--text-primary);">No plans match your search</h4></div>`;
      return;
    }
    cardsGrid.innerHTML = filtered.map(cardHTML).join('');
  }

  function cardHTML(plan) {
    const pi     = planIcon(plan.name);
    const status = plan.status === 'Active' ? 'status-active' : 'status-inactive';
    const feats  = plan.features.map(f => `
      <li class="${f.active?'':'disabled'}">
        <i class="fa-solid ${f.active?'fa-circle-check':'fa-circle-xmark'}"></i>
        ${f.text}
      </li>`).join('');

    return `
      <div class="prc-card ${plan.popular?'popular':''}">
        ${plan.popular ? '<span class="prc-popular-badge">⭐ Most Popular</span>' : ''}
        <div class="prc-card-header">
          <div class="prc-icon" style="background:${pi.gradient};"><i class="fa-solid ${pi.icon}"></i></div>
          <h3>${plan.name}</h3>
          <div class="prc-price">${plan.price}</div>
          <p class="prc-desc">${plan.desc}</p>
        </div>
        <hr class="prc-divider" />
        <ul class="prc-features">${feats}</ul>
        <hr class="prc-divider" />
        <div class="prc-card-footer">
          <span class="admin-status-pill ${status}">${plan.status}</span>
          <div>
            <button type="button" class="btn btn-secondary btn-sm" data-prc-action="edit" data-id="${plan.id}">
              <i class="fa-solid fa-pen"></i> Edit
            </button>
            <button type="button" class="btn btn-accent btn-sm" data-prc-action="delete" data-id="${plan.id}" style="margin-left:6px;">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>`;
  }

  /* ── Events ── */
  searchInput.addEventListener('input', () => { searchTerm = searchInput.value.trim(); render(); });
  openAddBtn.addEventListener('click', () => openFormModal('add'));

  cardsGrid.addEventListener('click', e => {
    const btn = e.target.closest('[data-prc-action]');
    if (!btn) return;
    const id   = parseInt(btn.dataset.id, 10);
    const plan = plans.find(p => p.id === id);
    if (!plan) return;
    if (btn.dataset.prcAction === 'edit')   openFormModal('edit', plan);
    if (btn.dataset.prcAction === 'delete') openDeleteModal(plan);
  });

  /* ── Form modal ── */
  function openFormModal(mode, plan) {
    modalMode    = mode;
    activePlanId = plan ? plan.id : null;

    if (mode === 'add') {
      modalTitle.textContent  = 'Add New Plan';
      submitBtn.textContent   = 'Add Plan';
      planForm.reset();
    } else {
      modalTitle.textContent         = 'Edit Plan';
      submitBtn.textContent          = 'Save Changes';
      planNameInput.value            = plan.name;
      planPriceInput.value           = plan.price;
      planStatusInput.value          = plan.status;
      planPopularInput.value         = plan.popular ? 'yes' : 'no';
      planDescInput.value            = plan.desc;
      planFeaturesInput.value        = plan.features.map(f => (f.active?'':'-') + f.text).join('\n');
    }
    openModal(formOverlay);
  }

  planForm.addEventListener('submit', e => {
    e.preventDefault();
    if (!planNameInput.value.trim() || !planPriceInput.value.trim()) {
      showToast('Plan name and price are required.', 'error'); return;
    }
    const rawFeatures = planFeaturesInput.value.trim().split('\n').filter(l => l.trim());
    const features = rawFeatures.map(line => {
      const inactive = line.startsWith('-');
      return { text: inactive ? line.slice(1).trim() : line.trim(), active: !inactive };
    });

    const payload = {
      name:    planNameInput.value.trim(),
      price:   planPriceInput.value.trim(),
      status:  planStatusInput.value,
      popular: planPopularInput.value === 'yes',
      desc:    planDescInput.value.trim(),
      features,
    };

    if (modalMode === 'add') {
      const newId = plans.length ? Math.max(...plans.map(p=>p.id)) + 1 : 1;
      plans.push({ id:newId, ...payload });
      showToast(`"${payload.name}" plan added.`, 'success');
    } else {
      const idx = plans.findIndex(p => p.id === activePlanId);
      if (idx !== -1) plans[idx] = { ...plans[idx], ...payload };
      showToast(`"${payload.name}" plan updated.`, 'success');
    }
    closeModal(formOverlay);
    render();
  });

  /* ── Delete modal ── */
  function openDeleteModal(plan) {
    pendingDelId = plan.id;
    delNameLabel.textContent = plan.name;
    openModal(delOverlay);
  }

  confirmDelBtn.addEventListener('click', () => {
    const plan = plans.find(p => p.id === pendingDelId);
    plans = plans.filter(p => p.id !== pendingDelId);
    closeModal(delOverlay);
    render();
    if (plan) showToast(`"${plan.name}" plan deleted.`, 'success');
  });

  /* ── Modal helpers ── */
  function openModal(o)  { o.classList.add('open');    document.body.style.overflow='hidden'; }
  function closeModal(o) { o.classList.remove('open'); document.body.style.overflow=''; }

  document.querySelectorAll('[data-prc-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(document.getElementById(btn.dataset.prcClose)));
  });
  [formOverlay, delOverlay].forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) closeModal(o); });
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    [formOverlay, delOverlay].forEach(o => { if (o.classList.contains('open')) closeModal(o); });
  });

  /* ── Toast ── */
  function showToast(message, type = 'success') {
    let toast = document.querySelector('.prc-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'prc-toast';
      toast.innerHTML = '<i class="fa-solid"></i><span></span>';
      document.body.appendChild(toast);
    }
    toast.className = `prc-toast ${type}`;
    toast.querySelector('i').className = `fa-solid ${type==='success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`;
    toast.querySelector('span').textContent = message;
    requestAnimationFrame(() => toast.classList.add('show'));
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  /* ── Init ── */
  render();
});
