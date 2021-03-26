import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./../pages/HomePage";
import CreateAnnouncePage from "./../pages/CreateAnnouncePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import OneShotPaymentPage from "../pages/OneShotPaymentPage";
import SubscribePage from "../pages/SubscribePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/create-announce">
          <CreateAnnouncePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/payment">
          <OneShotPaymentPage title="Payment" />
        </Route>
        <Route exact path="/subscribe">
          <SubscribePage title="Payment" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
