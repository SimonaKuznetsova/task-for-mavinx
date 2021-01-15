import React from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import "styles/Sign.scss";
import emailValidator from "email-validator";
import { ErrorField } from "views/ErrorField";
import { useSelector } from "react-redux";

const SignUpForm = ({ handleSubmit }) => {
  return (
    <div className="sign">
      <form className="sign__form" onSubmit={handleSubmit}>
        <h1 className="sign__title">Sign Up</h1>
        <Field
          name="name"
          component={ErrorField}
          type="text"
          placeholder="First Name"
          className="sign__input"
        />
        <Field
          name="surname"
          component={ErrorField}
          type="text"
          placeholder="Last Name"
          className="sign__input"
        />
        <Field
          name="name_customer"
          component={ErrorField}
          type="text"
          placeholder="Name customer (only for customers)"
          className="sign__input"
        />
        <Field
          name="email"
          component={ErrorField}
          type="text"
          placeholder="Email"
          className="sign__input"
        />
        <Field
          name="phone"
          component={ErrorField}
          type="number"
          placeholder="Phone"
          className="sign__input"
        />
        <Field
          name="role"
          component={ErrorField}
          type="number"
          placeholder="Enter the number: 1 - provider, 2 - customer"
          className="sign__input"
        />
        <Field
          name="password"
          component={ErrorField}
          type="password"
          placeholder="Password"
          className="sign__input"
        />
        <Field
          name="password_confirmation"
          component={ErrorField}
          type="password"
          placeholder="Password Confirmation"
          className="sign__input"
        />

        <button type="submit" className="sign__submit">
          Sign Up
        </button>

        <span>
          Already have an account?{" "}
          <Link className="link" to="/sign-in">
            Sign In{" "}
          </Link>
        </span>
      </form>
    </div>
  );
};

const validate = ({
  email,
  password,
  password_confirmation,
  phone,
  role,
  name_customer,
  name,
  surname,
}) => {
  const errors = {};

  if (!email) errors.email = "Email is required!";
  else if (!emailValidator.validate(email)) errors.email = "Invalid email!";

  if (!password) errors.password = "Password is required!";
  else if (password.length < 6) errors.password = "To short!";

  if (!password_confirmation)
    errors.password_confirmation = "Password confirmation is required!";
  else if (password_confirmation.length < 6)
    errors.password_confirmation = "To short!";
  else if (password_confirmation !== password)
    errors.password_confirmation = "Doesn't match";

  if (!phone) errors.phone = "Phone is required!";
  else if (phone.length !== 12) errors.phone = "Invalid phone!";

  if (!role) errors.role = "Role is required!";
  // else if (role !== 1 || role !== 2) errors.role = "Only 1 or 2!";

  if (role === 2 && !name_customer)
    errors.name_customer = "Name customer is required!";
  // else if (nameCustomer.length < 2) errors.nameCustomer = "To short!";

  if (!name) errors.name = "First Name is required!";
  else if (name.length < 2) errors.name = "To short!";

  if (!surname) errors.surname = "Last Name is required!";
  else if (surname.length < 2) errors.surname = "To short!";

  return errors;
};

export default reduxForm({
  form: "signUp",
  validate,
})(SignUpForm);
