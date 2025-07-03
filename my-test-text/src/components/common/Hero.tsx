import React from "react";
import heroimg from "../../assets/img/heroimg.png";
const Hero = () => {
  return (
    <section className="headline">
      <div className="headline_wrapper">
        <h1 className="headline_header">Save your data storage here.</h1>
        <span className="headline_content">
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </span>
        <a href="#" className="btn btn--primary">
          Leam more
        </a>
      </div>
      <img src={heroimg} alt="Hero_Img" className="headline_img" />
    </section>
  );
};

export default Hero;
