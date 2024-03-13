import logo272w from "./images/logo-icon-272w.svg";
import burgerIcon from "./images/burger-icon.svg";
import "./Header.css";
import { Container } from "../Container/Container.jsx";

function Header() {
  return (
    <header className="header">
      <Container className="header__container">
        <a className="header__link" href="/your-profile-react/">
          <img
            className="header__logo header__logo--light-theme"
            src={logo272w}
            alt="Your Profile Logo"
          />
        </a>
        <div className="header__btns">
          <button className="header__theme-btn btn">
            <img
              className="theme-btn__img"
              src="https://raw.githubusercontent.com/lubov-nefed/your-profile/main/images/light-dark-icon.svg"
              alt="Switch theme"
            />
          </button>
          <a
            className="header__btn btn header__btn--basic-color-style login-btn"
            href="/your-profile-react/login"
          >
            Login
          </a>
        </div>
        <img className="header__burger" src={burgerIcon} alt="Open menu" />
      </Container>
    </header>
  );
}

export { Header };
