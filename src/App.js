import React from "react";
import { store } from "./Store/Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
