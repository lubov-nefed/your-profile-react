import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

function CreateProfilePage() {
  return (
    <>
      <Header />
      <main class="main">
            <div class="main__container container">
                <form class="create-account-form" novalidate>
					<h1 class="create-account-form__heading">Creating an account</h1>
					<div class="create-account-form__row">
						<label for="nickname" class="create-account-form__label">Your name or nickname:</label>
						<input id="nickname" type="text" class="create-account-form__input" placeholder="nickname" maxlength="100"  required />
						<p class="create-account-form__err-text" data-for="nickname">* Please enter your nickname. Have no ideas? Use our <a class="create-account-form__err-link" href="#">helper.</a></p>
					</div>
					<div class="create-account-form__row">
						<label for="email" class="create-account-form__label">Your e-mail:</label>
						<input id="email" type="email" class="create-account-form__input" placeholder="e-mail" required />
						<p class="create-account-form__err-text" data-for="email">* Please enter your e-mail.</p>
					</div>
					<div class="create-account-form__row">
						<label for="password" class="create-account-form__label">Create strong password:</label>
						<input id="password" type="password" class="create-account-form__input" placeholder="password" minlength="8" maxlength="30" title="Maximum length 30." required />
						<p class="create-account-form__err-text" data-for="password">* Please create a password.</p>
					</div>
					<div class="create-account-form__row">
						<label  for="checkbox"  class="create-account-form__label">Confirm <a href="#" class="create-account-form__terms-of-use" required>terms of use</a></label>
						
						<label class="create-account-form__label create-account-form__label--checkbox">
							<input id="checkbox"
							 type="checkbox" class="create-account-form__input--checkbox" required />
							<span class="custom-checkbox"></span>
						</label>
			  <p class="create-account-form__err-text" data-for="confirm">* You need to confirm in order to use Your Profile.</p>
					</div>
					<button class="create-account-form__submit create-account-form__submit--main-accent-style btn">Create account</button>
				</form>

            </div>
        </main>
      <Footer />
    </>
  );
}
export { CreateProfilePage };
