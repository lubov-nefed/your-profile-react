import burgerIcon from "./images/burger-icon.svg";
import "./Header.css";
import { Container } from "../Container/Container.jsx";
import { ThemeBtn } from "../Header-components/ThemeBtn/ThemeBtn.jsx";
import { Logo } from "../Logo/Logo.jsx";
import { ThemeContext } from "../../ThemeContext.jsx";
import { useContext } from "react";

function Header({ SwitchTheme }) {
  const theme = useContext(ThemeContext);
  return (
    <header className="header" data-theme={theme}>
      <Container className="header__container">
        <a className="header__link" href="/your-profile-react/">
          <Logo className="header__logo" />
        </a>
        <div className="header__btns">
          <ThemeBtn onClick={SwitchTheme} />
          <a
            className="header__btn btn header__btn--basic-color-style login-btn"
            href="/your-profile-react/login"
          >
            Login
          </a>
        </div>
        <button className="btn header__burger-btn" title="Open menu">
          <svg
            className="burger-btn__svg"
            data-theme={theme}
            width="20"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="12" width="20" height="3" rx="1.5" />
            <rect y="6" width="20" height="3" rx="1.5" />
            <rect width="20" height="3" rx="1.5" />
          </svg>
        </button>
      </Container>
    </header>
  );
}

export { Header };
