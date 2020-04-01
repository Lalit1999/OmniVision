import React, { Component } from 'react';

import './fileup.css' ;

class FileUp extends Component {
	state = {
		file : {} ,
	}

	onInputChange = (event) => {
		this.setState({ file: event.target.files[0] });
	}

	createUploadButton = () => {
		if(this.state.file.name)
			if(this.state.file.type.startsWith('image'))
				return <button className="fileup-btn" onClick={this.onUploadClick}> Upload</button> ;
			else
				return <p className="warning"> This file is not an image </p> 
		else
			return null ;
	}

	onUploadClick = () => {
		// console.log(this.state.file) ;
		const data = new FormData() ;
		let url = 'https://ov-api.herokuapp.com/upload/' + this.props.type ;
		data.append('upload', this.state.file) ;

		fetch(url,{
				method : 'post' ,
				headers : { 'Authorization' : 'Bearer ' + this.props.token } ,
				body : data ,
			})
			.then(res => {
				if(res.ok)
					return res.json() ;
				else
					throw Error(res.statusText) ;
			})
			.then(data =>{	
				this.props.submit(data) ;
			}) 
			.catch( err  => console.log(err) ) ;
	}

	render() {
		const {color} = this.props ;
		// To check file type
		// console.log(this.state.file) ;
		return (
			<div className="file-con">
				<label  style={{ backgroundColor: color }} htmlFor="file"> Choose a File </label>
				<input type="file" className="file-input" name="file" id="file"
					 onChange={this.onInputChange}/>
				<p> {this.state.file.name} </p>
				
				{this.createUploadButton()}
			</div>
		);
	}
}

export default FileUp ;