import React, { Component } from 'react';

import './fileup.css' ;

class FileUp extends Component {
	onInputChange = (event) => {
		console.log(event.target.files)
	}

	render() {
		const {color} = this.props ;
		return (
			<div className="file-con">
				<label  style={{ backgroundColor: color }} htmlFor="file"> Choose a File </label>
				<input type="file" className="file-input" name="file" id="file"
					 onChange={this.onInputChange}/>
			</div>
		);
	}
}

export default FileUp ;