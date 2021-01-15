import React from "react";
import "styles/Home.scss";
import Arrow from "icons/Arrow";

export const Services = () => {
  const n = 8;

  const blocks = [...Array(n)].map((e, i) => (
    <div className="home__services-card">
      <div className="home__services-left">
        <h2 className="home__services-title">Дизайн сайта UI и UX</h2>

        <p className="home__services-info">
          Рекламные компании говорят, что реклама необходима и важна. Он
          информирует людей о новых продуктах. Рекламные щиты на улице делают
          нашу среду яркой.
        </p>

        <span className="home__services-item">#Landing-page</span>
        <span className="home__services-item">#Логотип</span>
        <span className="home__services-item">#Промо-сайт</span>
      </div>

      <div className="home__services-right">
        <h1 className="home__services-price">
          1 840$
          <span className="home__services-price-small">1-2 месяца</span>
        </h1>
      </div>
    </div>
  ));

  return (
    <div className="home__services">
      <h1 className="home__title">
        Найдено
        <span className="home__services-small">(192 услуги)</span>
      </h1>

      <div className="home__services-list">{blocks}</div>

      <div className="home__services-pages">
        <div className="home__back">
          <Arrow />
          Назад
        </div>

        <span>
          1 <b className="home__current-page">2</b> 3 4 ... 12 13
        </span>

        <div className="home__forward">
          Вперед <Arrow />
        </div>
      </div>
    </div>
  );
};
