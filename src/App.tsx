import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="flex items-start h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <h1>oi</h1>
      </div>
    </div>
  );
}

export default App;
