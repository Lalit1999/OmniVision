import React, { Component } from 'react';
import Clarifai from 'clarifai' ;

import DetectContent from './Content/DetectContent.js' ;
import Image from '../Image/Image.js' ;
import age_sample from './sample/AgeSample.js' ;
import AgeGenderResult from './Result/AgeGenderResult.js' ;

const app = new Clarifai.App( { apiKey: '8ffd32e4a8994da296c0be708e6f4cec' } );

class AgeGenderModel extends Component {
	
	resRef = React.createRef() ;
	state = {
		error: '' ,
		img : '' ,
		faces : [] ,
		dumHeight : 0 ,
		dumWidth : 0
	} ;

	scrollToBottom = () => {
	    this.resRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	onSampleImageClick = (obj) => {
		// console.log(obj) ;
		this.setState({error: '', img: obj.link, faces: obj.data});
	}

	componentDidUpdate = () => {
		this.scrollToBottom() ;
	}

	getDummySize = (h, w) => {
		this.setState({dumHeight: h, dumWidth: w}) ;
	}

	onButtonSubmit = (txt) => {
		app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, txt)
		.then( data => {
			console.log(data.outputs[0].data) ;
			if(data.outputs[0].data.regions)
				this.setState({error: '', img: txt, faces: data.outputs[0].data.regions});
			else
				this.setState({error: 'Image has no detectable faces', img:'', faces: []});
		})
		.then( data => {
			// console.log('detection ke liye bhej raha hu')
			
			const obj = { link: this.state.img, data: this.state.faces } ;

			fetch('https://ov-api.herokuapp.com/detect/age', {
				method : 'post' ,
				headers : { 'Content-Type' : 'application/json',
							'Authorization' : 'Bearer ' + this.props.usertoken } ,
				body : JSON.stringify(obj) ,
			})
			.then(res => {
				if(res.ok)
					return res.json() ;
				else
					throw Error(res.statusText) ;
			})
			.then(data =>{	
				console.log(data) ;
			}) 
			.catch( err  => console.log(err) ) ;
		})
		.catch( err => {
			this.setState({error: 'Image URL Invalid or Image Not Accesible', img:'', faces: []});
			console.log(err) ;
		} ) ;

		// this.setState({error: '', img:'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'})
	}

	render()
	{	
		let none = ((this.state.error.length > 1) ?'':'none') ;
		return(
			<div className="ageg-detect main">
				<DetectContent title="Age & Gender Detection" onSubmit={this.onButtonSubmit}
				text="All-Seeing Eye will predict Age & Gender of human faces" color={this.props.color}
				onSampleImageClick={this.onSampleImageClick} data={age_sample} user={this.props.usertoken}/>
				<p className={'color-error '+none}> {this.state.error} </p>
				<Image link={this.state.img} dummy={this.getDummySize}/>
				<AgeGenderResult r={this.resRef} faces={this.state.faces} url={this.state.img}
					h={this.state.dumHeight} w={this.state.dumWidth}/>
			</div>
		) ;
	}
}

export default AgeGenderModel ;
