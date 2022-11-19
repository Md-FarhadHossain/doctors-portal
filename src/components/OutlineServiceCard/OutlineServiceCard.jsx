import React from "react";
import { FaRegClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const OutlineServiceCard = () => {
  const cardData = [
    {
        id: 1,
      icon: <FaRegClock />,
      title: "Opening Hours",
      description: "The production time of the production unit.",
      bgColor: 'from-secondary to-primary'
    },
    {
        id: 2,
      icon: <FaMapMarkerAlt />,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bgColor: 'bg-darkGray'
    },
    {
        id: 3,
      icon: <FaPhoneAlt />,
      title: "Contact us now",
      description: "+000 123 456789",
      bgColor: 'from-secondary to-primary'
    },
  ];

  return (
    <>
      <div className="grid container mx-auto lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 my-16 px-4 lg:px-0">
      {cardData.map((card) => (
        <>
          <div key={card.id} className={`flex items-center py-12 px-6 bg-gray-800 text-white  rounded-lg leading-8 bg-gradient-to-r ${card.bgColor}`}>
            <div className="mr-4">
              <span className="text-6xl">{card.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        </>
      ))}
      </div>
    </>
  );
};

export default OutlineServiceCard;
