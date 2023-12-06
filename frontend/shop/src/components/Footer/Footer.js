import React from "react";
import QuickLinks from "./QuickLinks";
import PartnersSection from "./PartnersSection";
import Legal from "./Legal";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <QuickLinks />
      <PartnersSection />
      <Legal />
      </div>
    </footer>
  );
};

export default Footer;
