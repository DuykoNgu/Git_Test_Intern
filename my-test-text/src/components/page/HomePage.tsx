import Hero from "../common/Hero";
import Feature from "../common/Feature";
import Footer from "./../layout/Footer";
import Header from "../layout/Header";
import Testimonials from "../common/Testimonials";

const HomePage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Feature />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
