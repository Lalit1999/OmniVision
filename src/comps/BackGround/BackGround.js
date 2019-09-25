import React, { Component } from 'react';
import Particles from 'react-particles-js';

import conf from './conf.js' ;
import './background.css' ;

const colors = ['rgb(22, 160, 133)' , '#4682b4' , 'rgb(39, 174, 96)', 'rgb(44, 62, 80)', 
				'rgb(52, 34, 36)', 'rgb(71, 46, 50)', 'rgb(115, 168, 87)', 'rgb(119, 177, 169)',
				'rgb(155, 89, 182)', 'rgb(231, 76, 60)', 'rgb(243, 156, 18)', 'rgb(251, 85, 80)',
				'rgb(116, 185, 255)', 'rgb(162, 155, 254)', 'rgb(250, 177, 160)', 'rgb(225, 112, 85)',
				'rgb(232, 67, 147)', 'rgb(214, 48, 49)', 'rgb(253, 121, 168)'] ;

//243, 156, 18  is yellowish..im doubtful about it
//250, 177, 160 is lt-pinkish..im doubtful about it

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
	  	let x = Math.floor((Math.random() * 19));
	  	this.setState({ color: colors[x] }) ;
	  	this.props.setColor(colors[x]) ;
	  }, 12000);
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
