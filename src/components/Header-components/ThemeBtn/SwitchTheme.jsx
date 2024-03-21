function SwitchTheme() {
  const currentTheme = document.querySelector("[data-theme]").dataset.theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";
  const elements = document.querySelectorAll("[data-theme]");
  elements.forEach((element) => element.setAttribute("data-theme", newTheme));
  localStorage.setItem("theme", newTheme);
}

//doesn't work
function ApplyStoredTheme() {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    const elements = document.querySelectorAll("[data-theme]");
    elements.forEach((el) => el.setAttribute("data-theme", storedTheme));
  }
}

export { SwitchTheme, ApplyStoredTheme };
