import React from "react";
import "styles/Home.scss";
import Add from "icons/Add";
import Close from "icons/Close";

export const Filter = () => {
  return (
    <div className="home__filter">
      <h1 className="home__title">
        Фильтры
        <span className="home__title-small">Очистить</span>
      </h1>

      <div className="home__categories">
        <h2 className="home__categories-title">
          Категории<span className="home__cat-title-small">(4)</span>
        </h2>

        <div className="home__add-category">
          <input
            type="text"
            placeholder="Название"
            className="home__name-category"
          />
          <Add />
        </div>

        <div className="home__category-list">
          <span className="home__category-item">#Логотип</span>
          <span className="home__category-item">#Landing-page</span>
          <span className="home__category-item">#Промо-сайт</span>
          <span className="home__category-item">
            <Close />
          </span>
        </div>
      </div>

      <div className="home__price">
        <h2 className="home__price-title">Стоимость</h2>

        <div className="home__price-filter">
          <select size="1">
            <option>USD</option>
            <option>UAH</option>
            <option>RUB</option>
          </select>

          <input type="number" placeholder="От" className="home__price-from" />
          <input type="number" placeholder="До" className="home__price-to" />
        </div>
      </div>
    </div>
  );
};
