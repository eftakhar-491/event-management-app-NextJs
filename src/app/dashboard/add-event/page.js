import React from "react";

export default function page() {
  return (
    <>
      <section>
        <div>
          <form className="max-w-[500px] mx-auto p-5 shadow-md mt-4 border rounded-xl flex flex-col gap-3">
            <h1 className="text-2xl font-Mon font-semibold text-center">
              Add Event{" "}
            </h1>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">
                Event Name:
              </label>
              <input
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                placeholder="Enter the title on an Event"
                type="text"
                name="title"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">
                Description:
              </label>
              <textarea
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                rows="5"
                placeholder="Enter the description of an Event"
                name="description"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter the proper location of an Event"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Date</label>
              <input
                type="date"
                name="date"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Time</label>
              <input
                type="time"
                name="time"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">
                Ticket Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter the total ticket price of an Event"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
              />
            </div>
            <button className="border px-4 py-2 block rounded-md mt-3 font-Mon">
              Add Event
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
