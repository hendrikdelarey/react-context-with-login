import "../App.css";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";
import NavigationBar from "../components/NavigationBar";
import { BookProvider } from "../store/BookContext";
import Card from "react-bootstrap/Card";

const Home = () => {
  const cardStyle = {
    marginRight: "25%",
    marginLeft: "25%",
  };

  return (
    <BookProvider>
      <div className="App">
        <NavigationBar />
        <Card style={cardStyle}>
          <AddBook />
        </Card>
        <BookList />
      </div>
    </BookProvider>
  );
};

export default Home;
