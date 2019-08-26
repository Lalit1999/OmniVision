import React, { Component } from 'react';

class ColorResult extends Component {
	createElements = () => {
		return this.props.colors.map( color => <p> {color.w3c.name} </p>) ;
	}
	render() {
		return (
			<div>
				{ this.createElements() }
			</div>
		);
	}
}

export default ColorResult ;
