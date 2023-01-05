import ChangeTopBG from "../ReUse/ChangeTopBG";
import Modal from "../ReUse/Modal"
import Footer from "../ReUse/Footer";
function News() {
  return (
    <>
      <div className="bkg2"></div>;
      <Modal />
      <ChangeTopBG scrollAmount="50" transitionDuration="0.5s" />
      <Footer scrollAmount="-10" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
  
}

export default News;
