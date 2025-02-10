"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import GoogleLogin from "@/components/Shared/GoogleLogin";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function page() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    organizeName: "",
    photo: "",
    category: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    const res = await fetch("/api/signup", {
      method: "POST",

      body: JSON.stringify({ ...data, role: "User" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
  };
  const handleOrganizerSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",

      body: JSON.stringify({ ...formData, role: "Organizer" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.message === "Organizer already exists") {
      alert(result.message);
    }
    if (result.insertedId) {
      alert("Account created successfully");
      redirect("/login");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_right,#1B8ABF,#473FAF,#1E42B2,#416FE7)]">
      <div className="backdrop-blur-lg mt-16 w-full lg:w-1/2 mx-auto rounded-lg bg-slate-950/30 p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-white font-Mon">
          Register Account As!
        </h1>
        <Tabs defaultValue="account" className="w-full mt-5">
          <TabsList className="bg-white/20 w-full">
            <TabsTrigger className="w-1/2 text-black" value="account">
              User Account
            </TabsTrigger>
            <TabsTrigger className="w-1/2 text-black" value="Organizer">
              Organizer Account
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <form onSubmit={handelSubmit} className="font-Mon text-white">
              <div>
                <label
                  className="font-medium text-lg text-white mb-1 block"
                  htmlFor="userName"
                >
                  Full Name
                </label>
                <Input
                  required
                  type="text"
                  name="userName"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label
                  className="mt-4 font-medium text-lg text-white mb-1 block"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="mt-4 font-medium text-lg text-white mb-1 block"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  required
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <Button
                type="submit"
                className="w-full hover:text-white text-white mt-4"
              >
                Create an Account
              </Button>
            </form>
            <p className="text-white text-center mt-4">--- OR ---</p>
            <GoogleLogin />
          </TabsContent>
          <TabsContent value="Organizer">
            <form
              className="text-white font-Mon"
              onSubmit={handleOrganizerSubmit}
            >
              <label
                className="mb-4 font-medium text-xl text-white block"
                htmlFor="email"
              >
                Organizer Account
              </label>
              <hr className="mb-2" />
              <div className="flex items-center gap-4">
                <div className="w-1/2">
                  <label
                    className="font-medium text-lg text-white mb-1 block"
                    htmlFor="userName"
                  >
                    Full Name
                  </label>
                  <Input
                    required
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="font-medium text-lg text-white mb-1 block"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mt-4 font-medium text-lg text-white mb-1 block"
                  htmlFor="password"
                >
                  Password
                </label>
                <Input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <label
                className="my-4 font-medium text-xl text-white block"
                htmlFor="email"
              >
                Organizer Details
              </label>
              <hr className="mb-2" />
              <div className="flex items-center gap-4 mb-2">
                <div className="w-1/2">
                  <label
                    className="font-medium text-lg text-white mb-1 block"
                    htmlFor="organizeName"
                  >
                    Organizer Name
                  </label>
                  <Input
                    required
                    type="text"
                    name="organizeName"
                    value={formData.organizeName}
                    onChange={handleChange}
                    placeholder="Enter your Company Name"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="font-medium text-lg text-white mb-1 block"
                    htmlFor="photo"
                  >
                    Photo URL
                  </label>
                  <Input
                    required
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="Organize banner Photo URL"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="font-medium text-lg text-white mb-1 block"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="bg-black/35 w-full border py-[6px] px-2 rounded-md"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="party">Party</option>
                    <option value="Job">Job</option>
                    <option value="Rj">Rj</option>
                  </select>
                </div>
              </div>

              <div className="">
                <label
                  className="font-medium text-lg text-white mb-1 block"
                  htmlFor="description"
                >
                  Description
                </label>
                <Textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="write about your Company"
                />
              </div>

              <Button className="w-full hover:text-white text-white mt-4 hover:border-[#6DFFFF] border flex gap-2 rounded-2xl items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-[#36269D] hover:to-[#7C397F] from-[#7C397F] to-[#36269D] transition-colors duration-500 cursor-pointer ">
                Create an Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        <p className="text-white text-center mt-4 font-Mon">
          Have An account?{" "}
          <Link href="/login">
            <span className="underline">Login</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
