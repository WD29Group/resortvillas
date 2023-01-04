import "../css/Parallax.css";
function Parallax(props) {
  return (
    <>
      <div className="bgimg-1">
        <div className="caption">
          <span className="borders">{props.Title}</span>
        </div>
      </div>

      <div className="style1">
        <h3 style={{ textAlign: "center" }}>{props.Title1}</h3>
        {props.Body1}
        {props.Carousel1}
      </div>
      <div className="bgimg-2">
        <div className="caption">
          <span
            className="borders"
            style={{
              backgroundColor: "transparent",
              fontSize: "35px",
              color: "#f7f7f7",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.75)",
            }}
          >
            {props.Title2}
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="style2">
          {props.Body2}
          {props.Carousel2}
        </div>
      </div>

      <div className="bgimg-3">
        <div className="caption">
          <span
            className="borders"
            style={{
              backgroundColor: "transparent",
              fontSize: "35px",
              color: "#f7f7f7",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.75)",
            }}
          >
            {props.Title3}
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div className="style3">
          <p>{props.Body3}</p>
          {props.Carousel3}
        </div>
      </div>

      <div className="bgimg-1">
        <div className="caption">
          <span className="borders">
            Resort Villas <br />
            at your service
          </span>
        </div>
      </div>
    </>
  );
}

export default Parallax;
