"use client";
import { useSession } from "next-auth/react";

export default function page() {
  const session = useSession();
  console.log(session);
  async function handleAddEvent(e) {
    // Fixed typo: 'handelAddEvent' to 'handleAddEvent'

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
      time: formData.get("time"),
      location: formData.get("location"),
      organizerId: session?.data?.email, // Replace with actual organizer ID

      ticketPrice: parseFloat(formData.get("ticketPrice")), // Fixed key from 'ticketPrice' to 'price' to match input name
      photo: formData.get("photo"), // Added photo URL field
      createdAt: new Date(),
    };

    const res = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
  }
  return (
    <>
      <section>
        <div>
          <form
            onSubmit={handleAddEvent} // Fixed typo: 'handelAddEvent' to 'handleAddEvent'
            className="max-w-[500px] mx-auto p-5 shadow-md mt-4 border rounded-xl flex flex-col gap-3"
          >
            <h1 className="text-2xl font-Mon font-semibold text-center">
              Add Event{" "}
            </h1>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">
                Event Name:
              </label>
              <input
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                placeholder="Enter the title of an Event" // Fixed wording for clarity
                type="text"
                name="title"
                required // Added required attribute for validation
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
                required // Added required attribute for validation
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter the proper location of an Event"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                required // Added required attribute for validation
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Date</label>
              <input
                type="date"
                name="date"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                required // Added required attribute for validation
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Time</label>
              <input
                type="time"
                name="time"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                required // Added required attribute for validation
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">
                Ticket Price
              </label>
              <input
                type="number"
                name="ticketPrice" // Fixed name to match the data object
                placeholder="Enter the total ticket price of an Event"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                required // Added required attribute for validation
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium font-Mon">Photo URL</label>
              <input
                type="text"
                name="photo" // Added input for photo URL
                placeholder="Enter the photo URL of the Event"
                className="border px-4 py-2 rounded-md mt-3 font-Mon"
                required // Added required attribute for validation
              />
            </div>
            <button
              type="submit"
              className="border px-4 py-2 block rounded-md mt-3 font-Mon"
            >
              Add Event
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
