import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "styles/base.scss";
import Header from "views/Header";
import SignInForm from "views/SignInForm";
import SignUpForm from "views/SignUpForm";
import { signUp, signIn } from "ducks/auth/actions";
import { editData } from "ducks/edit-data/actions";
import { Home } from "views/Home";
import PersonalArea from "views/PersonalArea";

function App() {
  const handleSignIn = (data) => {
    dispatch(signIn(data));
  };

  const { registered, auth, token } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const handleSignUp = (data) => dispatch(signUp(data));

  const handleSubmit = (data) => {
    dispatch(editData(data, token));
  };

  return (
    <section className="all-pages">
      <Header />
      <Route
        exact
        path="/"
        render={() => (auth ? <Home /> : <Redirect to="/sign-in" />)}
      />
      <Route
        path="/personal-area"
        render={() =>
          auth ? (
            <PersonalArea onSubmit={handleSubmit} />
          ) : (
            <Redirect to="/sign-in" />
          )
        }
      />
      <Route
        exact
        path="/sign-in"
        render={() =>
          auth ? (
            <Redirect to="/personal-area" />
          ) : (
            <SignInForm onSubmit={handleSignIn} />
          )
        }
      />
      <Route
        exact
        path="/sign-up"
        render={() =>
          auth ? (
            <Redirect to="/personal-area" />
          ) : (
            <SignUpForm onSubmit={handleSignUp} />
          )
        }
      />
    </section>
  );
}

export default App;
