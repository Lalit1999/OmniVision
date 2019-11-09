import React from 'react' ;
import Clarifai from 'clarifai' ;

import DetectContent from './Content/DetectContent.js' ;
import Image from '../Image/Image.js' ;
import ColorResult from './Result/ColorResult.js' ;
import './colordetect.css' ;

const app = new Clarifai.App( { apiKey: '8ffd32e4a8994da296c0be708e6f4cec' } );

class ColorDetection extends React.Component
{	constructor()
	{
		super() ;
		this.resRef = React.createRef() ;
		this.state = {
			error: '' ,
			img : '' ,
			data : [] 
		} ;
	}

	scrollToBottom = () => {
	    this.resRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	componentDidUpdate = () => {
		this.scrollToBottom() ;
	}

	onButtonSubmit = (txt) => {
		//console.log(txt) ;
		app.models.predict(Clarifai.COLOR_MODEL, txt)
		.then( data => {
			// console.log(data.outputs[0].data.colors) ;
			this.setState({error: '', img: txt, data: data.outputs[0].data.colors});
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
				text="All-Seeing Eye will detect colors in your pictures" color={this.props.color}/>
				<p className={'color-error '+none}> {this.state.error} </p>
				<Image link={this.state.img} />
				<ColorResult r={this.resRef} scroll={this.scrollToBottom} colors={this.state.data} />
			</div>
		) ;
	}
}

export default ColorDetection ;