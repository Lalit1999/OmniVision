import React, { Component } from 'react';

import './image.css' ;

class Image extends Component {

	onDummyLoad = (event) => {
		if(this.props.dummy)
			this.props.dummy(event.target.height, event.target.width) ;
	}

	createImage = () => {
		if(this.props.link.length > 0)
			return (
				<div>
					<img className="imag" src={this.props.link} alt="Detected" onLoad={this.onImageLoad}/> 
					<img className="dummy" src={this.props.link} alt="dummy" onLoad={this.onDummyLoad} />
				</div>
			);
	} 

	render() {
		return (
			<div className="img">
				{ this.createImage() } 
			</div>
		);
	}
}

export default Image ;
				
				//<p> {this.props.link} </p>
