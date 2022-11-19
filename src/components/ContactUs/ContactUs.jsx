import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section className="py-16 mt-8" style={{
        background: `url(${appointment}) no-repeat`
    }}>
      <div className="container mx-auto flex flex-col justify-center items-center px-4 lg:px-0 my-32">
        <div className="text-center">
          <h4 className="font-bold text-secondary">Contact Us</h4>
          <h1 className="text-4xl text-white mb-12">Stay connected with us</h1>
        </div>

        <div className="lg:w-1/3 w-full grid gap-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
          <textarea className="textarea textarea-accent w-full h-48 " placeholder="Your message"></textarea>
          </div>

          <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
