import { useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebaseApp from "../firebaseApp";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }

    if (!!currentUser) {
      return <Redirect to="/" />;
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={updateEmail}
            type="email"
            placeholder="Email"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={updatePassword}
            type="password"
            placeholder="Password"
          ></Form.Control>
        </Form.Group>
        <Button onClick={handleLogin}>Log in</Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);
