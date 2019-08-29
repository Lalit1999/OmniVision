import React, { Component } from 'react';

import './rescolor.css' ;

class ColorResult extends Component {
	createElements = () => {
		return this.props.colors.map( color => <p key={color.w3c.name}> {color.w3c.name} </p>) ;
	}
	render() {
		return (
			<div className="box-con">
				{ this.createElements() }
			</div>
		);
	}
}

export default ColorResult ;
