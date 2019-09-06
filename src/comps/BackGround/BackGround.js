import React, { Component } from 'react';
import Particles from 'react-particles-js';

import conf from './conf.js' ;
import './background.css' ;

const colors = ['rgb(22, 160, 133)' , '#4682b4' , 'rgb(39, 174, 96)', 'rgb(44, 62, 80)' ] ;

class BackGround extends Component {
	constructor() 
	{
		super() ;
		this.state = {
			color: colors[1] ,
		} ;
	}
	componentDidMount = () => {
	  this.interval = setInterval(() => {
	  	let x = Math.floor((Math.random() * 4));
	  	this.setState({ color: colors[x] }) ;
	  	this.props.setColor(colors[x]) ;
	  }, 5000);
	}
	componentWillUnmount = () => {
	  clearInterval(this.interval);
	}
	render() {
		return (
			<div style={{ backgroundColor : this.state.color}} className="background">
				<Particles className = 'particle' params={conf}/>
			</div>
		);
	}
}

export default BackGround ;
