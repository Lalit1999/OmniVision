import React, { Component } from 'react';

import Eye from '../images/eye2.png' ;
import './header2.css' ;

class Header2 extends Component {
	render() {
		return (
			<div className="header2">
				 <div className="header2-menu"> Menu </div>
				 <div className="ov">
				 	<p className="h2-para">
				 		<img className="eye" alt="eye" src={Eye} />
				 		<span className="ovname">OmniVision</span> 
				 	</p> 
				 </div>
				 <div className="header2-login"> Login </div>
			</div>
		);
	}
}

export default Header2 ;
