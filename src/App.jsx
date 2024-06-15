import Context from "./Context/Context";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Context>
        <Navbar />
        <Outlet />
        <Footer />
      </Context>
    </div>
  );
}

export default App;
