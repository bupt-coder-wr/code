import React from "react";
import Clock from "./Clock";
import LoginControl from "./Login/LoginControl";
import NameForm from "./NameForm";
import NumberList from "./NumberList";
import Reservation from "./Reservation";
import Toggle from "./Toggle";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Clock></Clock>
        <Toggle></Toggle>
        <LoginControl />
        <NumberList />
        <NameForm />
        <Reservation />
      </div>
    );
  }
}

export default Home;
