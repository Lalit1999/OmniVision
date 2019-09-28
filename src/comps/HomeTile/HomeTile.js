import React, { Component } from 'react';

class HomeTile extends Component 
{
	render() 
	{
		return (
			<div> This is {this.props.name} </div>
		);
	}
}

export default HomeTile ;
