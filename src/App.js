import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "styles/base.scss";
import Header from "views/Header";
import SignInForm from "views/SignInForm";
import SignUpForm from "views/SignUpForm";
import { signUp, signIn } from "ducks/auth/actions";

function App(props) {
  const handleSignIn = ({ email, password }) => {
    dispatch(signIn(email, password));
  };

  const { registered, auth } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const handleSignUp = ({
    firstName,
    lastName,
    nameCustomer,
    email,
    phone,
    role,
    password,
    passwordConfirmation,
  }) => {
    dispatch(
      signUp(
        firstName,
        lastName,
        nameCustomer,
        email,
        phone,
        role,
        password,
        passwordConfirmation
      )
    );
  };

  return (
    <section className="home">
      <Header />
      <Route exact path="/" render={() => <h1>Start Page!!!</h1>} />
      <Route
        exact
        path="/sign-in"
        render={() => <SignInForm onSubmit={handleSignIn} />}
      />
      <Route
        exact
        path="/sign-up"
        render={() => <SignUpForm onSubmit={handleSignUp} />}
      />
      {registered && <Redirect from="sign-up" to="/sign-in" />}
      {auth && <Redirect from="sign-in" to="/" />}
    </section>
  );
}

export default App;
