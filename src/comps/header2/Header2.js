import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import CheeseburgerMenu from 'cheeseburger-menu' ;
import HamburgerMenu from 'react-hamburger-menu' ;

import Eye from '../images/eye2.png' ;
import LoginMenu from '../LoginMenu/LoginMenu.js' ;
import './header2.css' ;

class Header2 extends Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      menuOpen: false,
	    }
	}

	openMenu = () => {
	    this.setState({ menuOpen: true })
	}

	closeMenu = () => {
		console.log("trigger") ;
	    this.setState({ menuOpen: false })
	}

	render() {
		const {color} = this.props ;
		// console.log(window.location.pathname) ;
		if(window.location.pathname === '/')
		{
			return null ;
		}
		else
		{
			return (
				<div style={{ backgroundColor : 'rgba(0, 0, 0, 0.4)'}} className="header2">
					 <div className="header2-menu">
					 	<CheeseburgerMenu isOpen={this.state.menuOpen} closeCallback={this.closeMenu}>
								<LoginMenu closeCallback={this.closeMenu}/>
						</CheeseburgerMenu>
						<HamburgerMenu isOpen={this.state.menuOpen} menuClicked={this.openMenu} 
									   width={32} height={24} strokeWidth={8} color='white' 
									   borderRadius={1} animationDuration={0.5} /> 
					 </div>
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
}

export default Header2 ;
