"use client";
import Image from "next/image";

interface ExpandingCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
}

export default function EventCard({
  title,
  description,
  image,
  date,
  time,
  location,
  price,
}: ExpandingCardProps) {
  return (
    <div className="relative border border-gray-300 overflow-hidden min-w-[290px] min-h-[290px] rounded-lg shadow-md group">
      <div className="relative h-full">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-[100px] group-hover:h-[70%] overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-sm text-black mt-3">
            {date} at {time}
          </p>
          <p className="text-sm text-black">{location}</p>
          <p className="text-sm text-black">{price}</p>
          {/* <div className="transition-all duration-300 ease-in-out max-h-[40px] group-hover:max-h-[calc(100%-40px)] overflow-hidden">
           
          </div> */}
        </div>
      </div>
    </div>
  );
}
