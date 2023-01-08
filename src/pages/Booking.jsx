import ChangeTopBG from "../ReUse/ChangeTopBG";
import Footer from "../ReUse/Footer";
function Booking() {
  const resultsList = document.getElementById('results')
  new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`)
    resultsList.append(document.createElement('br'))
  })
  return (
    <>
      <div id="resultsList"></div>
      <div className="bkg3"></div>

      <ChangeTopBG scrollAmount="0" transitionDuration="0.5s" />
      <Footer scrollAmount="-10" setBGcolor="rgba(0, 0, 0, 0.50)" />
    </>
  ); 
}

export default Booking;
