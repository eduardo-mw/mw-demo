import React from "react";
import UtilNav from "./UtilNav";
import LangNav from "./LangNav";
import PrimaryNav from "./PrimaryNav";

const NavBar = (props) => {
  return (
    <div className="border-bototm">
      <LangNav />
      <UtilNav cartCount="10"/>
      <PrimaryNav />
    </div>
  );
};

export default NavBar;
