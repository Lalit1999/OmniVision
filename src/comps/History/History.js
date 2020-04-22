import React from 'react' ;
import {Link} from'react-router-dom' ;
import {Redirect} from'react-router-dom' ;

import './History.css' ;
import arrow from '../LoginMenu/down_arrow.png' ;
import ClickInfo from '../ClickInfo/ClickInfo.js' ;

class History extends React.Component
{	
	render()
	{	console.log(this.props) ;		
		if(this.props.user)
		{
			return (
				<div className="test">
					<div className="h_heading">History</div>
					<div>
						<ClickInfo>
							<div className = "title">
								<h1>Day 1</h1>
							</div>
						</ClickInfo>
						<ClickInfo>
							<div className = "title">
								<h1>Day 2</h1>
							</div>
						</ClickInfo>
						<ClickInfo>
							<div className = "title">
								<h1>Day 3</h1>
							</div>
						</ClickInfo>
						<ClickInfo>
							<div className = "title">
								<h1>Day 3</h1>
							</div>
						</ClickInfo>
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

export default History ;

