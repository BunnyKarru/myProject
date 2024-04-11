import React from "react";
import bgimage from "../background.jpeg";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div>
        <img src={bgimage} alt="Home" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
