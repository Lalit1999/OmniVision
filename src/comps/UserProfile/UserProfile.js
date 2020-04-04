import React from 'react' ;

import './UserProfile.css' ;

class UserProfile extends React.Component
{	
	constructor(props) {
	    super(props) ;
	    this.state = {
	    	userprofile : {} 
	    } ;

	}

	
	render()
	{
		return (
			<div className="propfileBox">
				<div className="ptest">
					<p>Profile photo</p>
					<p>Name</p>
					<p>E-mail</p>
					<p>Phone number</p>
				</div>
			</div>
			) ;
	}
}

export default UserProfile ;

