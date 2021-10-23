import { nanoid } from "nanoid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { name, age, id: nanoid() };
    this.props.addPerson(personObj);
    this.nameNode.value = "";
    this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>Count组件计数：{this.props.count}</h4>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        &nbsp;
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        &nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((item) => {
            return (
              <li key={item.id}>
                {item.name}--{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    persons: state.persons,
    count: state.count,
  }),
  {
    addPerson,
  }
)(Person);
