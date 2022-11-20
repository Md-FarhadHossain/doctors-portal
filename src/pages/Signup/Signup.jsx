import React from "react";
import login from '../../assets/images/login.png'

const Signup = () => {
  return (
    <div>
        {/* <h1 className="text-4xl font-bold text-primary text-center mt-8">Login Now!</h1> */}
      <div className="hero h-[80vh] w-full">
        <div className="hero-content w-full flex-col">
          
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
            <h2 className="text-center text-xl">Sign Up </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-accent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered input-accent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered input-accent"
                />
                
              </div>
              <div className="form-control mt-6">
              <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Sign Up</button>
              </div>
              <label className="text-center">
                    <span className="label-text-alt mr-2">All ready have an accout?</span>
                  <a href="#" className="label-text-alt link link-hover text-secondary">
                    Login Here
                  </a>
                </label>

                <div className="divider">OR</div>

                <div className="form-control">
              <button className="btn border-gray-500 no-animation hover:text-white font-semibold text-gray-600 border-2 bg-transparent">CONTINUE WITH GOOGLE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
