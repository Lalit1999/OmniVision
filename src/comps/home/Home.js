import React from 'react' ;

import HomeTile from '../HomeTile/HomeTile.js' ;
import './home.css' ;
import Eye from '../images/eye2.png' ;

class Home extends React.Component
{	
	render()
	{	
		return(
			<div className="home-box">
				<div className="left-box">
					<HomeTile name="Faces" img="faces"/>
					<HomeTile name="Colors" />
				</div>
				<div className="middle-box"> 
			 		<img className="home-eye" alt="eye" src={Eye} />
					<h2 className="home-title">
						<span className="sp text-focus-in">OmniVision</span>
					</h2>
					<p className="home-msg">The All-Seeing Eye can detect various things in images</p>
					<p className="home-msg">What will you detect?</p>
				</div>
				<div className="right-box">
					<HomeTile name="Objects" />
					<HomeTile name="Age & Gender" />
				</div>
			</div>
		) ;
	}
}

export default Home ;

				
				