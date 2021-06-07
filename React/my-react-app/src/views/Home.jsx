import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import Clock from "./Clock";
import LoginControl from "./Login/LoginControl";
import NameForm from "./NameForm";
import NumberList from "./NumberList";
import Reservation from "./Reservation";
import Toggle from "./Toggle";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <ul>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/toggle">Toggle</Link>
          </li>
          <li>
            <Link to="/loginControl">LoginControl</Link>
          </li>
        </ul>
        <div>
          {/* <Switch> */}
          <Route path="/clock" component={Clock}></Route>
          <Route path="/toggle" component={Toggle}></Route>
          <Route path="/loginControl" component={LoginControl}></Route>
          {/* </Switch> */}
          <NumberList />
          <NameForm />
          <Reservation />
        </div>
      </Fragment>
    );
  }
}

export default Home;
