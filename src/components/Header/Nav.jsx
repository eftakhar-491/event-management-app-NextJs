import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="font-Mon fixed top-0 left-0 right-0 z-50 backdrop-blur-md text-white shadow-md">
        <div className="max-w-[1440px] py-3 mx-auto px-[5%] flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold"> Event.</h1>
          </div>
          <div className="flex items-center gap-3">
            <ul className="flex gap-3">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li>Events</li>
              </Link>
              {/* <Link href="/">
                <li>Home</li>
              </Link> */}
            </ul>
            <button>Login</button>
            <div className="w-10 h-10 rounded-full border"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
