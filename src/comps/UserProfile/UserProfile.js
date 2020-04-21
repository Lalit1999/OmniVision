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

	formatDate = (dt) => {
		const dat = new Date(dt).toLocaleString("en-US", {timeZone: "Asia/Kolkata"}); ;
		return dat ;
	}
	
	render()
	{	console.log(this.props.user) ;
		if(this.props.user)
		{
			return (
				<div className="propfileBox">
					<div className="heading">Profile</div>
					<div className="ptest">
						<div className="left">
							<div className = "left_corner_one">
								<img src = {pencil} alt="pencil" className= "ui" />
							</div>
							<div className = "left_corner_two">
								<p>Created at </p>
	 							<p>{this.formatDate(this.props.user.createdAt)}</p>
	 							<Link className = "button" to="/history"> History </Link> 
	 							<button className = "button" >Logout</button>
	 							<button className = "button " >Delete account</button>
							</div>
						</div>
						<div className="right">
							<div className = "right_corner_one">
								<div className = "flex">
									<p>Name</p>
									<p>{this.props.user.name}</p>							
								</div>
								<div className = "flex">
									<p>E-mail</p>
									<p>{this.props.user.email}</p>
								</div>
								<div className = "flex">
									<p>Mobile No.</p>
									<p>{this.props.user.mobile}</p>
								</div>
							</div>
							<div className = "right_corner_two">
								<button className = "button " >Change password</button>
								<button className = "button " >Edit Data</button>
								
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

export default UserProfile ;