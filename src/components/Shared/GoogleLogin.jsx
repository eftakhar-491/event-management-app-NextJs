"use client";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function GoogleLogin() {
  const handelGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/" });
  };
  return (
    <div
      onClick={handelGoogleLogin}
      className="text-white text-center mt-4 font-Mon border border-white rounded-lg px-4 py-2 w-full cursor-pointer hover:bg-white hover:text-black transition-colors duration-500"
    >
      Continue with Google
    </div>
  );
}
