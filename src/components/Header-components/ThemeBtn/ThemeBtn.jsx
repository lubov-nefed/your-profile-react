import "./ThemeBtn.css";
import { SwitchTheme } from "./SwitchTheme.jsx";

function ThemeBtn() {
  return (
    <button
      className="theme-btn btn"
      title="Switch theme"
      data-theme="light"
      onClick={SwitchTheme}
    ></button>
  );
}

export { ThemeBtn };
