import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Container } from "../../components/Container/Container.jsx";

function LoginPage() {
  return (
    <>
      <Header />
      <Main>
        <Container className={"main__container"}>
          <form className="login-form">
            <h1 className="login-form__heading">Welcome back!</h1>
            <div className="login-form__row">
              <label htmlFor="nickname" className="login-form__label">
                Your name or nickname:
              </label>
              <input
                className="login-form__input"
                type="text"
                name="nickname"
                placeholder="nickname"
                required
              />
            </div>
            <div className="login-form__row">
              <label htmlFor="e-mail" className="login-form__label">
                Your e-mail:
              </label>
              <input
                className="login-form__input"
                type="text"
                name="e-mail"
                placeholder="e-mail"
                required
              />
            </div>
            <div className="login-form__row">
              <label htmlFor="password" className="login-form__label">
                Your password:
              </label>
              <input
                className="login-form__input"
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
            <button className="login-form__submit login-form__submit--main-accent-style btn">
              Login
            </button>
          </form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
export { LoginPage };
