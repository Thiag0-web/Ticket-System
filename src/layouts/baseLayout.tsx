import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export function BaseLayout() {

    const [open, setOpen] = useState(true);

  return (
    <div className="flex items-start h-screen bg-[#F9F9FB]">
      <Sidebar openMenu={open} />
      <div className="flex-1 ">
        <Header setOpenMenu={setOpen} />
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-4">
            <Outlet/>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
