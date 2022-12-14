import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Galery from "./Galery";
import Booking from "./Booking";
import News from "./News";
import Services from "./Services";
import Weather from "./Weather";
import Resorts from "./Resorts";
import "./style.css";

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
