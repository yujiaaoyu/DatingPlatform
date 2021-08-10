import React from "react";
import styles from './country.module.css';

// Select Country component
class Countries extends React.Component{
  
    state = {
      options: [
        {
          name: 'Select country',
          value: null,
        },
        {
          name: 'United States',
          value: 'United States',
        },
        {
          name: 'France',
          value: 'France',
        },
        {
          name: 'China',
          value: 'China',
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
            <label className={ styles.label }>Country</label>
            <div className={ styles.rct }>
              <select id="inputCountry" className="form-control" onChange={this.handleChange} value={value}>
                {options.map(item => (
                  <option key={item.name} value={item.value}>{item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
            
        ) 
    }
}
 export default Countries;