import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Weather from "./pages/Weather";
import Resorts from "./pages/Resorts";
import Admin from "./pages/Admin";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Resorts" element={<Resorts />} />
          <Route path="/Admin-panel" element={<Admin />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
    
  );
}
export default App;
