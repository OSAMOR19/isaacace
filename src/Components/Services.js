import React from "react";
import img1 from "../Images/abt1.svg";
import img2 from "../Images/abt2.svg";
import img3 from "../Images/abt3.svg";
import img4 from "../Images/abt4.svg";

const Services = () => {
  const services = [
    {
      img: img1,
      title: "Group/Corporate Charter",
    },
    {
      img: img2,
      title: "Group/Corporate Charter",
    },
    {
      img: img4,
      title: "Medical Evacuation",
    },
    {
      img: img3,
      title: "Air Helicopters",
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-12">
      <div className="container mt-4 mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="font-['Poppins'] text-gray-600 text-center">
          Get to Know the People Behind the Vision
          </p>
        </div>

        <div className="d-flex flex-row gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;