import React from "react";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
const Feature = () => {
  return (
    <section className="features">
      <div className="features_header">
        <h2>Features</h2>
        <span>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </span>
      </div>
      <div className="features_main">
        <ul className="features_list">
          {/* feature 1 */}
          <li className="features_item">
            <img src={img1} alt="img1" className="item_img" />
            <div className="item_main">
              <div className="item_main_wrapper">
                {" "}
                <h3 className="item_header">Search Data</h3>
                <p className="item_content">
                  Don’t worry if your data is very large, the Data Warehoue
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </p>
                <a href="#" className="item_more">
                  Learn more
                  <span className="btn_icon material-icons">trending_flat</span>
                </a>
              </div>
            </div>
          </li>
          {/* feature 2 */}
          <li className="features_item">
            <img src={img2} alt="img2" className="item_img" />
            <div className="item_main">
              <div className="item_main_wrapper">
                {" "}
                <h3 className="item_header">24 Hours Access</h3>
                <p className="item_content">
                  Access is given 24 hours a full morning to night and meet
                  again in the morning, giving you comfort when you need data
                  when urgent.
                </p>
                <a href="#" className="item_more">
                  Learn more
                  <span className="btn_icon material-icons">trending_flat</span>
                </a>
              </div>
            </div>
          </li>
          {/* feature 3 */}
          <li className="features_item">
            <img src={img3} alt="img3" className="item_img" />
            <div className="item_main">
              <div className="item_main_wrapper">
                {" "}
                <h3 className="item_header">Print Out</h3>
                <p className="item_content">
                  Print out service gives you convenience if someday you need
                  print data, just edit it all and just print it.
                </p>
                <a href="#" className="item_more">
                  Learn more
                  <span className="btn_icon material-icons">trending_flat</span>
                </a>
              </div>
            </div>
          </li>
          {/* feature 4 */}
          <li className="features_item">
            <img src={img4} alt="img4" className="item_img" />
            <div className="item_main">
              <div className="item_main_wrapper">
                {" "}
                <h3 className="item_header">Security Code</h3>
                <p className="item_content">
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <a href="#" className="item_more">
                  Learn more
                  <span className="btn_icon material-icons">trending_flat</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feature;
