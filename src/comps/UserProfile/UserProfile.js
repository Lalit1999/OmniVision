import React from 'react' ;
import {Link} from'react-router-dom' ;
import {Redirect} from'react-router-dom' ;

import './UserProfile.css' ;
import pencil from "../LoginMenu/pencilicon.png" ;


class UserProfile extends React.Component
{	
	state = {
	  	userprofile : {} 
	} ;
	
	render()
	{	console.log(this.props.user) ;
		if(this.props.user)
		{
			return (
				<div className="propfileBox">
					<div className="ptest">
						<div className="left">
							<div className = "left_corner_one">
								<img src = {pencil} alt="pencil" className= "ui" />
							</div>
							<div className = "left_corner_two">
								<p>Created at </p>
	 							<p>{this.props.user.createdAt}</p>
	 							<Link to="/history"> History </Link> 
	 							<button className = "button button-a " >Logout</button>
							</div>
						</div>
						<div className="right">
							<div className = "right_corner_one">
								<p>Name</p>
								<p>{this.props.user.name}</p>							
								<p>E-mail</p>
								<p>{this.props.user.email}</p>
								<p>Phone number</p>
								<p>{this.props.user.mobile}</p>
							</div>
							<div className = "right_corner_two">
								<button className = "button button-a " >Change password</button>
								<button className = "button button-a " >Edit Data</button>
							</div>
						</div>
					</div>
				</div>
			) ;
		}
		else
		{	
			return <Redirect to = '/login' />
		}	
		
	}
}

export default userprofile ;