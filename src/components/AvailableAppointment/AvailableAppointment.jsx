import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treactment, setTreatment] = useState(null)
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAppointmentOptions(data);
      });
  }, []);
  return (
    <div className="my-8 container mx-auto px-4 lg:px-0 py-16">
      <div className="text-center mb-8">
        <h1 className="text-center font-semibold text-secondary text-2xl">
          Available Services on {format(selectedDate, "PP")}
        </h1>
        <p className="text-xl mt-6">Please select a service.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
        {appointmentOptions.map((option) => (
          <div
            key={option._id}
            className="card bg-base-100 py-2 leading-10 shadow-xl"
          >
            <div className="card-body text-center">
              <h2 className="text-2xl font-semibold text-secondary">
                {option.name}
              </h2>
              <p>
                {option.slots.length}
                {option.slots.length > 1 ? "spaces" : "space"} available
              </p>
              <div className="card-actions justify-center">
                
                <label disabled={option.slots.length === 0} onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
    treactment && <BookingModal setTreatment={setTreatment} selectedDate={selectedDate} treactment={treactment} />
      }
    </div>
  );
};

export default AvailableAppointment;
