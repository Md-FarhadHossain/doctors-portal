import React from "react";
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
  return (
    <section style={{
        background: `url(${appointment})`
    }} className='mb-32 mt-40'>
      <div className="container mx-auto px-4 lg-px-0 lg:py-0 py-16">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor}
              className="w-full -mt-36 -mb-4 hidden lg:block"
            />
            <div className="text-white ">
              <h4 className="font-bold text-secondary mb-4">Appointment</h4>
              <h1 className="text-4xl">Make an appointment Today</h1>
              <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br /> The point of using  Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using <br /> 'Content here, content here', making it look like readable English. <br /> Many desktop publishing packages and web page
              </p>
              <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
