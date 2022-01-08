import React, { useEffect } from "react";
import DefaultLayout from "src/components/Layout/DefaultLayout";
import FeatureCharacters from "./components/FeatureCharacters";
import MoreCaracters from "./components/MoreCaracters";
import TopSection from "./components/TopSection";
import { Content } from "./styles";

const Home = () => {
  useEffect(() => {
    document.title = "Marvel | Characters";
  }, []);
  return (
    <DefaultLayout>
      <Content>
        <TopSection />
        <FeatureCharacters />
        <MoreCaracters />
      </Content>
    </DefaultLayout>
  );
};

export default Home;
