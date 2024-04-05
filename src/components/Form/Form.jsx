import "./Form.css";

function Form({ className }) {
  function FormHeading({ text }) {
    return (
      <h1 className={"form__heading " + className + "__heading"}>{text}</h1>
    );
  }

  function FormRow({ labelFor, labelText, inputType }) {
    if (labelFor === "password") {
      return (
        <div className={"form__row " + className + "__row"}>
          <label
            htmlFor={labelFor}
            className={"form__label " + className + "__label"}
          >
            {labelText}
          </label>
          <input
            className={"form__input " + className + "__input"}
            type={inputType}
            id={labelFor}
            placeholder={labelFor}
            minLength="8"
            maxLength="30"
            title="Maximum length is 30."
            required
          />
        </div>
      );
    } else {
      return (
        <div className={"form__row " + className + "__row"}>
          <label
            htmlFor={labelFor}
            className={"form__label " + className + "__label"}
          >
            {labelText}
          </label>
          <input
            className={"form__input " + className + "__input"}
            type={inputType}
            id={labelFor}
            placeholder={labelFor}
            maxLength="100"
            required
          />
        </div>
      );
    }
  }

  function FormBtn({ text }) {
    return (
      <button
        type="submit"
        className={
          className + "__submit btn form__btn form__btn--main-accent-style"
        }
      >
        {text}
      </button>
    );
  }

  if (className === "login-form") {
    return (
      <form className={"form " + className} action="#">
        <FormHeading text="Welcome back!" />
        <FormRow
          labelFor="nickname"
          labelText="Your name or nickname:"
          inputType="text"
        />
        <FormRow labelFor="e-mail" labelText="Your e-mail:" inputType="email" />
        <FormRow
          labelFor="password"
          labelText="Your password:"
          inputType="password"
        />
        <FormBtn text="Login" />
      </form>
    );
  }
  if (className === "create-account-form") {
    return (
      <form className={"form " + className} action="#" noValidate>
        <FormHeading text="Creating an account" />
        <FormRow
          labelFor="nickname"
          labelText="Your name or nickname:"
          inputType="text"
        />
        <p className="create-account-form__err-text" data-for="nickname">
          * Please enter your nickname. Have no ideas? Use our{" "}
          <a className="create-account-form__err-link" href="#">
            helper.
          </a>
        </p>
        <FormRow labelFor="email" labelText="Your e-mail:" inputType="email" />
        <p className="create-account-form__err-text" data-for="email">
          * Please enter your e-mail.
        </p>
        <FormRow
          labelFor="password"
          labelText="Create strong password:"
          inputType="password"
        />
        <p className="create-account-form__err-text" data-for="password">
          * Please create a password.
        </p>
        <div className={className + "__row"}>
          <label htmlFor="" className={className + "__label"}>
            Confirm{" "}
            <a href="#" className={className + "__terms-of-use"}>
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
        <FormBtn text="Create account" />
      </form>
    );
  }
}

export { Form };
