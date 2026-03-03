import React from "react";
import navImg from "../../assets/logo.png";
import currency from "../../assets/Currency.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="w-[50px] h-[50px] text-xl">
            <img src={navImg} alt="Navbar image comming" />
          </a>
        </div>
        <div className="flex">
          <span className="mr-1">600000000000</span>
          <span className="mr-1">Coin</span>
          <img src={currency} alt="currency" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
