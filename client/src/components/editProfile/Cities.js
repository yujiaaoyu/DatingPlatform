import React from "react"

class Cities extends React.Component{
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
            <label for="inputCity col-md-4">City</label> &nbsp; &nbsp; &nbsp;
            <select onChange={this.handleChange} selectValue={value}>
              {options.map(item => (
                <option key={item.name} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            {/* <h1>Selected city: {value}</h1> */}
          </div>
            //<div>
            //    child component
            //    <button onClick = {this.handleClick}> click !</button>

           // </div>
            
        ) 
    }
}
 export default Cities