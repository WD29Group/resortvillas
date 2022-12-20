import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import News from "./pages/News";
import Services from "./pages/Services";
import Weather from "./pages/Weather";
import Resorts from "./pages/Resorts";
import "./css/style.css";
import Rooms from "./pages/Rooms";


function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/News" element={<News />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Resorts" element={<Resorts />} />
          <Route path="*" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}
export default App;
