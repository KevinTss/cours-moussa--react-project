import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./../pages/HomePage";
import CreateAnnouncePage from "./../pages/CreateAnnouncePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/create-announce">
          <CreateAnnouncePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
