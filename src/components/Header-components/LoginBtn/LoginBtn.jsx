import "./LoginBtn.css";
import { ThemeContext } from "../../../ThemeContext.jsx";
import { useContext } from "react";

function LoginBtn() {
  const theme = useContext(ThemeContext);
  return (
    <a
      data-theme={theme}
      className="login-btn btn"
      href="/your-profile-react/login"
    >
      Login
    </a>
  );
}

export { LoginBtn };
