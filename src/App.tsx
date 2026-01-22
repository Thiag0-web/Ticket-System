import { Toaster } from "./components/ui/sonner";
import { AppRoutes } from "./routes/router";

function App() {

  return (
    <>
    <AppRoutes/>
    <Toaster position="top-center" richColors/>
    </>
    
  );
}

export default App;
