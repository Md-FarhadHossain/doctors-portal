import React from "react";
import treatment from '../../assets/images/treatment.png'

const DentalInfo = () => {
  return (
    <section>
      <div className="cotainer mx-auto px-4 lg:px-0 my-32">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              className="max-w-sm rounded-lg shadow-2xl mr-0 w-full lg:mr-24"
            />
            <div>
              <h1 className="lg:text-5xl text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
              <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.
              </p>
              <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalInfo;
