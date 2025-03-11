import AddEventForm from "@/components/Dashboard/AddEventForm";
import { MetricsCard } from "@/components/Dashboard/MetricsCard";
import { StatsChart } from "@/components/Dashboard/StatsChart";
import { UserAttend } from "@/components/Dashboard/UserAttend";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { MetricsCard } from "@/components/metrics-card";
// import { StatsChart } from "@/components/stats-chart";
// import { VaultTable } from "@/components/vault-table";
import {
  BarChart3,
  ChevronDown,
  Globe,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Wallet,
} from "lucide-react";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <aside className="border-r bg-black backdrop-blur">
          <div className="flex h-16 items-center gap-2 border-b px-6">
            <Wallet className="h-6 w-6" />
            <span className="font-bold">Vaultify</span>
          </div>
          <div className="px-4 py-4">
            <Input placeholder="Search" className="bg-black" />
          </div>
          <nav className="space-y-2 px-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Statistics & Income
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Globe className="h-4 w-4" />
              Market
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Funding
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Wallet className="h-4 w-4" />
              Yield Vaults
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LifeBuoy className="h-4 w-4" />
              Support
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </aside>
        <main className="min-h-screen p-6">{children}</main>
      </div>
    </div>
  );
}
