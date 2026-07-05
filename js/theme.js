/* ==========================================================================
   LinguaVerse — theme.js
   Handles Dark / Light mode switching and remembers the choice in
   Local Storage. This file is loaded in <head> (before the page paints)
   so the correct theme applies instantly with no flash of the wrong theme.
   ========================================================================== */

(function () {
  const STORAGE_KEY = "linguaverse-theme";

  /**
   * Work out which theme to show:
   * 1. Whatever the user picked before (saved in Local Storage), or
   * 2. Their operating system preference, or
   * 3. Light mode as a safe default.
   */
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;

    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ? "dark" : "light";
  }

  /** Apply a theme to the document and remember it for next time. */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Keep every toggle button on the page in sync (icon + aria state)
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.setAttribute("aria-pressed", theme === "dark");
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  // Apply immediately — runs before the rest of the DOM paints.
  applyTheme(getPreferredTheme());

  /** Flip the current theme and save the new choice. */
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  }

  // Wire up every theme toggle button once the DOM is ready.
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  });

  // Expose for other scripts / debugging if ever needed.
  window.LinguaVerseTheme = { applyTheme, toggleTheme, getPreferredTheme };
})();
