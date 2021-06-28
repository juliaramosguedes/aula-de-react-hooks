import { Route, Switch } from "react-router-dom";
import { HomePage, PokemonPage, SearchPage } from "../pages";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/capture" component={SearchPage} />
    <Route path="/pokemon/:id" component={PokemonPage} />
  </Switch>
);

export default Routes;
