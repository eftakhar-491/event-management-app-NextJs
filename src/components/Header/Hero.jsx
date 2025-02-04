import React from "react";

export default function Hero() {
  return (
    <>
      <section
        style={{
          backgroundRepeat: "no-repeat",
          background: `linear-gradient(
    0deg,
    rgba(0,0,0,0.2),
    rgba(0,0,0,0.2)
  ),url("/bg.png")`,
        }}
        className="w-screen h-[650px] bg-cover bg-center "
      >
        <div className="flex items-center justify-center h-full">
          <div>
            <p className="text-center text-xl font-semibold text-[#6DFFFF]">
              Find Your Next Experience
            </p>
            <h1 className="py-5 text-white text-7xl font-bold font-Mon text-center">
              Discover & Promote Events or <br /> Create An Event.
            </h1>
            <div className="flex items-center gap-5 justify-center mt-2 text-white font-Mon font-semibold">
              <button className="hover:border-[#6DFFFF] border flex gap-2 rounded-2xl items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-[#36269D] hover:to-[#7C397F] from-[#7C397F] to-[#36269D] transition-colors duration-500  rounded-4xl cursor-pointer ">
                Show All Events{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
              <button className="hover:border-[#6DFFFF] border flex gap-2 rounded-2xl items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-[#36269D] hover:to-[#7C397F] from-[#7C397F] to-[#36269D] transition-colors duration-500  rounded-4xl cursor-pointer ">
                Create Event{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
