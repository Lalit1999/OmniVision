import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;

import Home from './comps/home/Home.js' ;
import NotFound from './comps/home/NotFound.js' ;
import ColorDetection from './comps/detection/ColorDetection.js' ;
import FaceDetection from './comps/detection/FaceDetection.js' ;
import GeneralModel from './comps/detection/GeneralModel.js' ;
import Login from './comps/Login/Login.js' ;
import Register from './comps/Login/Register.js' ;
import Header2 from './comps/header2/Header2.js' ;
import BackGround from './comps/BackGround/BackGround.js' ;
import './App.css';

class App extends React.Component
{
  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  render() 
  {
    return(
      <div className="App">
        <BackGround />
        <BrowserRouter>
          <div>
            <Header2 />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Color' exact component={ColorDetection} />
              <Route path='/Face' exact component={FaceDetection} />
              <Route path='/General' exact component={GeneralModel} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    ) ;
  }
}
       
export default App;
