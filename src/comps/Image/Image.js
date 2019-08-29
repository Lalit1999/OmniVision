import React, { Component } from 'react';

import './image.css' ;

class Image extends Component {
	createImage = () => {
		if(this.props.link.length > 0)
			return <div style={{backgroundImage:'url('+this.props.link+')'}} className="img-div"></div>
			//return <img src={this.props.link} alt="Detected" /> ;
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
