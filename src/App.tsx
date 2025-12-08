import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex items-start h-screen bg-[#505050]">
      <Sidebar openMenu={open} />
      <div className="flex-1 ">
        <Header setOpenMenu={setOpen} />
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div >
            <h1>oi
            </h1>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;
