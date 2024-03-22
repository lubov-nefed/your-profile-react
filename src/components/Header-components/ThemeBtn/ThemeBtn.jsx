import "./ThemeBtn.css";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

function ThemeBtn({onClick}) {
  const theme = useContext(ThemeContext);
  return (
    <button
      className="theme-btn btn"
      title="Switch theme"
      data-theme={theme}
      onClick={onClick}
    ></button>
  );
}

export { ThemeBtn };
