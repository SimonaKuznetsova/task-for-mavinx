import React from "react";
import "styles/Home.scss";
import "styles/Filter.scss";
import "styles/Services.scss";
import { Filter } from "views/Filter";
import { Services } from "views/Services";

export const Home = () => {
  return (
    <>
      <div className="home">
        <Filter />
        <Services />
      </div>
    </>
  );
};
