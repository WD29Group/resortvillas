import Elnidovid2 from "../ReUse/Elnidovid2.jsx";
import Cardx from "../ReUse/Cardx.jsx";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";

function Gallery() {
  return (
    <>
      <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
      <Cardx />
      <Elnidovid2 />
      <Footer scrollAmount="0" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  );
}
export default Gallery;
