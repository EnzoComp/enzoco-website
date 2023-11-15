import React from "react";
// images
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="home">
            <img src={Logo} alt="" width={230} height={230} />
          </a>
          {/* button */}
          <a href="#contact">
            <button className="btn btn-sm">Travailler avec moi</button>{" "}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
