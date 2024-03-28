import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";
import { MainBtn } from "../../components/Main-components/MainBtn/MainBtn.jsx";
import "./HomePage.css";

function HomePage({ SwitchTheme }) {
  return (
    <>
      <Header SwitchTheme={SwitchTheme} />
      <Main>
        <p className="main__subheading text">welcome to</p>
        <Logo className={"main__logo"} />
        <p className="main__text text">
          a place where you can create your personal profile page
        </p>
        <div className="main__btns-container">
          <MainBtn
            btnCssStyle="main__btn--main-accent-style"
            path="/your-profile-react/create-profile"
          >
            Create profile
          </MainBtn>
          <p className="main__text text">or</p>
          <MainBtn
            btnCssStyle="main__btn--additional-accent-style"
            path="/your-profile-react/profile-preview"
          >
            watch example
          </MainBtn>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export { HomePage };
