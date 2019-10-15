import React, { Component } from 'react';

import './hometile.css' ;

class HomeTile extends Component 
{
	render() 
	{
		return (
			<div className={'home-tile '+this.props.img}>
				<div className="home-tile-child">
					{this.props.name} 
				</div>	
			</div>
		);
	}
}

export default HomeTile ;
