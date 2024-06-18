import { ContextProvider } from "./Components/utils/global.context";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
