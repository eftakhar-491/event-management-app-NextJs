"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleLogin from "@/components/Shared/GoogleLogin";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_right,#1B8ABF,#473FAF,#1E42B2,#416FE7)]">
      <div className="backdrop-blur-lg mt-16 w-full lg:w-1/2 mx-auto rounded-lg bg-slate-950/30 p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-white font-Mon">
          Login to Your Account
        </h1>
        <form className="mb-4 w-full font-Mon text-white">
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
            Login
          </Button>
        </form>
        <p className="text-white text-center">--- OR ---</p>
        <GoogleLogin />
        <p className="mt-2 text-white text-center font-Mon">
          Don't have an account?{" "}
          <Link href="/signup">
            <span className="underline">Register</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
