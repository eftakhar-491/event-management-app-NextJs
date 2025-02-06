import React from "react";

export default async function page(context) {
  console.log(await context.params);
  return (
    <>
      <section className="mb-[125px]">
        <div className="flex flex-col items-center justify-center h-[220px] bg-[linear-gradient(to_right,#1B8ABF,#473FAF,#1E42B2,#416FE7)]">
          <h1 className="text-3xl font-semibold text-white font-Mon ">
            Event title
          </h1>

          <p className="text-lg font-Kon text-white/70">
            Date: 10/5/15 Time: 10.20pm
          </p>
        </div>
        <div className="relative max-w-[1440px] mx-auto px-[5%]">
          <div className="rounded-lg bg-[linear-gradient(to_right,#1B8ABF,#473FAF,#1E42B2,#416FE7)] p-9 mt-16 h-[500px]  ">
            <img
              className="w-full shadow-xl h-full object-cover"
              src="/bg.png"
              alt=""
            />
          </div>
          <div className="backdrop-blur-lg p-8 shadow-2xl rounded-lg text-white bg-slate-800/20 w-1/2 absolute top-40 left-1/2 -translate-x-1/2">
            <h2 className="text-2xl font-bold font-Mon text-center ">
              Event Details
            </h2>
            <p className="text-2xl mt-2 font-Mon font-bold">title</p>
            <p className="mt-2 text-sm font-Mon ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ut
              culpa rerum labore, tenetur quas nam qui sed minus odit!
            </p>
            <p className="mt-2">Date: 15/6/20</p>
            <p className="mt-2">Time: 10:30 PM</p>
            <p className="mt-2">
              <strong>Location:</strong>{" "}
            </p>
            <p className="mt-2">
              <strong>Organizer ID:</strong>
            </p>
            <p className="mt-2">
              <strong>Ticket Price:</strong>{" "}
            </p>
            <button className="w-full text-center justify-center text-white mt-3 hover:border-[#6DFFFF] border flex gap-2 rounded-2xl items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-[#36269D] hover:to-[#7C397F] from-[#7C397F] to-[#36269D] transition-colors duration-500  rounded-4xl cursor-pointer ">
              Book A Ticket
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
