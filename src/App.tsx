import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

function App() {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex items-start h-screen">
      <Sidebar openMenu={open}/>
      <div className="flex-1">
        <Header setOpenMenu={setOpen}/>
        <h1>oi</h1>
      </div>
    </div>
  );
}

export default App;
