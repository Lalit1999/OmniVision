import React, { Component } from 'react';

import './box.css' ;

class Box extends Component {
	calculateLightNess = () => {
		let {color} = this.props ;
		let r = '0x' + color[1] + color[2] ;
		let g = '0x' + color[3] + color[4] ;
		let b = '0x' + color[5] + color[6] ;
		let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b) );
		//console.log(r, g, b, hsp) ;
		if(hsp>120)
			return 'black' ;
		else
			return 'white' ; 
	} 

	render() {
		return (
			<div className="box" style={{
				backgroundColor : this.props.color ,
				color : this.calculateLightNess()  
			}}>
				<p className="t1"> {this.props.text1} </p>
				<p className="tcolor"> {this.props.color} </p>
				<p className="t2"> {this.props.text2} </p> 
			</div>
		);
	}
}

export default Box ;