const { useContext } = require("react");
const { Route, Redirect } = require("react-router-dom");
const { AuthContext } = require("./store/AuthContext");

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/sign-up"} />
        )
      }
    />
  );
};

export default PrivateRoute;
