import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Nav() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-[1400px] mx-auto px-[5%] py-2 lg:px-[40px] flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">
              Events <span className="text-[#077763]">.</span>
            </h1>
          </div>

          <div className="items-center hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                <Link href="/">
                  <NavigationMenuItem>Home</NavigationMenuItem>
                </Link>
                <Link href="/events">
                  <NavigationMenuItem>Events</NavigationMenuItem>
                </Link>
                <Link href="/organizer">
                  <NavigationMenuItem>Organizer</NavigationMenuItem>
                </Link>
                <Link href="/dashboard">
                  <NavigationMenuItem>Dashboard</NavigationMenuItem>
                </Link>
                <Link href="/login">
                  <NavigationMenuItem>Login</NavigationMenuItem>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden block ">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="md:hidden block bg-black text-white mr-10">
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>Event</DropdownMenuItem>
                <DropdownMenuItem>Organizer</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Login</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
