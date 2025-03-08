"use client";
import { Background } from "@/components/Shared/Background";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
export default function Page() {
  return (
    <>
      <Background />
      <section className="min-h-[500px] flex items-center justify-center relative bg-black">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Devent Design</h1>
          <p className="text-lg mb-8">EVENT STARTS IN</p>
          <div className="flex justify-center space-x-4 mb-6">
            <div className=" border p-4 rounded-lg">
              <span className="text-2xl">00</span>
              <div>DAYS</div>
            </div>
            <div className="border p-4 rounded-lg">
              <span className="text-2xl">00</span>
              <div>HOURS</div>
            </div>
            <div className="border p-4 rounded-lg">
              <span className="text-2xl">00</span>
              <div>MINUTES</div>
            </div>
            <div className="border p-4 rounded-lg">
              <span className="text-2xl">00</span>
              <div>SECONDS</div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              REGISTER NOW
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-800 text-white">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Description</h2>
              <p className="text-gray-600 mt-2">
                It is the grandiose vision of the Dream World Wide program to
                allow learning of the original Arabic language of the Quran easy
                to learn and accessible regardless of a person's language of
                origin. We want to empower as many students and teachers around
                the world as possible with our unprecedented Qur'anic language
                curriculum and hope to create a worldwide network of students
                that learn from each other and their instructions and remain
                connected indefinitely. Join us today to begin your journey!
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Hours</h2>
              <p className="text-gray-600">
                <span className="font-semibold">Weekday Hours:</span>{" "}
                <span className="text-gray-800">7 PM - 10 PM</span>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Sunday Hours:</span>{" "}
                <span className="text-gray-800">10 AM - 3 PM</span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                How can I contact the organizer with any question?
              </h2>
              <p className="text-gray-600">
                Please visit{" "}
                <a
                  href="https://www.dreamworldwide.net"
                  className="text-blue-600 font-semibold"
                >
                  www.dreamworldwide.net
                </a>
                and refer to the FAQ section for all questions and contact
                information.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Event Location</h2>
              <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin size={40} className="text-purple-600" />
              </div>
              <p className="text-gray-800 font-semibold mt-2">
                Dream World Wide in Jakarta
              </p>
              <p className="text-gray-600">
                Balai Kartini, Nusa Indah Theatre, Jl. Gatot Subroto No. 37,
                Kuningan, Jakarta Selatan, Jakarta, Indonesia
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Tags</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Indonesia Events",
                  "Jakarta Events",
                  "UI",
                  "Thing To Do In Jakarta",
                  "Jakarta Seminar",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 px-3 py-1 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Share With Friends</h2>
              <div className="flex gap-3 mt-2">
                <Facebook size={24} className="text-blue-600 cursor-pointer" />
                <Twitter size={24} className="text-blue-400 cursor-pointer" />
                <Linkedin size={24} className="text-blue-700 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
