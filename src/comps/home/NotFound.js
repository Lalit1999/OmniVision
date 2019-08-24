import React, { Component } from 'react';
import './not.css' ;
import i04 from "./404.png" ;

class NotFound extends Component {
	 
	render() {
		return (
			<div className="panel">
				<h1 className="f04"> 404 : </h1>
				<h2 className="f03"> Not Found ! </h2>
				<div className="fl">
					<div className="col">
						<img src={i04} alt="Not_Found" className="nf"/>  
					</div>
					<div className="col">
						<p className="taunt"> Sorry!, the page you were looking for 
							Cannot be found on this server
						</p>
						<p className="taunt"> Unless, you were looking for this page... 
							<br/>
							In which case you totally found it
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NotFound ;