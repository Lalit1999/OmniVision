import React from 'react' ;
import {Link} from'react-router-dom' ;

import './UserProfile.css' ;
import pencil from "../LoginMenu/pencilicon.png" ;


class UserProfile extends React.Component
{	
	state = {
	  	userprofile : {} 
	} ;
	
	render()
	{	console.log(this.props) ;
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
								<p>Created at</p>
								<Link to="/history"> History </Link> 
								<p>Logout(button)</p>
							</div>
						</div>
						<div className="right">
							<div className = "right_corner_one">
								<p>Name</p>
								<p>E-mail</p>
								<p>Phone number</p>
							</div>
							<div className = "right_corner_two">
								<p>change password(link)</p>
								<p>Edit(button)</p>
							</div>
						</div>
					</div>
				</div>
			) ;
		}
		else
			this.props.history.push('/login') ;
	}
}

export default UserProfile ;

