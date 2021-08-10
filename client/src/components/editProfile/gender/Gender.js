import React, { Component } from "react";
import styles from './gender.module.css';


// Handle radiou buttons of gender
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
      <div className="form-group">
        <label className = { styles.label } htmlFor="inputGender col-md-4">Gender</label>
        <div onChange={this.onChangeValue}>
          <div className={ styles.frame1 }>
            <input className={ styles.circle1 } type="radio" value="Male" name="gender" />
            <p className={ styles.male }> Male</p>
          </div>

          <div className={ styles.frame2 }>
            <input className={ styles.circle2 } type="radio" value="Female" name="gender" />
            <p className={ styles.female }>Female</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gender;