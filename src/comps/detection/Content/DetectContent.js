import React, { Component } from 'react';

import ContentChoice from '../../choice/ContentChoice.js' ;
import SampleImage from '../sample/SampleImage.js' ;
import FileUp from './FileUp.js' ;
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

	returnUploadDiv = () => {
		return <FileUp color={this.props.color}/> ;
	}

	returnCameraDiv = () => {
		return <div> Coming Soon!.. </div> ;
	}

	checkUserLoggedIn = (fn) => {
		if(this.props.user)
			return fn() ;
		else
			return (
				<div className="warning">
				 You need to be logged in to view this content.
				 Click the button at Top-Right to Login or Register. 
				</div>
			) ; 
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
				<ContentChoice choices={['Sample', 'Input-URL', 'Upload', 'Camera']} color={this.props.color}
				 Sample={<SampleImage data={this.props.data} onImageClick={this.props.onSampleImageClick}/>}
				 Input-URL={
				 	<div className="input-con" >
						<input type="text" style={{color: color}}
							onChange={this.onInputChange} value={this.state.input}/>
						<button style={ {backgroundColor: color} }
							onClick={() => this.props.onSubmit(this.state.input)}> Detect </button>
					</div>}
				 Upload={this.checkUserLoggedIn(this.returnUploadDiv)}
				 Camera={this.checkUserLoggedIn(this.returnCameraDiv)}
				/>
			</div>
		);
	}
}

export default DetectContent ;
