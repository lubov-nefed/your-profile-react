import { ThemeContext } from "../../../ThemeContext.jsx";
import { useContext } from "react";
import { Container } from "../../Container/Container.jsx";
import { LoginBtn } from "../LoginBtn/LoginBtn.jsx";
import { ThemeBtn } from "../ThemeBtn/ThemeBtn.jsx";
import "./BurgerMenu.css";

function BurgerMenu({ SwitchTheme }) {
  const theme = useContext(ThemeContext);
  function closeBurgerMenu() {
    const burgerMenu = document.querySelector(".burger");
    burgerMenu.classList.remove("opened");
    burgerMenu.classList.add("closed");
  }
  return (
    <nav className="burger closed" data-theme={theme}>
      <header className="burger__header">
        <Container className="header__container">
          <div className="burger__btns-container">
            <LoginBtn />
            <ThemeBtn onClick={SwitchTheme} />
          </div>
          <button
            className="btn burger__close-btn"
            data-theme={theme}
            onClick={closeBurgerMenu}
          >
            <svg
              className="burger__close-btn-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
            >
              <rect
                width="35"
                height="5"
                x="3.536"
                rx="2.5"
                transform="rotate(45 3.536 0)"
              />
              <rect
                width="35"
                height="5"
                y="24.749"
                rx="2.5"
                transform="rotate(-45 0 24.749)"
              />
            </svg>
          </button>
        </Container>
      </header>
      <ul>
        <li>
          <a className="burger__link" href="/your-profile-react/create-profile">
            Create Profile
          </a>
        </li>
        <li>
          <a
            className="burger__link"
            href="/your-profile-react/profile-preview"
          >
            Watch examples
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { BurgerMenu };
