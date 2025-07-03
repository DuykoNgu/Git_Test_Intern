import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_second">
          <div className="footer_second_contact-info">
            <h3 className="footer_second-header">
              <a href="#" className="logo-link">
                <span className="dot_purple" />
                <span className="dot_pink" />
              </a>
              DataWarehouse
            </h3>
            <span className="footer_address">
              Warehouse Society, 234
              <br />
              Bahagia Ave Street PRBW 29281
            </span>
            <br />
            <span className="footer_email">info@warehouse.project</span>
            <br />
            <span className="footer_phone-number">1-232-3434 (Main)</span>
          </div>
          <div className="footer_second_about">
            <h3 className="footer_second-header">About</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Profile
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Features
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Careers
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  DW News
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_second_help">
            <h3 className="footer_second-header">Help</h3>
            <ul className="footer_list">
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Support
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Sign up
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Guide
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Reports
                </a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">
                  Q&amp;A
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_second_social-media">
            <h3 className="footer_second-header">Social Media</h3>
          </div>
        </div>
        <div className="footer_third">
          <span className="footer_copyright">
            © Datawarehouse™, 2020. All rights reserved.
            <br />
            Company Registration Number: 21479524.
          </span>
          <a href="#" className="footer_message"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
