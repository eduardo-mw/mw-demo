import React from "react";

const NavItem = (props) => {
  return (
    <li className="nav-item w-100 w-lg-auto">
      <a className="nav-link" href="./dashboard/index.html">
        {props.title}
      </a>
    </li>
  );
};

export default NavItem;
