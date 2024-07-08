const defaultMode = "dark"; // if prefer scheme is not available
const body = document.querySelector("body");

const mode = checkSavedMode() ? checkSavedMode() : detectColorMode();
body.classList.add(mode);
setColorMode(mode);
const toggle = document.querySelector(".toggle-theme");
toggle.addEventListener("click", toggleClass);

function checkSavedMode() {
  return localStorage.getItem("color-mode");
}
function saveColorMode(value) {
  localStorage.setItem("color-mode", value);
}

function detectColorMode() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else if (window.matchMedia) {
    return "light";
  }
  return defaultMode;
}

function setColorMode(mode) {
  document.documentElement.setAttribute("data-bs-theme", mode);
}

function toggleClass() {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  document.documentElement.getAttribute("data-bs-theme") == "dark"
    ? document.documentElement.setAttribute("data-bs-theme", "light")
    : document.documentElement.setAttribute("data-bs-theme", "dark");
  body.classList.contains("dark")
    ? saveColorMode("dark")
    : saveColorMode("light");
}
