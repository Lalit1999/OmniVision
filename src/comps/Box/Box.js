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
		let styleObj = {} ;
		let middle = '' ;
		if(this.props.color)
		{	middle = this.props.color ;
			styleObj = {
				backgroundColor : this.props.color ,
				color : this.calculateLightNess()  
			} ;
		}
		else if (this.props.middle)
		{	middle = this.props.middle ;
			styleObj = {
				backgroundColor : 'rgba(255, 255, 255, 0.8)' ,
				color: 'black'
			} ;
		}
		return (
			<div className="box" style={styleObj}>
				<p className="t1"> {this.props.text1} </p>
				<p className="tcolor"> {middle} </p>
				<p className="t2"> {this.props.text2} </p> 
			</div>
		);
	}
}

export default Box ;