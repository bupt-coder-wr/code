import React, { Component } from "react";
// light 为默认值
const TheOneContext = React.createContext("light");
TheOneContext.displayName = "MyDisplayName";

class Context extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* 传入参数为 dark */}
        <TheOneContext.Provider value="dark">
          <ChildComponent />
        </TheOneContext.Provider>
      </div>
    );
  }
}
function ChildComponent(params) {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}
class ThemeButton extends Component {
  static contextType = TheOneContext;
  render() {
    console.log(this);
    return <p theme={null}>This is context block</p>;
  }
}

export default Context;
