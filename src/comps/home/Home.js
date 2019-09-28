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
					<HomeTile name="Face Detection" />
					<HomeTile name="Color Detection" />
				</div>
				<div className="middle-box"> 
			 		<img className="home-eye" alt="eye" src={Eye} />
					<h2 className="home-title">
						<span className="sp text-focus-in">OmniVision</span>
					</h2>
				</div>
				<div className="right-box">
					<HomeTile name="Object Detection" />
					<HomeTile name="More... " />
				</div>
			</div>
		) ;
	}
}

export default Home ;

				
				