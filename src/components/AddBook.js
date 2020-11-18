import { useContext, useState } from "react";
import { BookContext } from "../store/BookContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBook = () => {
  const [books, setBooks] = useContext(BookContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const generateRandomId = () => Math.floor(Math.random() * 10);

  const formClick = (e) => {
    e.preventDefault()

    let newBook = {
      id: generateRandomId(),
      name: name,
      price: price,
      imageUrl: "https://picsum.photos/200"
    };

    setBooks([...books, newBook]);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          value={name}
          onChange={updateName}
          type="text"
          placeholder="Enter book name"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Book Price</Form.Label>
        <Form.Control
          value={price}
          onChange={updatePrice}
          type="currency"
          placeholder="Enter book name"
        ></Form.Control>
      </Form.Group>
      <Button onClick={formClick}>Add book</Button>
    </Form>
  );
};

export default AddBook;
