import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardx() {
  return (
    <>
    <div className='row container-fluid' style={{margin: '0 auto', alignItems: "center", justifyContent: "center", top: "120px", position: "absolute", zIndex: "1" }}>

    <Card style={{ width: '18rem',margin: '10px 10px 10px 10px' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/120?random=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',margin: '10px 10px 10px 10px' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/120?random=2" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',margin: '10px 10px 10px 10px' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/120?random=3" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
     <Card style={{ width: '18rem',margin: '10px 10px 10px 10px' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/120?random=4" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem',margin: '10px 10px 10px 10px' }}>
      <Card.Img variant="top" src="https://picsum.photos/180/120?random=5" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cardx;