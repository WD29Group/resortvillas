import ChangeTopBG from "../ReUse/ChangeTopBG";
import Subscribe from "./Subscribe"
import Footer from "../ReUse/Footer";
function News() {
  return (
    <>
      <Subscribe />
      <div className="bkg2"></div>;
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <Footer scrollAmount="-10" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
  
}

export default News;
