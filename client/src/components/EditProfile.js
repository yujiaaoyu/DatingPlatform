import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';
import Select from 'react-select';

const EditProfile = ({setAuth}) => {

const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    country: "",
    city: ""
})

const {first_name, last_name} = inputs;
let age, gender, country, city;

const onChange = e => {
    setInputs({...inputs, [e.target.name] : e.target.value});
};

console.log(first_name);
console.log(last_name);
// console.log(age);
// console.log(gender);
// console.log(country);
// console.log(city);

const onSubmitForm = async e => {
    e.preventDefault();

    try {

        var radios = document.getElementsByName('genderS');
        for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            gender = radios[i].value;
            // alert(radios[i].value);
            console.log(gender);

            // only one radio can be logically checked, don't check the rest
            break;
            }
        };

        const btn = document.querySelector('#btn');
        const selectCountry = document.querySelector('countrySelect');
        btn.onclick = (event) => {
            event.preventDefault();
            // show the selected index
            country = [].filter
                .call(selectCountry.options, option => option.selected)
                .map(option => option.text);
            alert(country);
        };

        const selectCity = document.querySelector('citySelect');
        btn.onclick = (event) => {
            event.preventDefault();
            // show the selected index
            city = [].filter
                .call(selectCity.options, option => option.selected)
                .map(option => option.text);
            console.log(city);
            alert(city);
        };
    
        const body = {first_name, last_name, age, gender, country, city};

        const response = await fetch("http://localhost:5000/auth/editProfile", {
            method: "POST",
            headers: {"Content-Type": "application/json"},

            body: JSON.stringify(body)
        });

        const parseRes = await response.json();
        console.log(parseRes);

        // localStorage.setItem("token", parseRes.token);
        // setAuth(true);

        if (parseRes.token) {
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
            toast.success("Updated Successfully!");
          } else {
            setAuth(false);
            toast.error(parseRes);
          }

        console.log(parseRes);

    } catch (error) {
        console.error(error.message);
    };


};

const data = [
    {
      value: 1,
      label: "Between 18 - 30 years"
    },
    {
      value: 2,
      label: "Between 31 - 40 years"
    },
    {
      value: 3,
      label: "Between 41 - 50 years"
    },
    {
      value: 4,
      label: "Between 51 - 60 years"
    },
    {
      value: 5,
      label: "Between 61 - 70 years"
    },
    {
      value: 6,
      label: "Beyond 70 years"
    }
  ];
 
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(3);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.label);
  }

    return (
    <Fragment>
        <h1 className="text-center my-5">Edit Profile</h1>
        <form onSubmit={onSubmitForm}>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFristName">First name</label>
                    <br></br><input type="text" class="from-control" name="first_name" placeholder="First Name" value={ first_name } onChange={e => onChange(e)}/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Last name</label>
                    <br></br><input type='text' name="last_name" placeholder="Last name" value={ last_name } onChange={e => onChange(e)}/>
                </div>
            </div>
            <div className="Dropdowndata">
                <label>Age</label><br /><br />
 
                <Select
                placeholder="Select Option"
                value={data.find(obj => obj.value === selectedValue)} // set selected value
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
                />
 
                {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <div><b>Selected Value: </b> {selectedValue}</div>
                </div>}
            </div>
            <fieldset class="form-group">
                <label for="gender" class="col-sm-2">Gender</label>
        
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" name="genderS" id="genderRadio1" value="male" checked/>
                    <label class="form-check-label" for="genderRadio1">
                        Male
                    </label>
                </div>
                <div class="form-check-inline">
                    <input class="form-check-input" type="radio" name="genderS" id="genderRadio2" value="female"/>
                    <label class="form-check-label" for="genderRadio2">
                        Female
                    </label>
                </div>
            </fieldset>

            <div class="col-auto my-1">
                <label class="mr-sm-2" for="countrySelect">Country</label>
                <select class="custom-select mr-sm-2" id="countrySelect">
                <option selected value="">United States</option>
                <option value="1">Canada</option>
                </select>
            </div>

            <div class="col-auto my-1">
                <label class="mr-sm-2" for="citySelect">City</label>
                <select class="custom-select mr-sm-2" id="citySelect">
                <option selected>Denver, Co</option>
                <option value="1">San Francisco, Ca</option>
                </select>
            </div>
        </form>
        <button className="btn btn-success btn-block">SAVE CHANGES</button>
    </Fragment>
    );
};

export default EditProfile;