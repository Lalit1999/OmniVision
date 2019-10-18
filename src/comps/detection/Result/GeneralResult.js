import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
import './rescolor.css' ;

class GeneralResult extends Component
{
	createElements = () => {
		// console.log(this.props.colors) ;
		return this.props.colors.map(color=> <Box key={color.value} 
			text1={((color.value*100)+' ').slice(0, 5) + ' %'} color={color.raw_hex}/>) ;
			// text1={((color.value*100)+' ').slice(0, 5) + ' %'} text2={color.w3c.name} color={color.raw_hex}/>) ;
			// https://uploads.themler.io/store/sample2-objects.png(test image link)
	} 

	render() {
		return (
			<div ref={this.props.r} className="box-con">
				{ this.createElements() }
			</div>
		);
	}
}

export default GeneralResult ;
