import "./items.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Items(props) {
  return (
    <div>
      <Card id='card'>
        <Card.Img id='cardImg' variant='top' src='https://picsum.photos/id/237/300/300' />
        <Card.Body id='cardBody'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.prodDescrip}</Card.Text>
          <Card.Text className='text-muted'>${props.price}</Card.Text>
        </Card.Body>
        <Button variant='primary'>Add To Cart</Button>
      </Card>
    </div>
  );
}
