import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
import './rescolor.css' ;

class ColorResult extends Component {
	createElements = () => {
		console.log(this.props.colors) ;
		return this.props.colors.map( color => <Box key={color.value} text1={color.value} 
			text2={color.w3c.name} color={color.raw_hex}/>) ;
	} 

	render() {
		return (
			<div ref={this.props.r} className="box-con">
				{ this.createElements() }
			</div>
		);
	}
}

export default ColorResult ;
