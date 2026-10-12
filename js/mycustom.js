 (function () {
      try {
        var t = localStorage.getItem('theme');
        if (!t) t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', t);
      } catch (e) {}
    })();

(() => {
    'use strict';
//Dark Mode
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    themeBtn.setAttribute('aria-checked', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
}
    applyTheme(root.getAttribute('data-bs-theme'));
    themeBtn.addEventListener('click', () =>
    applyTheme(root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'));
})();

//==========Gerald's JavaScript==========//
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }
lastScrollY = window.scrollY;
});
