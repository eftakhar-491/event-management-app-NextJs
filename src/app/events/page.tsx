"use client";
import { Background } from "@/components/Shared/Background";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";

// import SpotLight from "@/components/Shared/SpotLight";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent } from "@/components/ui/select"; // Ensure SelectContent is imported
import StaticEventCard from "@/components/Shared/StaticEventCard";

export default function Page() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2023-12-31T00:00:00").getTime(); // Set your event date here

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Background />
      {/* <SpotLight /> */}
      <section className="">
        <div className="">
          {/* hero bg */}
          <div className="">
            <h1
              style={{
                WebkitTextStroke: "0.9px #077763",
              }}
              className="absolute -z-30 font-extrabold text-transparent text-[300px] top-0 left-1/2 opacity-35 -translate-x-1/2 "
            >
              EVENTS
            </h1>
          </div>
          {/* hero */}
          <section className=" min-h-[500px]  flex items-center justify-center relative">
            <div className="container mx-auto px-4 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center space-y-8"
              >
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center bg-zinc-800/60 rounded-full px-4 py-2 mb-6"
                >
                  <span className="mr-2">🎉</span>
                  <span className="text-gray-300">
                    Choose
                  </span>
                </motion.div> */}

                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
                  Find Your Fevarate Events{" "}
                  <span className="block mt-2">Without Hassle</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                  Create, deploy, and scale your events without any
                  complications. Simple and efficient event management.
                </p>

                <form className="flex items-center justify-center mt-8">
                  <input
                    type="text"
                    placeholder="Search for location..."
                    className="border w-[400px] border-r-0 border-[#077763] rounded-lg px-4 py-2 text-lg"
                  />
                  <select className="border border-x-0  border-gray-300 bg-black rounded-lg px-4 py-[9px] text-lg">
                    <option className="bg-transparent" value="">
                      Select Location
                    </option>
                    <option className="bg-transparent" value="location1">
                      Location 1
                    </option>
                    <option className="bg-transparent" value="location2">
                      Location 2
                    </option>
                    <option className="bg-transparent" value="location3">
                      Location 3
                    </option>
                  </select>
                  <button className="border border-l-0 border-[#077763] rounded-lg px-4 py-2 text-lg">
                    Search
                  </button>
                </form>
              </motion.div>
            </div>
          </section>
          {/* event show */}
          <div className="max-w-[1400px] mx-auto px-[40px] justify-center grid grid-cols-4 gap-4">
            <StaticEventCard />
            <StaticEventCard />
            <StaticEventCard />
            <StaticEventCard />
            <StaticEventCard />
          </div>
          {/* pagination */}
          <div className="my-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="bg-transparent"
                    href="#"
                    isActive={false}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </>
  );
}
