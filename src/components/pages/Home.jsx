import React, { lazy } from "react";

// Redux
import { useSelector } from "react-redux";

// Translation
import { useTranslation } from "react-i18next";

// Components
const List = lazy(() => import("../lists/List"));

const Home = () => {
  const { t } = useTranslation();

  const catalogue = useSelector((state) => state.catalogue.catalogue);

  return (
    <div className="home page">
      <div className="page__title">{t("titles.home")}</div>
      <List name="catalogue" list={catalogue} />
    </div>
  );
};
export default Home;
