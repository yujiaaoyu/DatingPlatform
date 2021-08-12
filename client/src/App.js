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

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';
import EditProfile from './components/editProfile/EditProfile';
import ResetPassword from './components/resetPassword/ResetPassword';
import Upload from './components/upload_profile_images/Upload';
import ConfirmResetPassword from './components/ConfirmResetPassword/ConfirmResetPassword';
import Landing from './components/landing/Landing';
import Images from './components/PhotoGallery/Image';

import EmptyPage from './components/page_empty/EmptyPage';
import Settings from './components/settings/Settings';
import Become from './components/coach/become/become';
import CreateCoach from './components/coach/createCoach/createCoach';
import Home from './components/Home/Home.js';
import Recommend from './components/coach/recommend';


toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  // Check authentication
  async function isAuth() {
    try {
      
      const response = await fetch("http://localhost:5000/auth/is-verify",
      { method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      console.log(parseRes);

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    isAuth();
  });

 
  
  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
          <Route exact path = "/" render={props => !isAuthenticated ? <Landing {...props}/> : <Redirect to="/dashboard" /> } />
            <Route exact path = "/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" /> } />
            <Route exact path = "/register" render={props => !isAuthenticated ? <Register {...props} setAuth={setAuth} /> : <Redirect to="/dashboard"/> }/>
            <Route exact path = "/dashboard" render={props => isAuthenticated ? (<Dashboard {...props} setAuth={setAuth} />) : (<Redirect to="/"/>) }/> 
            <Route exact path = "/editProfile" render={props => isAuthenticated ? (<EditProfile {...props} setAuth={setAuth} />) : (<Redirect to="/"/>) }/> 
            <Route exact path = "/upload" render={props => isAuthenticated ? <Upload {...props} setAuth={setAuth} /> : <Redirect to="/"/>}/> 
            <Route exact path = "/home" render={props => isAuthenticated ? <Home {...props} setAuth={setAuth} /> : <Redirect to="/"/>}/> 
            <Route exact path = "/images" render={props => isAuthenticated ? <Images {...props} setAuth={setAuth} /> : <Redirect to="/"/>}/> 
            <Route exact path = "/coach" render={props => isAuthenticated ? <CreateCoach {...props} setAuth={setAuth} /> : <Redirect to="/"/>}/> 
            {/* <Route exact path = "/pages" render={props => isAuthenticated ? <EmptyPage {...props} setAuth={setAuth} /> : <Redirect to="/login"/>}/>  */}
            {/* <Route exact path = "/coach" render={props => isAuthenticated ? <Coach {...props} setAuth={setAuth} /> : <Redirect to="/login"/>}/>  */}
            <Route exact path = "/reset-password"><ResetPassword/> </Route>
            <Route exact path = "/confirm-reset-password"><ConfirmResetPassword /></Route>
            <Route exact path = "/settings"><Settings /></Route>
            <Route exact path = "/become_a_coach"><Become /></Route>
            <Route exact path = "/myCoaches"><Recommend /></Route>

            {/* <Router exact path = "/pages"><EmptyPage setAuth={setAuth}/></Router> */}
          </Switch>
        </div>
      </Router>

      
    </Fragment>
  );
};

export default App;
