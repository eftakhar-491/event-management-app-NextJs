import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <section>
      <div className="flex items-center justify-center h-[220px] bg-[linear-gradient(to_right,#1B8ABF,#473FAF,#1E42B2,#416FE7)]">
        <h1 className="text-3xl font-semibold text-white font-Mon ">
          Dashboard
        </h1>
      </div>
      <div className="max-w-[1440px] mx-auto px-[5%] grid grid-cols-[250px_1fr]">
        <aside className=" p-5 shadow-md mt-4 border rounded-xl">
          <div>
            <ul>
              <Link
                className="mb-2 hover:bg-slate-100 border block pl-3 rounded-md"
                href="/dashboard"
              >
                <li>Dashboard</li>
              </Link>
              <Link
                className="mb-2 hover:bg-slate-100 border block pl-3 rounded-md"
                href="/dashboard/add-event"
              >
                <li>Add Event</li>
              </Link>
              <Link
                className="border block pl-3 rounded-md"
                href="/dashboard/overview"
              >
                <li>overview</li>
              </Link>

              <li>
                <a href="/dashboard/settings">Settings</a>
              </li>
            </ul>
          </div>
        </aside>
        <main>{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
