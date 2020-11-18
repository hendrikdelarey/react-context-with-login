import { useContext, useState } from "react";
import Book from "./Book";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BookContext } from "../store/BookContext";

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);

  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        <h1>Books for sale</h1>
      </Row>
      <Row className="justify-content-center">
        {books.map((b) => (
          <Book
            name={b.name}
            price={b.price}
            imageUrl={b.imageUrl}
            key={b.id}
          />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
