import React, { PureComponent } from "react";

class NameForm extends PureComponent {
  state = {
    nameValue: "请撰写一篇关于你喜欢的 DOM 元素的文章.",
    fruit: "lime",
  };

  handleSubmit = (e) => {
    console.log(this.state.nameValue);
    alert("Submit" + this.state.nameValue);
    e.preventDefault();
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      nameValue: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      fruit: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <textarea
              type="text"
              value={this.state.nameValue}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <select value={this.state.fruit} onChange={this.handleSelect}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option disabled value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
      </div>
    );
  }
}

export default NameForm;
