import React, { Component } from 'react';

class AgeGenderResult extends Component {
	render() {
		console.log(this.props.faces) ;
		return (
			<div ref={this.props.r} className="box-con">
				This is Age AgeGenderResult
			</div>
		);
	}
}

export default AgeGenderResult ;