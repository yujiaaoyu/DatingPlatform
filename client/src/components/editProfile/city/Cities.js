import React from "react";
import styles from './city.module.css';

// Select city component
class Cities extends React.Component{
    // city values
    state = {
      options: [
        {
          name: 'Select City',
          value: null,
        },
        {
          name: 'San Francisco',
          value: 'San Francisco',
        },
        {
          name: 'San Jose',
          value: 'San Jose',
        },
        {
          name: 'Milpitas',
          value: 'Milpitas',
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
            <label className={ styles.label }>City</label>
            <div className={ styles.rct }>
              <select id="inputCity" className="form-control" onChange={this.handleChange} selectvalue={value}>
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
 export default Cities;