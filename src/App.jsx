import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Galery from "./pages/Galery";
import Booking from "./pages/Booking";
import News from "./pages/News";
import Services from "./pages/Services";
import Weather from "./pages/Weather";
import Resorts from "./pages/Resorts";
import ChangeBackgroundOnScroll from "./pages/ChangeBackgroundOnScroll";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Galery" element={<Galery />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/News" element={<News />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Resorts" element={<Resorts />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
