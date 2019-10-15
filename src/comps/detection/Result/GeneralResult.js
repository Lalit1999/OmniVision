import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
import './rescolor.css' ;

class GeneralResult extends Component
{
	createElements = () => {
		
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
