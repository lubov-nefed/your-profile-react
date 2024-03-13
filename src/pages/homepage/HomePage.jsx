import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Container } from "../../components/Container/Container.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <Container className={"main__container"}>
          <p className="main__subheading">welcome to</p>
          <img
            className="main__heading-img"
            srcSet="
                    ./images/main-heading-img-608w.svg 608w,
                    ./images/main-heading-img-421w.svg 421w,
                    ./images/main-heading-img-168w.svg 168w"
            sizes="
                    (min-width: 1200px) 608px,
                    (min-width: 700px) 421px,
                    (max-width: 699px) 168px"
            src="./images/main-heading-img-608w.svg"
            alt="Your Profile big logo"
          />
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
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export { HomePage };
