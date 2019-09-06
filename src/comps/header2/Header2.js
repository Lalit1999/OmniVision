import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

import Eye from '../images/eye2.png' ;
import './header2.css' ;

class Header2 extends Component {
	render() {
		const {color} = this.props ;
		return (
			<div style={{ backgroundColor : color}} className="header2">
				 <div className="header2-menu"> Menu </div>
				 <div style={{ backgroundColor : color}} className="ov">
				 	<p className="h2-para">
				 		<Link to="/"><img className="eye" alt="eye" src={Eye} />
				 		<span className="ovname">OmniVision</span></Link> 
				 	</p> 
				 </div>
				 <div style={{ color: color}} className="header2-login">
				 	<Link to="/login"> Login </Link>
				 </div>
			</div>
		);
	}
}

export default Header2 ;
