import ContentsHomeParallax from "../contents/ContentsHomeParallax.jsx";
import Elnidovid1 from "../ReUse/Elnidovid1.jsx";
import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";

function Home() {
  return (
    <>
      <ChangeTopBG scrollAmount="700" transitionDuration="3s" />
      <Elnidovid1 />
      <ContentsHomeParallax />
      <Footer scrollAmount="800" setBGcolor="rgba(0, 0, 0, 0)" />
    </>
  );
}
export default Home;
