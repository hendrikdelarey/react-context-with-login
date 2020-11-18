import { useContext, useState } from "react";
import { Redirect } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebaseApp from "../firebaseApp";
import { AuthContext } from "../store/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
    }
  };

  if (!!currentUser) {
    return <Redirect to="/" />;
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Sign up</h1>
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
        <Button onClick={handleSignup}>Sign up</Button>
      </Form>
    </div>
  );
};

export default SignUp;
