import React, { Component } from 'react';

import './image.css' ;

class Image extends Component {
	onImageLoad = (event) => {
		// console.log(event.target.width) ;
		// console.log(event.target.height) ;
		if(this.props.load)
			this.props.load(event.target.height, event.target.width) ;
	}

	createImage = () => {
		if(this.props.link.length > 0)
			// return <div style={{backgroundImage:'url('+this.props.link+')'}} className="img-div"></div>
			return <img className="imag" src={this.props.link} 
						alt="Detected" onLoad={this.onImageLoad}/> ;
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
