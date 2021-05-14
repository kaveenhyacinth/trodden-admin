import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./lib/components";
import {
  Login,
  Home,
  Nomads,
  Memories,
  Trips,
  Caravans,
  Blazes,
} from "./pages";

const App = () => {
  const [routerAuth, setRouterAuth] = useState(true);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute auth={routerAuth} path="/" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute auth={routerAuth} path="/nomads">
          <Nomads />
        </PrivateRoute>
        <PrivateRoute auth={routerAuth} path="/memories">
          <Memories />
        </PrivateRoute>
        <PrivateRoute auth={routerAuth} path="/trips">
          <Trips />
        </PrivateRoute>
        <PrivateRoute auth={routerAuth} path="/caravans">
          <Caravans />
        </PrivateRoute>
        <PrivateRoute auth={routerAuth} path="/blazes">
          <Blazes />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
