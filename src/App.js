import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import ReactNotification, { store } from 'react-notifications-component' ;
import 'react-notifications-component/dist/theme.css' ;

import Header2 from './comps/header2/Header2.js' ;
import Home from './comps/home/Home.js' ;
import BackGround from './comps/BackGround/BackGround.js' ;
import NotFound from './comps/home/NotFound.js' ;
import ColorDetection from './comps/detection/ColorDetection.js' ;
import FaceDetection from './comps/detection/FaceDetection.js' ;
import GeneralModel from './comps/detection/GeneralModel.js' ;
import AgeGenderModel from './comps/detection/AgeGenderModel.js' ;
import Login from './comps/Login/Login.js' ;
import Register from './comps/Login/Register.js' ;
import History from './comps/History/History.js' ;
import UserProfile from './comps/UserProfile/UserProfile.js' ;
import './App.css';

const notifObj = {
  title: "Success!",
  message: "Successfully logged in",
  type: "success",
  container: "top-right",
  dismiss: {
    duration: 4000,
    onScreen: true
  }
} ;

class App extends React.Component
{  
  state = {
    color: '#4682b4' ,
    user : {} ,
  } ;

  setColor = (color) => {
    this.setState({color: color});
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  //For Logging In User
  setUser = (data) => {
    this.setState({user: data});
    store.addNotification(notifObj);
  }

  //Check if user is logged in
  checkUser = (str = 'token') => {
    if( this.state.user.user )
      if(str === 'token')
        return this.state.user.token ;
      else if(str === 'user')
        return this.state.user.user ;
      else if(str === 'history')
          return this.state.user.user.history ;
      else
        return this.state.user.user.name ;
    else 
      return false ; 
  }  

  render() 
  { const {color} = this.state ;
    console.log(this.state) ;
    return(
      <div className="App">
        <BackGround setColor={this.setColor}/>
        <ReactNotification />
        <BrowserRouter>
          <div>
            <Header2 color={color} usertoken={this.checkUser()} setUser={this.setUser} />
            <Switch>
              <Route path='/' exact render={props=><Home {...props} color={color} user={this.checkUser('name')}/>} />
              <Route path='/color' exact render={props=><ColorDetection {...props} usertoken={this.checkUser()} color={color} />}/>
              <Route path='/face' exact render={props=><FaceDetection {...props} usertoken={this.checkUser()} color={color} />} />
              <Route path='/general' exact render={props=><GeneralModel {...props} usertoken={this.checkUser()} color={color} />} />
              <Route path='/age' exact render={props=><AgeGenderModel {...props} usertoken={this.checkUser()} color={color} />} />
              <Route path='/history' exact render={props=><History {...props} usertoken={this.checkUser('history')} color={color} />} />
              <Route path='/Userprofile' exact render={props=><UserProfile {...props} user={this.checkUser('user')} color={color} />} />
              <Route path='/login' exact render={props=><Login {...props} setUser={this.setUser} />} />
              <Route path='/register' exact render={props=><Register {...props} setUser={this.setUser} />} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    ) ;
  }
}
       
export default App ;
