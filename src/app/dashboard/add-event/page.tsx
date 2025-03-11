import AddEventForm from "@/components/Dashboard/AddEventForm";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Create An Event</h1>
          <div className="text-sm text-muted-foreground">
            Aug 13, 2023 - Aug 18, 2023
          </div>
        </div>
        <Button variant="outline" className="gap-2 bg-black">
          Ethereum Network
          {/* <ChevronDown className="h-4 w-4" /> */}
        </Button>
      </div>
      <AddEventForm />
    </div>
  );
}
