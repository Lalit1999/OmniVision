import React from 'react';

import Header2 from './comps/header2/Header2.js' ;
// import './App.css';

class App extends React.Component
{
  render() 
  {
    return(
      <div className="App">
      	<Header2 />
      	<div>This is Rest of the App. </div>
      </div>
    ) ;
  }
}
       
export default App;
