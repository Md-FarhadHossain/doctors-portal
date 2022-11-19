import React from "react";
import "./HeroSection.css";
import chirImage from "../../assets/images/chair.png";

const HeroSection = () => {
  return (
    <section id="hero_section" className="h-[95vh] flex items-center justify-center">
      <div className="hero container mx-auto ">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          {/* Hero left image */}
          <div className="">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Dentistry, also known as dental medicine and oral medicine, is the
              branch of medicine focused on the teeth, gums, and mouth.
            </p>
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
          {/* Hero left image */}

          {/* Hero right content */}

          <img
            src={chirImage}
            className="rounded-lg hidden md:block lg:block w-[70%] shadow-2xl h-full"
          />

          {/* Hero right content end */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
