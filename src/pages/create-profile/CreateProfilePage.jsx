import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Container } from "../../components/Container/Container.jsx";

function CreateProfilePage() {
  return (
    <>
      <Header />
      <Main>
        <Container className={"main__container"}>
          <form className="create-account-form" noValidate>
            <h1 className="create-account-form__heading">
              Creating an account
            </h1>
            <div className="create-account-form__row">
              <label htmlFor="nickname" className="create-account-form__label">
                Your name or nickname:
              </label>
              <input
                id="nickname"
                type="text"
                className="create-account-form__input"
                placeholder="nickname"
                maxLength="100"
                required
              />
              <p className="create-account-form__err-text" data-for="nickname">
                * Please enter your nickname. Have no ideas? Use our{" "}
                <a className="create-account-form__err-link" href="#">
                  helper.
                </a>
              </p>
            </div>
            <div className="create-account-form__row">
              <label htmlFor="email" className="create-account-form__label">
                Your e-mail:
              </label>
              <input
                id="email"
                type="email"
                className="create-account-form__input"
                placeholder="e-mail"
                required
              />
              <p className="create-account-form__err-text" data-for="email">
                * Please enter your e-mail.
              </p>
            </div>
            <div className="create-account-form__row">
              <label htmlFor="password" className="create-account-form__label">
                Create strong password:
              </label>
              <input
                id="password"
                type="password"
                className="create-account-form__input"
                placeholder="password"
                minLength="8"
                maxLength="30"
                title="Maximum length 30."
                required
              />
              <p className="create-account-form__err-text" data-for="password">
                * Please create a password.
              </p>
            </div>
            <div className="create-account-form__row">
              <label htmlFor="checkbox" className="create-account-form__label">
                Confirm{" "}
                <a
                  href="#"
                  className="create-account-form__terms-of-use"
                  required
                >
                  terms of use
                </a>
              </label>

              <label className="create-account-form__label create-account-form__label--checkbox">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="create-account-form__input--checkbox"
                  required
                />
                <span className="custom-checkbox"></span>
              </label>
              <p className="create-account-form__err-text" data-for="confirm">
                * You need to confirm in order to use Your Profile.
              </p>
            </div>
            <button className="create-account-form__submit create-account-form__submit--main-accent-style btn">
              Create account
            </button>
          </form>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
export { CreateProfilePage };
