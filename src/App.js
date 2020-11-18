import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./store/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
