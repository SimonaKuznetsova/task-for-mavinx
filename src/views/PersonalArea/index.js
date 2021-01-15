import React from "react";
import { reduxForm, Field } from "redux-form";
import "styles/Header.scss";

const PersonalArea = ({ handleSubmit }) => {
  return (
    <div className="personal-area">
      <h1 className="personal-area__title">Личный кабинет</h1>

      <form onSubmit={handleSubmit}>
        <div className="personal-area__input">
          Новое имя
          <Field name="name" type="text" component="input" />
        </div>

        <div className="personal-area__input">
          Новая фамилия
          <Field name="surname" type="text" component="input" />
        </div>

        <div className="personal-area__input">
          Новое название заказчика
          <Field name="name-customer" type="text" component="input" />
        </div>

        <div className="personal-area__input">
          Новая роль заказчика
          <Field
            name="role"
            type="number"
            component="input"
            placeholder="1-поставщик,2-заказчик"
          />
        </div>
        <button type="submit" className="personal-area__submit">
          Сохранить
        </button>
      </form>
    </div>
  );
};

const validate = () => {
  return {};
};

export default reduxForm({
  form: "personalArea",
  validate,
})(PersonalArea);
