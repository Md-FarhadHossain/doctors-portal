import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treactment, selectedDate }) => {
  const { _id, name, slots } = treactment;
  console.log(treactment)
  const date = format(selectedDate, "PP");
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="grid gap-4 grid-cols-1">
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type"
              className="input input-bordered input-accent w-full"
            />

            <select name='slot' className="select select-accent w-full">
              
              {
                slots?.map(slot => <option value={slot}>{slot}</option>)
              }
              
            </select>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-accent w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered input-accent w-full"
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered input-accent w-full"
            />
            <br />
            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
