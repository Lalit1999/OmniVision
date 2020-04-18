import React from 'react' ;

import './History.css' ;

class History extends React.Component
{
	render()
	{	console.log(this.props) ;
		return (
			<div className="test">
				<div>
					<h1 className = "title">History</h1>
					<h1 className = "title">History1</h1>
					<h1 className = "title">History2</h1>
					<h1 className = "title">History3</h1>
				</div>
			</div>
			) ;
	}
}

export default History ;

