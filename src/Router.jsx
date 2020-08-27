import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Product from "./pages/Product";

const products = [
  { title: "Product 1", id: 1 },
  { title: "Product 2", id: 1 },
  { title: "Product 3", id: 1 },
  { title: "Product 4", id: 1 },
  { title: "Product 5", id: 1 },
];

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product/1">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product/:productId">
          <Product products={products} />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/" exact>
          <Home products={products} />
        </Route>
        <Route path="*">
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
