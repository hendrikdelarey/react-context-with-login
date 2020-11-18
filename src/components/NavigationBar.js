import { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button";
import { BookContext } from "../store/BookContext";
import firebaseApp from '../firebaseApp'

const NavigationBar = () => {
  const [books, setBooks] = useContext(BookContext);

  const handleSignOut = () => {
    firebaseApp.auth().signOut()
  }

  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Bookshop</Navbar.Brand>
        Number of books {books.length}

        <Button onClick={handleSignOut}>Sign out</Button>

      </Navbar>
  );
};

export default NavigationBar;
