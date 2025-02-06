export default async function page(context) {
  const companyParams = await context.params;

  return (
    <>
      <section>
        <div className="">
          <div className="h-[550px] bg-[linear-gradient(to_right,#1B8ABF,#473FAF,#1E42B2,#416FE7)]">
            <div className="flex items-center justify-center h-full max-w-[1440px] mx-auto px-[5%]">
              <div className="w-1/2 ">
                <h2 className="font-Kon text-white ">Party event organizer</h2>
                <h1 className="text-6xl font-Mon font-semibold text-white">
                  Company name
                </h1>
                <p className="md:mr-10 text-white text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  velit nostrum voluptatibus, sapiente porro consequatur
                  repellat deleniti culpa magni sequi.
                </p>
                <button className="text-white mt-3 hover:border-[#6DFFFF] border flex gap-2 rounded-2xl items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-[#36269D] hover:to-[#7C397F] from-[#7C397F] to-[#36269D] transition-colors duration-500  rounded-4xl cursor-pointer ">
                  Show all Event
                </button>
              </div>
              <div className="w-1/2 h-[350px]">
                <img className="h-full w-full" src="/bg.jpg" alt="hero" />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-Mon text-center font-semibold">
                All Events
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus, corrupti!
              </p>
            </div>
            {/* card */}
            <div className="mt-6 max-w-[1440px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border p-5 shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full rounded-md h-48 object-cover"
                  src="/bg.jpg"
                  alt="Event 1"
                />
                <div className="mt-4 font-Mon">
                  <h3 className="mb-2 text-xl font-Mon font-semibold">
                    Event Title 1
                  </h3>
                  <hr />
                  <p className=" mt-1 text-sm">
                    Event description goes here. It provides a brief overview of
                    the event.
                  </p>
                  <p>Location: </p>
                  <p>Date & Time:</p>
                  <p>Price:</p>
                  <button className="w-full text-center justify-center text-white mt-3 hover:border-[#6DFFFF] border flex gap-2 rounded-2xl items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-[#36269D] hover:to-[#7C397F] from-[#7C397F] to-[#36269D] transition-colors duration-500  rounded-4xl cursor-pointer ">
                    Show Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
