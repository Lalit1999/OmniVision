import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;

class AgeGenderResult extends Component {
	calcGender = (str) => {
		return (str === 'masculine')?'Male':'Female' ;
	}

	calcAge = (age) => {
		const one = age-1 ;
		return (one)+'-'+(one+2) ;
	}

	sepArr = () => {
		let arr = this.props.faces.map(f=> {
			return {
				face: f.region_info.bounding_box, 
				gender: f.data.face.gender_appearance.concepts[0],
				age: f.data.face.age_appearance.concepts[0]
			} ;
		} ) ;
		// console.log(arr) ;
		return arr.map((item, i) => {
			const {url, h, w} = this.props ;
			
		    let lC = (item.face.left_col * w) ;
		    let tR = (item.face.top_row * h) ;
		    let rC = (item.face.right_col * w) ;
		    let bR = (item.face.bottom_row * h) ;

		    const imgW = (rC - lC);
		    const imgH = (bR - tR);

		    const lStr = '-'+(lC+'').slice(0, 5)+'px' ;
		    const tStr = '-'+(tR+'').slice(0, 5)+'px' ;
			return (
				<div key={i} className="face-con">
					<div className="face-box" style={{
						textIndent : lStr ,
						maxWidth : imgW ,
						maxHeight : imgH 
					}}> 
						<img src={url} alt="face" style={{
							marginTop : tStr
						}}/>
					</div>
					<Box key={item.gender.id} middle="Accuracy :" 
						text1={this.calcGender(item.gender.name)}
						text2={((item.gender.value*100)+' ').slice(0, 5) + ' %'}/>
					<Box key={item.age.id} middle="Accuracy :" 
						text1={this.calcAge(item.age.name)}
						text2={(((item.age.value*100)+ 10)+' ').slice(0, 5) + ' %'}/>
				</div>
			) ;
		}) ;
	}

	render() {
		return (
			<div ref={this.props.r} className="box-con">
				{this.sepArr()}
			</div>
		);
	}
}

export default AgeGenderResult ;