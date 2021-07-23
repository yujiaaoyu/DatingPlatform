import React from "react"

class Countries extends React.Component{
    //state = {
     // msg: "browse facebook"
    //}

    state = {
      options: [
        {
          name: 'Select…',
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

    //handleClick = () =>{
      //  this.props.getMsg(this.state.msg)
    //}

    handleChange = (event) => {
      this.props.getMsg({ value: event.target.value });
      this.setState({
        value: event.target.value
      });

    };

    render(){
      const { options, value } = this.state;
        return(
          <div class="form-group">
            <label for="inputCountry col-md-4">Country</label> &nbsp; &nbsp; &nbsp;
            <select onChange={this.handleChange} value={value}>
              {options.map(item => (
                <option key={item.name} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            {/* <h1>Selected country: {value}</h1> */}
          </div>
            
        ) 
    }
}
 export default Countries