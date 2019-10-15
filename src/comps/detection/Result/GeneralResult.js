import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
import './rescolor.css' ;

class GeneralResult extends Component
{
	// createElements = () => {
		//console.log(this.props.colors) ;
		// return this.props.colors.map(color=> <Box key={(color.value+' ').slice(0, 5) + ' %'} 
		// 	text1={color.value*100} text2={color.w3c.name} color={color.raw_hex}/>) ;
	// } 

	render() {
		return (
			<div>this is GeneralResult.</div>
		);
	}
}

export default GeneralResult ;
			
			// <div ref={this.props.r} className="box-con">
			// 	{ this.createElements() }
			// </div>
