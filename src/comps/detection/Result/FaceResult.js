import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
 
class FaceResult extends Component {

	sepArr = () => {
		//console.log(this.props.faces) ;
		let arr = this.props.faces.map(f=> {
			return {face: f.region_info.bounding_box, 
				race: f.data.face.multicultural_appearance.concepts[0]} ;
			} ) ;
		console.log(arr) ;
		return arr.map(item => {
			return (
				<div key={item.race.id} className="face-con">
					<div className="face-box" style={{
						width: (item.face.right_col - item.face.left_col)*300 ,
						height: (item.face.bottom_row - item.face.top_row)*300
					}}> Face </div>
					<Box key={item.race.id} middle="Accuracy :" text1={item.race.name}
								text2={(item.race.value+' ').slice(0, 5) + ' %'}/>
				</div>
			) ;
		}) ;
	}

	render() {
		return (
 			<div ref={this.props.r} className="face-res box-con">
 				{this.sepArr()}
 			</div>
		);
	}
}

export default FaceResult ; 