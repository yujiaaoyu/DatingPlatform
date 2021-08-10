import React from "react";
import styles from "./age.module.css";

// Select Age component
class Age extends React.Component{
  
  // Age ranges
    state = {
      options: [
        {
          name: 'Select Age',
          value: null,
        },
        {
          name: 'Between 18 - 25 years',
          value: 'Between 18 - 25 years',
        },
        {
          name: 'Between 26 - 35 years',
          value: 'Between 26 - 35 years',
        },
        {
          name: 'Between 36 - 45 years',
          value: 'Between 36 - 45 years',
        },
      ],
      value: '?',
    };

    handleChange = (event) => {
      this.props.getMsg({ value: event.target.value });
      this.setState({
        value: event.target.value
      });

    };

    render(){
      const { options, value } = this.state;
        return(
            <div className="form-group">
              <label className={styles.label}>Age</label>
              <div className={styles.rct}>
              <select id="inputAge" className="form-control" onChange={this.handleChange} value={value}>
                {options.map(item => (
                <option key={item.name} value={item.value}>
                {item.name}
                </option>
              ))}
              </select>
              </div>
            </div>
        
            
        ) 
    }
}
 export default Age;