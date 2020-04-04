import React from 'react' ;
import Clarifai from 'clarifai' ;

import DetectContent from './Content/DetectContent.js' ;
import Image from '../Image/Image.js' ;
import col_sample from './sample/ColorSample.js' ;
import ColorResult from './Result/ColorResult.js' ;
import './colordetect.css' ;

const app = new Clarifai.App( { apiKey: '8ffd32e4a8994da296c0be708e6f4cec' } );

class ColorDetection extends React.Component
{	
	resRef = React.createRef() ;
	state = {
		error: '' ,
		img : '' ,
		data : [] 
	} ;

	scrollToBottom = () => {
	    this.resRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	componentDidUpdate = () => {
		this.scrollToBottom() ;
	}

	onSampleImageClick = (obj) => {
		// console.log(obj) ;
		this.setState({error: '', img: obj.link, data: obj.data});
	}

	onButtonSubmit = (txt) => {
		//console.log(txt) ;
		app.models.predict(Clarifai.COLOR_MODEL, txt)
		.then( data => {
			// console.log(data.outputs[0].data.colors) ;
			this.setState({error: '', img: txt, data: data.outputs[0].data.colors});
		})
		.then( data => {
			console.log('detection ke liye bhej raha hu')
			
			const obj = { link: this.state.img, data: this.state.data } ;

			fetch('https://ov-api.herokuapp.com/detect/color', {
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
			this.setState({error: 'Image URL Invalid or Image Not Accesible', img:'', data:[]});
			console.log(err) ;
		} ) ;
	}

	render()
	{	let none = ((this.state.error.length > 1) ?'':'none') ;
		return(
			<div className="color main">
				<DetectContent title="Color Detection" onSubmit={this.onButtonSubmit}
				text="All-Seeing Eye will detect colors in your pictures" color={this.props.color}
				onSampleImageClick={this.onSampleImageClick} data={col_sample} user={this.props.usertoken}/>
				<p className={'color-error '+none}> {this.state.error} </p>
				<Image link={this.state.img} />
				<ColorResult r={this.resRef} scroll={this.scrollToBottom} colors={this.state.data} />
			</div>
		) ;
	}
}

export default ColorDetection ;