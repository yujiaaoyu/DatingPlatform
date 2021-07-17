import React, { Fragment, useState, useEffect} from 'react';
import './App.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


//components

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import ResetPassword from './components/ResetPassword';
import Upload from './components/Upload';
import Coach from './components/Coach';

toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      
      const response = await fetch("http://localhost:5000/auth/is-verify",
      { method: "GET",
        headers:{token:localStorage.token}
      });

      const parseRes = await response.json();
      console.log(parseRes);

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path = "/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" /> } />
            <Route exact path = "/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/> }/>
            <Route exact path = "/dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/login"/> }/> 
            <Route exact path = "/editProfile" render={props => isAuthenticated ? <EditProfile {...props} setAuth={setAuth} /> : <Redirect to="/login"/> }/> 
            <Route exact path = "/reset-password" render={props => isAuthenticated ? <ResetPassword {...props} setAuth={setAuth} /> : <Redirect to="/login"/>}/> 
            <Route exact path = "/upload" render={props => isAuthenticated ? <Upload {...props} setAuth={setAuth} /> : <Redirect to="/login"/>}/> 
          </Switch>
          <Coach/>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
