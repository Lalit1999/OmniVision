import React from 'react' ;
import Clarifai from 'clarifai' ;

import DetectContent from './Content/DetectContent.js' ;
import Image from '../Image/Image.js' ;
import FaceResult from './Result/FaceResult.js' ;
import './facedetect.css' ;

const app = new Clarifai.App( { apiKey: '8ffd32e4a8994da296c0be708e6f4cec' } );

class FaceDetection extends React.Component
{	constructor()
	{
		super() ;
		this.resRef = React.createRef() ;
		this.state = {
			error: '' ,
			img : '' ,
			faces : [] ,
			imgHeight : 0 ,
			imgWidth : 0 ,
		} ;
	}

	scrollToBottom = () => {
	    this.resRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	componentDidUpdate = () => {
		this.scrollToBottom() ;
	}

	getImageSize = (h, w) => {
		this.setState({imgHeight: h, imgWidth: w}) ;
	}

	onButtonSubmit = (txt) => {
		//console.log(txt) ;
		//console.log(Clarifai) ;
		app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, txt)
		.then( data => {
			// console.log(data.outputs[0].data.regions) ;
			if(data.outputs[0].data.regions)
				this.setState({error: '', img: txt, faces: data.outputs[0].data.regions});
			else
				this.setState({error: 'Image has no detectable faces', img:'', faces: []});
		})
		.catch( err => {
			this.setState({error: 'Image URL Invalid or Image Not Accesible', img:'', faces: []});
			console.log(err) ;
		} ) ;
	}

	render()
	{	//console.log(this.state) ;
		let none = ((this.state.error.length > 1) ?'':'none') ;
		return(
			<div className="face-detect main">
				<DetectContent title="Face Detection" onSubmit={this.onButtonSubmit}
				text="All-Seeing Eye will human faces from your pictures" color={this.props.color}/>
				<p className={'color-error '+none}> {this.state.error} </p>
				<Image link={this.state.img} load={this.getImageSize}/>
				<FaceResult r={this.resRef} scroll={this.scrollToBottom} faces={this.state.faces} 
					wdt={this.state.imgWidth} ht={this.state.imgHeight} url={this.state.img}/>	
			</div>
		) ;
	}
}

export default FaceDetection ;