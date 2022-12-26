import Card from 'react-bootstrap/Card';
import "../css/Cardx.css"
function Cardx(props) {
  return (
    <>
      <div className="row container-fluid" style={{ margin: "0 auto", alignItems: "center", justifyContent: "center", top: "120px", position: "absolute", zIndex: "1"}}>
        
        <Card className='Cardfrostedglass Cardtransp' style={{ width: "18rem", margin: "10px 10px 10px 10px" }}>
          <Card.Img
            variant="top"
            src={props.CardImg1}
          />
          <Card.Body>
            <Card.Title>{props.CardTitle1}</Card.Title>
            <Card.Text>{props.Body1}</Card.Text>
            <button className="buttonFrosted Cardtransp">{props.Button1}</button>
          </Card.Body>
        </Card>

        <Card className='Cardfrostedglass Cardtransp' style={{ width: "18rem", margin: "10px 10px 10px 10px" }}>
          <Card.Img
            variant="top"
            src={props.CardImg2}
          />
          <Card.Body>
            <Card.Title>{props.CardTitle2}</Card.Title>
            <Card.Text>{props.Body2}</Card.Text>
            <button className="buttonFrosted Cardtransp">{props.Button2}</button>
          </Card.Body>
        </Card>

        <Card className='Cardfrostedglass Cardtransp' style={{ width: "18rem", margin: "10px 10px 10px 10px" }}>
          <Card.Img
            variant="top"
            src={props.CardImg3}
          />
          <Card.Body>
            <Card.Title>{props.CardTitle3}</Card.Title>
            <Card.Text>{props.Body3}</Card.Text>
            <button className="buttonFrosted Cardtransp">{props.Button3}</button>
          </Card.Body>
        </Card>

        <Card className='Cardfrostedglass Cardtransp' style={{ width: "18rem", margin: "10px 10px 10px 10px" }}>
          <Card.Img
            variant="top"
            src={props.CardImg4}
          />
          <Card.Body>
            <Card.Title>{props.CardTitle4}</Card.Title>
            <Card.Text>{props.Body4}</Card.Text>
            <button className="buttonFrosted Cardtransp">{props.Button4}</button>
          </Card.Body>
        </Card>

        <Card className='Cardfrostedglass Cardtransp' style={{ width: "18rem", margin: "10px 10px 10px 10px" }}>
          <Card.Img
            variant="top"
            src={props.CardImg5}
          />
          <Card.Body>
            <Card.Title>{props.CardTitle5}</Card.Title>
            <Card.Text>{props.Body5}</Card.Text>
            <button className="buttonFrosted Cardtransp">{props.Button5}</button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cardx;