import React, { PureComponent } from "react";

class Welcome extends PureComponent {

  render() {
    const { props } = this;
    return <div>{props.name}</div>;
  }
}

export default Welcome;
