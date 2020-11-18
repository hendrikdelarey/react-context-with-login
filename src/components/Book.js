import { Button, Card } from "react-bootstrap";

const Book = ({ name, price, imageUrl }) => {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "contain",
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Img variant="top" src={imageUrl} style={imageStyle} />
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: R{price}.00</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
