import React from "react";
import UtilNav from "./UtilNav";
import LangNav from "./LangNav";
import PrimaryNav from "./PrimaryNav";

const NavBar = (props) => {
  return (
    <div className="border-bototm">
      <LangNav />
      <UtilNav />
      <PrimaryNav />
    </div>
  );
};

export default NavBar;
