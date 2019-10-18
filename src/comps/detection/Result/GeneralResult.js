import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
import './rescolor.css' ;

class GeneralResult extends Component
{
	createElements = () => {
		// console.log(this.props.concepts) ;
		return this.props.concepts.map(concept=> <Box key={concept.name} 
			text1={concept.name} middle="Probability :" text2={((concept.value*100)+' ').slice(0, 5)}  />) ;
			// https://uploads.themler.io/store/sample2-objects.png(test image)
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
