import React, { Component } from 'react';

import ContentChoice from '../../choice/ContentChoice.js' ;
import SampleImage from '../sample/SampleImage.js' ;
import col_sample from '../sample/ColorSample.js' ;
import './detcont.css' ;

class DetectContent extends Component {
	constructor()
	{
		super() ;
		this.state = {
			input : ''
		} ;
	}
	
	onInputChange = (event) => {
		this.setState({ input: event.target.value});
	}

	render() {
		const {color} = this.props ; 
		return (
			<div className="DetectContent">
				<h1 className="detcont-title"
				 style={ {textShadow: '-3px -3px 0 '+color+', 3px -3px 0 '+color+', -3px 3px 0 '+color+', 3px 3px 0 '+color+''} }>
				 {this.props.title} </h1>
				<h3 className="detcont-subtitle" 
				 style={ {textShadow: '-3px -3px 0 '+color+', 3px -3px 0 '+color+', -3px 3px 0 '+color+', 3px 3px 0 '+color+''} }>
				 {this.props.text} </h3>
				<ContentChoice choices={['Sample', 'Input-URL', 'Upload']} color={this.props.color}
				 Sample={<SampleImage data={col_sample} onImageClick={this.props.onSampleImageClick}/>}
				 Input-URL={
				 	<div className="input-con" >
						<input type="text" style={{color: color}}
							onChange={this.onInputChange} value={this.state.input}/>
						<button style={ {backgroundColor: color} } 
							onClick={() => this.props.onSubmit(this.state.input)}> Detect </button>
					</div>}
				 Upload={<div> Coming Soon !</div>}
				/>
			</div>
		);
	}
}

export default DetectContent ;
