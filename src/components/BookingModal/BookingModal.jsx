import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookingModal = ({ treactment,setTreatment, selectedDate }) => {
  const { _id, name, slots } = treactment;
  
  const date = format(selectedDate, "PP");

  const {register, handleSubmit} = useForm()

  const onSubmit = data => {
    
    console.log(data)
    setTreatment(null)
    toast.success('Appointment Booked Successfully!')
    
  }
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
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 grid-cols-1">
            <input
              type="text"
              value={date}
              {...register('date')}
            //   disabled
              placeholder="Type"
              className="input border-none pointer-events-none input-accent w-full bg-base-200"
            />

            <select {...register('slot')} className="select select-accent w-full">
              
              {
                slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
              }
              
            </select>

            <input
              type="text"
              {...register('name')}
              placeholder="Name"
              className="input input-bordered input-accent w-full"
            />
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              className="input input-bordered input-accent w-full"
            />
            <input
              type="number"
              {...register('number')}
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
