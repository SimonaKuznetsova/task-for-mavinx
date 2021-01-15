import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import emailValidator from "email-validator";
import "styles/Sign.scss";
import { ErrorField } from "views/ErrorField";

function SignInForm({ handleSubmit }) {
  return (
    <div className="sign">
      <form className="sign__form" onSubmit={handleSubmit}>
        <h1 className="sign__title">Sign In</h1>
        <Field
          name="email"
          component={ErrorField}
          type="text"
          placeholder="Email"
          className="sign__input"
        />

        <Field
          name="password"
          component={ErrorField}
          type="password"
          placeholder="Password"
          className="sign__input"
        />

        <button type="submit" className="sign__submit">
          Sign In
        </button>

        <span>
          No account yet?{" "}
          <Link className="link" to="/sign-up">
            Sign Up{" "}
          </Link>
        </span>
      </form>
    </div>
  );
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) errors.email = "Email is required!";
  else if (!emailValidator.validate(email)) errors.email = "Invalid email!";

  if (!password) errors.password = "Password is required!";
  else if (password.length < 6) errors.password = "To short!";

  return errors;
};

export default reduxForm({
  form: "signIn",
  validate,
})(SignInForm);
