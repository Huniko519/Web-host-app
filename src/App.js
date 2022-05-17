import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ConectWallet from "./pages/connectwallet/ConnectWallet";

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Router basename="/">
        <Switch>
          <Route path="/" exact component={ConectWallet} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
