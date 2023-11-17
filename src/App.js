import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
// google analytics
import ReactGA from "react-ga";

const TRACKING_ID = "G-85C2DL1HTG";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
