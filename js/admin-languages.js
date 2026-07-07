/* ==========================================================================
   LinguaVerse — admin-languages.js
   Powers the Languages Management page only. Assumes js/admin.js has
   already run (sidebar, dropdowns, logout, theme toggle) — this file adds
   nothing to those systems and only touches elements that live on
   admin/languages.html.
   Sample data only — everything here is in-memory and resets on refresh.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------------------------------- */
  /* Sample data                                                       */
  /* ---------------------------------------------------------------- */
  let languages = [
    { id: 1, flag: "🇬🇧", name: "English", native: "English", difficulty: "Beginner", lessons: 120, time: "3–6 months", status: "Active" },
    { id: 2, flag: "🇮🇳", name: "Hindi", native: "हिन्दी", difficulty: "Intermediate", lessons: 100, time: "5–8 months", status: "Active" },
    { id: 3, flag: "🇪🇸", name: "Spanish", native: "Español", difficulty: "Beginner", lessons: 110, time: "4–6 months", status: "Active" },
    { id: 4, flag: "🇫🇷", name: "French", native: "Français", difficulty: "Intermediate", lessons: 105, time: "5–7 months", status: "Active" },
    { id: 5, flag: "🇯🇵", name: "Japanese", native: "日本語", difficulty: "Advanced", lessons: 130, time: "10–18 months", status: "Active" },
    { id: 6, flag: "🇮🇳", name: "Telugu", native: "తెలుగు", difficulty: "Intermediate", lessons: 90, time: "6–9 months", status: "Inactive" },
    { id: 7, flag: "🇩🇪", name: "German", native: "Deutsch", difficulty: "Intermediate", lessons: 95, time: "6–9 months", status: "Active" },
    { id: 8, flag: "🇨🇳", name: "Mandarin Chinese", native: "中文", difficulty: "Advanced", lessons: 140, time: "12–20 months", status: "Inactive" },
  ];

  /* ---------------------------------------------------------------- */
  /* State                                                             */
  /* ---------------------------------------------------------------- */
  const PAGE_SIZE = 5;
  let currentPage = 1;
  let searchTerm = "";
  let activeDifficulty = "all";
  let modalMode = "add"; // 'add' | 'edit' | 'view'
  let activeLanguageId = null;
  let pendingDeleteId = null;

  /* ---------------------------------------------------------------- */
  /* DOM references                                                    */
  /* ---------------------------------------------------------------- */
  const tableBody = document.querySelector("#languagesTableBody");
  const emptyState = document.querySelector("#languagesEmptyState");
  const pagination = document.querySelector("#languagesPagination");
  const countBadge = document.querySelector("#languageCountBadge");
  const searchInput = document.querySelector("#languageSearchInput");
  const filterChips = document.querySelectorAll("#difficultyFilterChips button");
  const clearFiltersBtn = document.querySelector("#clearFiltersBtn");

  const formModalOverlay = document.querySelector("#languageFormModalOverlay");
  const formModalTitle = document.querySelector("#languageFormModalTitle");
  const form = document.querySelector("#languageForm");
  const submitBtn = document.querySelector("#languageFormSubmitBtn");
  const openAddBtn = document.querySelector("#openAddLanguageBtn");

  const nameInput = document.querySelector("#langNameInput");
  const flagInput = document.querySelector("#langFlagInput");
  const difficultyInput = document.querySelector("#langDifficultyInput");
  const statusInput = document.querySelector("#langStatusInput");
  const lessonsInput = document.querySelector("#langLessonsInput");
  const timeInput = document.querySelector("#langTimeInput");
  const formInputs = [nameInput, flagInput, difficultyInput, statusInput, lessonsInput, timeInput];

  const deleteModalOverlay = document.querySelector("#deleteConfirmModalOverlay");
  const deleteLanguageName = document.querySelector("#deleteLanguageName");
  const confirmDeleteBtn = document.querySelector("#confirmDeleteBtn");

  if (!tableBody) return; // safety guard in case this script loads elsewhere

  /* ---------------------------------------------------------------- */
  /* Rendering                                                         */
  /* ---------------------------------------------------------------- */
  function getFilteredLanguages() {
    return languages.filter((lang) => {
      const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = activeDifficulty === "all" || lang.difficulty === activeDifficulty;
      return matchesSearch && matchesDifficulty;
    });
  }

  function renderTable() {
    const filtered = getFilteredLanguages();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    currentPage = Math.min(currentPage, totalPages);

    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    countBadge.innerHTML = `<i class="fa-solid fa-language"></i> ${filtered.length} language${filtered.length === 1 ? "" : "s"}`;

    if (filtered.length === 0) {
      tableBody.innerHTML = "";
      emptyState.classList.add("show");
      pagination.innerHTML = "";
      return;
    }

    emptyState.classList.remove("show");
    tableBody.innerHTML = pageItems.map(languageRowTemplate).join("");
    renderPagination(totalPages);
  }

  function languageRowTemplate(lang) {
    const statusClass = lang.status === "Active" ? "status-active" : "status-inactive";
    return `
      <tr>
        <td class="lang-flag-cell">${lang.flag}</td>
        <td class="lang-name-cell">
          <strong>${lang.name}</strong>
          <span>${lang.native}</span>
        </td>
        <td>${lang.difficulty}</td>
        <td>${lang.lessons}</td>
        <td>${lang.time}</td>
        <td><span class="admin-status-pill ${statusClass}">${lang.status}</span></td>
        <td>
          <button type="button" class="lang-action-btn" data-action="view" data-id="${lang.id}" aria-label="View ${lang.name}"><i class="fa-solid fa-eye"></i></button>
          <button type="button" class="lang-action-btn" data-action="edit" data-id="${lang.id}" aria-label="Edit ${lang.name}"><i class="fa-solid fa-pen"></i></button>
          <button type="button" class="lang-action-btn danger" data-action="delete" data-id="${lang.id}" aria-label="Delete ${lang.name}"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>`;
  }

  function renderPagination(totalPages) {
    let html = `<button type="button" class="lang-page-btn" data-page="prev" ${currentPage === 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>`;
    for (let page = 1; page <= totalPages; page++) {
      html += `<button type="button" class="lang-page-btn ${page === currentPage ? "active" : ""}" data-page="${page}">${page}</button>`;
    }
    html += `<button type="button" class="lang-page-btn" data-page="next" ${currentPage === totalPages ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>`;
    pagination.innerHTML = html;
  }

  /* ---------------------------------------------------------------- */
  /* Search & filter interactions                                     */
  /* ---------------------------------------------------------------- */
  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    currentPage = 1;
    renderTable();
  });

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeDifficulty = chip.dataset.difficulty;
      currentPage = 1;
      renderTable();
    });
  });

  clearFiltersBtn.addEventListener("click", () => {
    searchTerm = "";
    activeDifficulty = "all";
    searchInput.value = "";
    filterChips.forEach((c) => c.classList.toggle("active", c.dataset.difficulty === "all"));
    currentPage = 1;
    renderTable();
  });

  pagination.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    const totalPages = Math.max(1, Math.ceil(getFilteredLanguages().length / PAGE_SIZE));
    if (btn.dataset.page === "prev") currentPage = Math.max(1, currentPage - 1);
    else if (btn.dataset.page === "next") currentPage = Math.min(totalPages, currentPage + 1);
    else currentPage = parseInt(btn.dataset.page, 10);
    renderTable();
  });

  /* ---------------------------------------------------------------- */
  /* Row actions (View / Edit / Delete) via event delegation           */
  /* ---------------------------------------------------------------- */
  tableBody.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const id = parseInt(btn.dataset.id, 10);
    const lang = languages.find((l) => l.id === id);
    if (!lang) return;

    if (btn.dataset.action === "view") openFormModal("view", lang);
    if (btn.dataset.action === "edit") openFormModal("edit", lang);
    if (btn.dataset.action === "delete") openDeleteModal(lang);
  });

  /* ---------------------------------------------------------------- */
  /* Add / Edit / View modal                                           */
  /* ---------------------------------------------------------------- */
  openAddBtn.addEventListener("click", () => openFormModal("add"));

  function openFormModal(mode, lang) {
    modalMode = mode;
    activeLanguageId = lang ? lang.id : null;
    formInputs.forEach((input) => clearFieldError(input));

    if (mode === "add") {
      formModalTitle.textContent = "Add New Language";
      submitBtn.style.display = "";
      submitBtn.textContent = "Add Language";
      form.reset();
      difficultyInput.value = "Beginner";
      statusInput.value = "Active";
      setFormDisabled(false);
    } else {
      nameInput.value = lang.name;
      flagInput.value = lang.flag;
      difficultyInput.value = lang.difficulty;
      statusInput.value = lang.status;
      lessonsInput.value = lang.lessons;
      timeInput.value = lang.time;

      if (mode === "edit") {
        formModalTitle.textContent = "Edit Language";
        submitBtn.style.display = "";
        submitBtn.textContent = "Save Changes";
        setFormDisabled(false);
      } else {
        formModalTitle.textContent = "View Language";
        submitBtn.style.display = "none";
        setFormDisabled(true);
      }
    }

    openModal(formModalOverlay);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (modalMode === "view") return;

    const isValid = validateForm();
    if (!isValid) return;

    const payload = {
      name: nameInput.value.trim(),
      flag: flagInput.value.trim(),
      native: modalMode === "edit" ? languages.find((l) => l.id === activeLanguageId).native : nameInput.value.trim(),
      difficulty: difficultyInput.value,
      status: statusInput.value,
      lessons: parseInt(lessonsInput.value, 10),
      time: timeInput.value.trim(),
    };

    if (modalMode === "add") {
      const newId = languages.length ? Math.max(...languages.map((l) => l.id)) + 1 : 1;
      languages.push({ id: newId, ...payload });
      showToast(`${payload.name} was added successfully.`, "success");
    } else if (modalMode === "edit") {
      const index = languages.findIndex((l) => l.id === activeLanguageId);
      if (index !== -1) languages[index] = { ...languages[index], ...payload };
      showToast(`${payload.name} was updated successfully.`, "success");
    }

    closeModal(formModalOverlay);
    renderTable();
  });

  function validateForm() {
    let valid = true;
    if (!nameInput.value.trim()) { setFieldError(nameInput, "Language name is required."); valid = false; }
    if (!flagInput.value.trim()) { setFieldError(flagInput, "Add a flag emoji."); valid = false; }
    if (!lessonsInput.value || parseInt(lessonsInput.value, 10) <= 0) { setFieldError(lessonsInput, "Enter a lesson count greater than 0."); valid = false; }
    if (!timeInput.value.trim()) { setFieldError(timeInput, "Learning time is required."); valid = false; }
    if (!valid) showToast("Please fix the highlighted fields.", "error");
    return valid;
  }

  function setFieldError(input, message) {
    const wrap = input.closest(".admin-input-wrap") || input;
    wrap.classList.add("has-error");
    const errorEl = input.closest(".admin-form-group")?.querySelector(".admin-field-error");
    if (errorEl) errorEl.textContent = message;
  }

  function clearFieldError(input) {
    const wrap = input.closest(".admin-input-wrap") || input;
    wrap.classList?.remove("has-error");
    const errorEl = input.closest(".admin-form-group")?.querySelector(".admin-field-error");
    if (errorEl) errorEl.textContent = "";
  }

  function setFormDisabled(disabled) {
    formInputs.forEach((input) => (input.disabled = disabled));
  }

  /* ---------------------------------------------------------------- */
  /* Delete confirmation modal                                         */
  /* ---------------------------------------------------------------- */
  function openDeleteModal(lang) {
    pendingDeleteId = lang.id;
    deleteLanguageName.textContent = lang.name;
    openModal(deleteModalOverlay);
  }

  confirmDeleteBtn.addEventListener("click", () => {
    const lang = languages.find((l) => l.id === pendingDeleteId);
    languages = languages.filter((l) => l.id !== pendingDeleteId);
    closeModal(deleteModalOverlay);
    renderTable();
    if (lang) showToast(`${lang.name} was deleted.`, "success");
  });

  /* ---------------------------------------------------------------- */
  /* Shared modal open/close helpers                                   */
  /* ---------------------------------------------------------------- */
  function openModal(overlay) {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(document.getElementById(btn.dataset.closeModal));
    });
  });

  // Clicking the dimmed backdrop (not the modal card itself) also closes it
  [formModalOverlay, deleteModalOverlay].forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay);
    });
  });

  // Escape key closes whichever modal is open
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (formModalOverlay.classList.contains("open")) closeModal(formModalOverlay);
    if (deleteModalOverlay.classList.contains("open")) closeModal(deleteModalOverlay);
  });

  /* ---------------------------------------------------------------- */
  /* Toast notifications (success / error) — self-contained so we      */
  /* don't need to modify admin.js's generic, single-style toast.      */
  /* ---------------------------------------------------------------- */
  function showToast(message, type) {
    let toast = document.querySelector(".lang-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "lang-toast";
      toast.innerHTML = `<i class="fa-solid"></i><span></span>`;
      document.body.appendChild(toast);
    }
    toast.className = `lang-toast ${type}`;
    toast.querySelector("i").className = `fa-solid ${type === "success" ? "fa-circle-check" : "fa-circle-exclamation"}`;
    toast.querySelector("span").textContent = message;

    requestAnimationFrame(() => toast.classList.add("show"));
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  /* ---------------------------------------------------------------- */
  /* Initial render                                                    */
  /* ---------------------------------------------------------------- */
  renderTable();
});