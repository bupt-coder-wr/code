import React, { Fragment } from "react";
import Context from "./AdvancedUsage/Context";
import Counter from "./Counter";
// import Clock from "./Clock";
// import LoginControl from "./Login/LoginControl";
// import NameForm from "./NameForm";
// import NumberList from "./NumberList";
// import Reservation from "./Reservation";
import HomeRouter from "./Router/HomeRouter";
// import Toggle from "./Toggle";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <Clock />
        <LoginControl />
        <Toggle />
        <NumberList />
        <NameForm />
        <Reservation /> */}
        <HomeRouter />
        <Context />
        <Counter initialCount={1} />
      </Fragment>
    );
  }
}

export default Home;
