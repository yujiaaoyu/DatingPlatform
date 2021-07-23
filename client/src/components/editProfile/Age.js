import React from "react"

class Age extends React.Component{
    //state = {
     // msg: "browse facebook"
    //}

    state = {
      options: [
        {
          name: 'Select age...',
          value: null,
        },
        {
          name: '18-25',
          value: '18-25',
        },
        {
          name: '25-35',
          value: '25-35',
        },
        {
          name: '35-45',
          value: '35-45',
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
              <label for="inputAge col-md-4">Age</label>
              <select id="inputAge" class="form-control" onChange={this.handleChange} value={value}>
                {options.map(item => (
                <option key={item.name} value={item.value}>
                {item.name}
                </option>
              ))}
              </select>
            {/* <h3>Selected age: {value}</h3> */}
            </div>
        
            
        ) 
    }
}
 export default Age;