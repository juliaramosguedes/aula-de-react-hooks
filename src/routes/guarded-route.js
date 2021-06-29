import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts";
import { Loader } from "../components";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <Loader size={64}/>
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
