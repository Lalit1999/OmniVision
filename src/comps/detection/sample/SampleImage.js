import React, { Component } from 'react';

import './sampleimage.css' ;

export default class SampleImage extends Component {
	createImages = () => {
		if(this.props.data)
			return this.props.data.map((img,i) => <img onClick={() => this.props.onImageClick(img)} 
												src={img.link} alt={i} key={i} />) ;
		else 
			return null ;
	}

	render() {
		return (
			<div className="sample-img-con">
				{this.createImages()}
			</div>
		);
	}
}
