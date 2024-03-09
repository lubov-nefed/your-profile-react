import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

function LoginPage() {
  return (
    <>
      <Header /> 
      <main class="main">
            <div class="main__container container">
              <form class="login-form">
                <h1 class="login-form__heading">Welcome back!</h1>
                <div class="login-form__row">
                  <label for="nickname" class="login-form__label">Your name or nickname:</label>
                  <input class="login-form__input" type="text" name="nickname" placeholder="nickname" required/>
                </div>
                <div class="login-form__row">
                  <label for="e-mail" class="login-form__label">Your e-mail:</label>
                  <input class="login-form__input" type="text" name="e-mail" placeholder="e-mail" required/>
                </div>
                <div class="login-form__row">
                  <label for="password" class="login-form__label">Your password:</label>
                  <input class="login-form__input" type="password" name="password" placeholder="password" required/>
                </div>
                <button class="login-form__submit login-form__submit--main-accent-style btn">Login</button>
              </form>

            </div>
        </main>
      <Footer />
    </>
  );
}
export { LoginPage };
