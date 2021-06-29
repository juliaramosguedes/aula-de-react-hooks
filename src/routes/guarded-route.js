import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (<h3>Wait a moment. Loading page.</h3>)
  }

  return (
    <Route {...rest} render={(props) => (
      signed
        ? <Component {...props} />
        : <Redirect to='/protected' />
    )} />
  )
}

export default GuardedRoute;
