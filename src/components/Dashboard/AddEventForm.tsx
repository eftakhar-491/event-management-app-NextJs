"use client";
import React, { useState, FormEvent } from "react";
import { Button } from "../ui/button";

export default function AddEventForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [ticketType, setTicketType] = useState<"Free" | "Paid">("Free");
  const [ticketPrice, setTicketPrice] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-5 rounded-sm">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border rounded p-2 w-full"
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border rounded p-2 w-full"
      />
      <input
        type="file"
        accept="image/*"
        className="border rounded p-2 w-full"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
        className="border rounded p-2 w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        className="border rounded p-2 w-full"
      />
      <select
        value={ticketType}
        onChange={(e) => {
          setTicketType(e.target.value as "Free" | "Paid");
          if (e.target.value === "Free") setTicketPrice(""); // Reset price if Free is selected
        }}
        className="border rounded p-2 w-full"
      >
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>
      {ticketType === "Paid" && (
        <input
          type="number"
          placeholder="Ticket Price"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      )}
      <Button type="submit" className="w-full cursor-pointer">
        Create Event
      </Button>
    </form>
  );
}
