import React, { Component } from 'react';

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
		return (
			<div className="DetectContent">
				<h1> {this.props.title} </h1>
				<h3> {this.props.text} </h3>
				<div className="input-con" >
					<input type="text" onChange={this.onInputChange} value={this.state.input}/>
					<button onClick={() => this.props.onSubmit(this.state.input)}> Detect </button>
				</div>
			</div>
		);
	}
}

export default DetectContent ;
