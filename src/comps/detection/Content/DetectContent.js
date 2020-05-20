import React, { Component } from 'react';

import ContentChoice from '../../choice/ContentChoice.js' ;
import SampleImage from '../sample/SampleImage.js' ;
import FileUp from '../Fileup/FileUp.js' ;
import './detcont.css' ;

class DetectContent extends Component {
	state = {
		input : ''
	} ;
	
	onInputChange = (event) => {
		this.setState({ input: event.target.value});
	}

	returnUploadDiv = () => {
		let str = '' ;
		if( this.props.title.includes('Age') )
			str = 'age' ;
		else if( this.props.title.includes('Color') )
			str = 'color' ;
		if( this.props.title.includes('Face') )
			str = 'face' ;
		if( this.props.title.includes('Object') )
			str = 'general' ;
		return <FileUp token={this.props.user} color={this.props.color} type={str} submit={this.submitUploadedImage}/> ;
	}

	// returnCameraDiv = () => {
	// 	return <div> Coming Soon!.. </div> ;
	// }

	submitUploadedImage = (url) => {
		console.log('Image Upload ho gayi') ;
		this.props.onSubmit(url) ;
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
				<ContentChoice choices={['Sample', 'Input-URL', 'Upload']} color={this.props.color}
				 Sample={<SampleImage data={this.props.data} onImageClick={this.props.onSampleImageClick}/>}
				 Input-URL={
				 	<div className="input-con" >
						<input type="text" style={{color: color}}
							onChange={this.onInputChange} value={this.state.input}/>
						<button style={ {backgroundColor: color} }
							onClick={() => this.props.onSubmit(this.state.input)}> Detect </button>
					</div>}
				 Upload={this.checkUserLoggedIn(this.returnUploadDiv)}
				/>
			</div>
		);
	}
}

export default DetectContent ;
				 // Camera={this.checkUserLoggedIn(this.returnCameraDiv)}
