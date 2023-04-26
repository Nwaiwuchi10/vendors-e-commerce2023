import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container flex-div-foot">
          <div className="box-footer-div">
            <h2>Nchrys</h2>
            <p>
              Plenbright shops is a user-friendly e-commerce platform that helps
              small businesses build an online store and sell online through one
              streamlined dashboard.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box-footer-div">
            <h4>About Us</h4>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box-footer-div">
            <h4>Customer Care</h4>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box-footer-div">
            <h4>Contact Us</h4>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
