import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

const Home = () => <h2>This is Home</h2>;
const About = () => <h2>This is About</h2>;
const Other = () => <h2>This is Other</h2>;

const Hash = () => (
  <div>
    <HashRouter>
      <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/other">
            Other
          </Link>
        </li>
      </ul>
      <Route path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/other" component={Other}></Route>
    </HashRouter>
  </div>
);

export default Hash;
