"use client";

import Image from "next/image";
import Link from "next/link";
// import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  image: string;
  tags: string[];
  distance: number;
  venue: string;
  rating: number;
  reviews: number;
  startTime: Date;
  endTime: Date;
  price: number;
}

const dummyEvent: Event = {
  id: "1",
  title: "Concert Jazz Night",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgCPQmyPHrOWxnUvbmQIRwOipjW8woZUreA&s",
  tags: ["Music", "Live"],
  distance: 2.5,
  venue: "Paris Theatre",
  rating: 4.8,
  reviews: 120,
  startTime: new Date("2025-04-10T19:00:00"),
  endTime: new Date("2025-04-10T22:00:00"),
  price: 35,
};

const formatDate = (date: Date, endTime: Date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return `${
    days[date.getDay()]
  }. ${date.getDate()} | ${date.getHours()}h - ${endTime.getHours()}h`;
};

export default function StaticEventCard() {
  return (
    <div className="flex justify-center mt-10 border p-4 rounded-2xl transition-all duration-300 hover:scale-105">
      <Link
        href={`/event/${dummyEvent.id}`}
        className="group relative block w-80"
      >
        <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
          <img
            src={dummyEvent.image}
            alt={dummyEvent.title}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
            onClick={(e) => e.preventDefault()}
          >
            b
          </Button>

          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {dummyEvent.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/80 hover:bg-white"
              >
                {tag}
              </Badge>
            ))}
            <Badge variant="secondary" className="bg-white/80 hover:bg-white">
              {dummyEvent.distance} km
            </Badge>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{dummyEvent.title}</h3>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm">{dummyEvent.rating.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground">
                ({dummyEvent.reviews})
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{dummyEvent.venue}</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {formatDate(dummyEvent.startTime, dummyEvent.endTime)}
            </span>
            <span className="font-medium">Dès {dummyEvent.price}€</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
