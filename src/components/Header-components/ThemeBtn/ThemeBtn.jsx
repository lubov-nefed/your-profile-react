import "./ThemeBtn.css";

function ThemeBtn() {
  function handleClick(e) {
    const currentTheme = e.target.dataset.theme;
    const newTheme = currentTheme === "light" ? "dark" : "light";
    const elements = document.querySelectorAll("[data-theme]");
    elements.forEach((el) => el.setAttribute("data-theme", newTheme));
  }
  return (
    <button
      className="theme-btn btn"
      title="Switch theme"
      data-theme="light"
      onClick={handleClick}
    ></button>
  );
}

export { ThemeBtn };
