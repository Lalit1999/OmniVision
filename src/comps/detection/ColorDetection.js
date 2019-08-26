import React from 'react' ;
import Clarifai from 'clarifai' ;

import DetectContent from './Content/DetectContent.js' ;
import Image from '../Image/Image.js' ;
import ColorResult from './Result/ColorResult.js' ;

const app = new Clarifai.App( { apiKey: '8ffd32e4a8994da296c0be708e6f4cec' } );

class ColorDetection extends React.Component
{	constructor()
	{
		super() ;
		this.state = {
			error: '' ,
			img : '' ,
			data : [] 
		} ;
	}

	onButtonSubmit = (txt) => {
		//console.log(txt) ;
		app.models.predict(Clarifai.COLOR_MODEL, txt)
		.then( data => {
			//console.log(data.outputs[0].data.colors) ;
			this.setState({error: '', img: txt, data: data.outputs[0].data.colors});
		})
		.catch( err => {
			this.setState({error: 'Image URL Invalid or Image Not Accesible'});
			console.log(err) ;
		} ) ;
	}

	render()
	{	
		return(
			<div className="color">
				<DetectContent title="Color Detection" onSubmit={this.onButtonSubmit}
					text="Now, Magic Eye will detect colors from your pictures" />
				<p className="color-error"> {this.state.error} </p>
				<Image link={this.state.img} />
				<ColorResult colors={this.state.data} />
			</div>
		) ;
	}
}

export default ColorDetection ;