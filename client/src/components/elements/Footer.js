import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <div>
    <div className="footer-primary">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="footer-info-block">
              <i className="fas fa-map-marker footer-icon" />
              <div className="footer-address">
                <span>11 Spartacus Street</span>
                <span>
                  <strong>Chisinau, Moldova</strong>
                </span>
              </div>
            </div>
            <div className="footer-info-block">
              <i className="fas fa-phone footer-icon" />
              <span>+1 555 123456</span>
            </div>
            <div className="footer-info-block">
              <i className="fas fa-envelope footer-icon" />
              <span>support@company.com</span>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-title">About the company</div>
            <div className="footer-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              distinctio aliquid, omnis velit alias animi corrupti nam sed est
              ab officia asperiores? Provident iure qui voluptate inventore
              fugiat totam voluptatem?
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-secondary">
      © 2018 Titanium - Designed with <i className="fas fa-heart" /> by Glavan
    </div>
  </div>
);

export default Footer;
