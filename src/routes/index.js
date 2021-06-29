import { Route, Switch } from "react-router-dom";
import { HomePage, PokemonPage, ProtectedAreaPage, SearchPage } from "../pages";
import GuardedRoute from "./guarded-route";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/pokemon/:id" component={PokemonPage} />
    <Route path="/protected" component={ProtectedAreaPage} />
    <GuardedRoute path="/capture" component={SearchPage} />
  </Switch>
);

export default Routes;
