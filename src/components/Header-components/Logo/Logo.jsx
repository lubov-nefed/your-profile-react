import "./Logo.css";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

function Logo() {  
  const theme = useContext(ThemeContext);
  return (
    <div className="logo" data-theme={theme} title="Your Profile Logo"></div>
  );
}

export { Logo };
