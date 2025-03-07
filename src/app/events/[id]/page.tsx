"use client";
import { Background } from "@/components/Shared/Background";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      <section></section>
    </>
  );
}
