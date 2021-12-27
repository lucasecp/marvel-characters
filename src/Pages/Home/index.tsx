import React from "react";
import DefaultLayout from "src/components/Layout/DefaultLayout";
import FeatureCharacters from "./components/FeatureCharacters";
import TopSection from "./components/TopSection";

const Home = () => {
  return (
      <DefaultLayout>
        <TopSection/>
        <FeatureCharacters/>
      </DefaultLayout>
  );
};

export default Home;
