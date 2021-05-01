import React, { lazy } from "react";
import { useSelector } from "react-redux";
// Components
const CatalogueList = lazy(() => import("../CatalogueList"));

// Redux

const Home = () => {
  const catalogue = useSelector((state) => state.catalogue.catalogue);
  return (
    <div className="home page">
      <CatalogueList list={catalogue} />
    </div>
  );
};
export default Home;
