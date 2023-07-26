import React from "react";
import { Footer, HeroAction, Template } from "../../components/group";

const HomePage = () => {
  return (
    <div>
      <Template>
        {/* HeroAction */}
        <HeroAction />
        <Footer />
      </Template>
    </div>
  );
};

export default HomePage;
