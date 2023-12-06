
import React from 'react';

import amazonLogo from "../../assets/images/payment/amazonpay.svg";
import americanExpressLogo from "../../assets/images/payment/american-express.svg";
import masterCardLogo from "../../assets/images/payment/mastercard.svg";
import paypalLogo from "../../assets/images/payment/paypal.svg";   
import visaLogo from "../../assets/images/payment/visa.svg";
import appStoreLogo from "../../assets/images/appbutton/appstore-btn.svg";
import googlePlayLogo from "../../assets/images/appbutton/googleplay-btn.svg";

const PartnersSection = () => {
  return (
    <div className="border-top py-4">
      <div className="row align-items-center">
        <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
          <ul className="list-inline mb-0">
            <li className="list-inline-item text-dark">Payment Partners</li>
            <li className="list-inline-item">
              <a href="#!"><img src={amazonLogo} alt=""/></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={americanExpressLogo} alt=""/></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={masterCardLogo} alt=""/></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={paypalLogo} alt=""/></a>
            </li>
            <li className="list-inline-item">
              <a href="#!"><img src={visaLogo} alt=""/></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-7 mt-4 mt-md-0">
          <ul className="list-inline mb-0 text-lg-end text-center">
            <li className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with FreshCart</li>
            <li className="list-inline-item ms-4">
              <a href="#!"> <img src={appStoreLogo} alt="" style={{ width: '140px' }}/></a></li>
            <li className="list-inline-item">
              <a href="#!"> <img src={googlePlayLogo} alt="" style={{ width: '140px' }}/></a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default PartnersSection;
