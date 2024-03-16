function SwitchTheme(e) {
  const currentTheme = e.target.dataset.theme;
  const newTheme = currentTheme === "light" ? "dark" : "light";
  const elements = document.querySelectorAll("[data-theme]");
  elements.forEach((el) => el.setAttribute("data-theme", newTheme));
  localStorage.setItem("theme", newTheme);
}

export { SwitchTheme };
