import React from 'react' ;
import {Link} from'react-router-dom' ;

import './menu.css' ;
import profile from "./profile.png" ;


class LoginMenu extends React.Component
{
	constructor(props) {
	    super(props) ;
	    this.state = {
	    	userprofile : {} 
	    } ;

	    this.classMenu = {
	    	face : 'item link' ,
	    	color : 'item link' ,
	    	general : 'item link' ,
	    	age : 'item link' ,
	    } ;
	}
	
	userProfile = () => {
		if(this.props.usertoken)
			return <Link to="/profile"> Profile </Link> ;
		else
			return <Link to="/login"> Login </Link> ;
	}

	render()
	{
		return (
			<div className="loginmenu">
				<img src = {profile} alt="profile image" className="pi" userprofile = {this.userProfile} />
				<div className="burger" >
					<Link className={this.classMenu.face} to='/'> Home </Link>
					<Link className={this.classMenu.face} to='/face'> Face Detection </Link>
					<Link className={this.classMenu.general} to='/general'> Object Detection </Link>
					<Link className={this.classMenu.color} to='/color'> Color Detection </Link>
					<Link className={this.classMenu.age} to='/age'> Age & Gender Detection </Link>
					<Link className={this.classMenu.age} to='/history'> User History {this.props.user} </Link>
				</div>
			</div>
			) ;
	}
}

export default LoginMenu ;

