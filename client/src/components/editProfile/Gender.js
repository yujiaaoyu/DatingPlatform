import React, { Component } from "react";

class Gender extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.getMsg({ value: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div class="form-group">
        <label for="inputGender col-md-4">Gender</label>
        <div onChange={this.onChangeValue}>
          <input type="radio" value="Male" name="gender" /> Male &nbsp;
          <input type="radio" value="Female" name="gender" /> Female  &nbsp;
          <input type="radio" value="Other" name="gender" /> Other &nbsp;
        </div>
      </div>
    );
  }
}

export default Gender;