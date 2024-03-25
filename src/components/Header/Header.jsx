import burgerIcon from "./images/burger-icon.svg";
import "./Header.css";
import { Container } from "../Container/Container.jsx";
import { ThemeBtn } from "../Header-components/ThemeBtn/ThemeBtn.jsx";
import { Logo } from "../Logo/Logo.jsx";

function Header({ SwitchTheme }) {
  return (
    <header className="header">
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
        <button className="btn">
          <img className="header__burger" src={burgerIcon} alt="Open menu" />
        </button>
      </Container>
    </header>
  );
}

export { Header };
