import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Logo } from "../../components/Logo/Logo.jsx";

function HomePage({ SwitchTheme }) {
  return (
    <>
      <Header SwitchTheme={SwitchTheme} />
      <Main>
        <p className="main__subheading">welcome to</p>
        <Logo className={"main__logo"} />
        <p className="main__text">
          a place where you can create your personal profile page
        </p>
        <div className="main__btn-container">
          <a
            className="main__btn btn main__btn--main-accent-style create-btn"
            href="/your-profile-react/create-profile"
          >
            Create profile
          </a>
          <p className="main__text">or</p>
          <a
            className="main__btn btn main__btn--additional-accent-style watch-btn"
            href="/your-profile-react/profile-preview"
          >
            watch example
          </a>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export { HomePage };
