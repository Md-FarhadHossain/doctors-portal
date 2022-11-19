import React from "react";
import { Link } from "react-router-dom";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import qoute from '../../assets/icons/quote.svg'


const Testimonial = () => {
  const cardData = [
    {
      id: 1,
      name: "Tom H.",
      review:
        "It was honestly the best dentist experience I’ve ever had! They were so excited when I arrived for my first visit and they were very personable. I loved that they took the time to explain what they noticed and shared positives as well. I am so happy I switched over and will be looking forward to going to the dentist now!",
      image: people1,
      location: 'California'
    },
    {
      id: 2,
      name: "Kristin A.",
      review:
        "The staff was Very professional and pleasant, greeting me like a friend. The dentist was great and took the time to make me feel at ease, he explained everything and offered me multiple treatment options. I highly recommend USA Dental if you are looking for a new dentist in the Tradition area of Port Saint Lucie.",
      image: people2,
      location: 'New York'
    },
    {
      id: 3,
      name: "Ashley D.",
      review:
        "Really enjoyed my first visit. I was greeted warmly when I arrived, the assistant was great with my x-rays and the Dr was very knowledgeable and kind. I’m very glad I switched to USA Dental. The office is very clean with all the latest technology. Highly recommend and 2 of my co-workers have already made appointments.",
      image: people3,
      location: 'Washington'
    },
  ];

  

  return (
    <section className="my-24">


      <div className="container mx-auto px-4 lg-px-0 lg:py-0 py-16 relative">
        <div className="absolute right-0 rotate-180 -top-16">
            <img className="lg:w-[70%] w-[40%] " src={qoute} alt="" />
        </div>
        <div className="mb-24">
          <h4 className="font-bold text-secondary mb-4">Testimonial</h4>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
            cardData.map(card => <div key={card.id} className='shadow-lg rounded-lg py-6 px-8'>
                <div>
                    <p>{card.review.length > 100 ? <>{card.review.substring(0,160)} <Link className="link text-blue-500">see more</Link></> : card.review}</p>
                </div>

                <div className="flex items-center mb-4 mt-6">
                    <img className="w-[4rem] rounded-full border-secondary border-4 " src={card.image} alt="" />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">{card.name}</h3>
                        <p> {card.location}</p>
                    </div>
                </div>
            </div>)
        }
    </div>

      </div>
    </section>
  );
};

export default Testimonial;
