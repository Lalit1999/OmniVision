import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

import './hometile.css' ;

class HomeTile extends Component 
{	
	state = {
		hover : 'no'
	} ;

	checkHoverState = () => {
		if(this.state.hover === 'no')
			return this.props.name ;
		else
			return <Link style={{ backgroundColor: this.props.color}} 
						 className="home-tile-link" to={this.props.link}> Go </Link>
	}

	render() 
	{
		return (
			<div className={'home-tile '+this.props.img} 
				 onMouseEnter={()=>this.setState({hover:'yes'})} 
				 onMouseLeave={()=>this.setState({hover:'no'})}>
				<div className="home-tile-child">
					{this.checkHoverState()} 
				</div>	
			</div>
		);
	}
}

export default HomeTile ;
