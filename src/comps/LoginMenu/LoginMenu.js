import React from 'react' ;
import {Link} from'react-router-dom' ;

import './menu.css' ;
import profile from "./profile.png" ;


class LoginMenu extends React.Component
{
	constructor(props) {
	    super(props)
	    this.classMenu = {
	    	face : 'item link' ,
	    	color : 'item link' ,
	    	general : 'item link' ,
	    	age : 'item link' ,
	    } ;
	}
	render()
	{
		return (
			<div className="loginmenu">
				<img src = {profile} alt="profile image" className="pi" />
				<div className="burger" >
					<Link className={this.classMenu.face} to='/face'> Face Detection </Link>
					<Link className={this.classMenu.general} to='/general'> Object Detection </Link>
					<Link className={this.classMenu.color} to='/color'> Color Detection </Link>
					<Link className={this.classMenu.age} to='/age'> Age & Gender Detection </Link>
				</div>
			</div>
			) ;
	}
}

export default LoginMenu ;

