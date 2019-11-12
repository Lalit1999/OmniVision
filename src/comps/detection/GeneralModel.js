import React from 'react' ;
import Clarifai from 'clarifai' ;

import DetectContent from './Content/DetectContent.js' ;
import Image from '../Image/Image.js' ;
import gen_sample from './sample/GeneralSample.js' ;
import GeneralResult from './Result/GeneralResult.js' ;
import './colordetect.css' ;

const app = new Clarifai.App( { apiKey: '8ffd32e4a8994da296c0be708e6f4cec' } );

class GeneralModel extends React.Component
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

	onSampleImageClick = (obj) => {
		// console.log(obj) ;
		this.setState({error: '', img: obj.link, data: obj.data});
	}

	onButtonSubmit = (txt) => {
		//console.log(txt) ;
		app.models.predict(Clarifai.GENERAL_MODEL, txt)
		.then( data => {
			// console.log(data.outputs[0].data.concepts) ;
			this.setState({error: '', img: txt, data: data.outputs[0].data.concepts});
		})
		.catch( err => {
			this.setState({error: 'Image URL Invalid or Image Not Accesible', img:'', data: []});
			console.log(err) ;
		} ) ;
	}

	render()
	{	//console.log(this.state) ;
		let none = ((this.state.error.length > 1) ?'':'none') ;
		return(
			<div className="color main">
				<DetectContent title="Object Detection" onSubmit={this.onButtonSubmit} 
				text="All-Seeing Eye will detect objects in your pictures" color={this.props.color}
				onSampleImageClick={this.onSampleImageClick} data={gen_sample}/>
				<p className={'color-error '+none}> {this.state.error} </p>
				<Image link={this.state.img} />
				<GeneralResult r={this.resRef} concepts={this.state.data} />
			</div>
		) ;
	}
}

export default GeneralModel ;