import React, { Component } from 'react';

class Image extends Component {
	createImage = () => {
		if(this.props.link.length > 0)
			return <img src={this.props.link} alt="Detected" /> ;
	} 

	render() {
		return (
			<div className="img">
				<p> {this.props.link} </p>
				{ this.createImage() } 
			</div>
		);
	}
}

export default Image ;
