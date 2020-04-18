import React from 'react' ;
import {Link} from'react-router-dom' ;

import './menu.css' ;
import profile from "./profile.png" ;

class LoginMenu extends React.Component
{
	state = {
    	userprofile : {} 
    } ;

    classMenu = {
    	face : 'item link' ,
    	color : 'item link' ,
    	general : 'item link' ,
    	age : 'item link' ,
    	history: 'item link' ,
    } ;
	
	
	userProfile = () => {
		if(this.props.usertoken)
			return <Link to="/Userprofile"><img src = {profile} alt="profile" className="pi" /> </Link> ;
		else
			return <Link to="/login"> Login </Link> ;
	}

	userHistory = () => {
		if(this.props.usertoken)
			return <Link className={this.classMenu.history} to='/history'> User History {this.props.user} </Link> ;
	}

	render()
	{
		return (
			<div className="loginmenu">
				<div> {this.userProfile()} </div>				
				<div className="burger" >
					<Link className={this.classMenu.face} to='/'> Home </Link>
					<Link className={this.classMenu.face} to='/face'> Face Detection </Link>
					<Link className={this.classMenu.general} to='/general'> Object Detection </Link>
					<Link className={this.classMenu.color} to='/color'> Color Detection </Link>
					<Link className={this.classMenu.age} to='/age'> Age & Gender Detection </Link>
					<div> {this.userHistory()} </div>				

				</div>
			</div>
			) ;
	}
}

export default LoginMenu ;

