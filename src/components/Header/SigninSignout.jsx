"use client";
import Link from "next/link";
import React from "react";
import Logout from "../Shared/Logout";
import { useSession } from "next-auth/react";

export default function SigninSignout() {
  const session = useSession();

  return (
    <>
      {session?.status === "authenticated" ? (
        <Logout />
      ) : (
        <Link href="/login">
          <button>Login</button>
        </Link>
      )}
    </>
  );
}
