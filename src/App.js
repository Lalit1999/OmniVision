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
{ constructor()
  {
    super() ;
    this.state = {
      color: '#4682b4' ,
    } ;
  }

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
  render() 
  { const {color} = this.state ;
    return(
      <div className="App">
        <BackGround setColor={this.setColor}/>
        <BrowserRouter>
          <div>
            <Header2 color={color}/>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/Color' exact render={props=><ColorDetection {...props} color={color} />}/>
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
