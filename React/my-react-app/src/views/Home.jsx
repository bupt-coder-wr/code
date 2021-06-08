import React, { Fragment } from "react";
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
        <Clock />
        <LoginControl />
        <Toggle />
        <NumberList />
        <NameForm />
        <Reservation />
      </Fragment>
    );
  }
}

export default Home;
