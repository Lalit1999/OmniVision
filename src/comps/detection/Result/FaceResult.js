import React, { Component } from 'react';

import Box from '../../Box/Box.js' ;
 
class FaceResult extends Component {

	sepArr = () => {
		//console.log(this.props.faces) ;
		let arr = this.props.faces.map(f=> {
			return {face: f.region_info.bounding_box, 
				race: f.data.face.multicultural_appearance.concepts[0]} ;
			} ) ;
		console.log(arr, this.props.wdt, this.props.ht) ;
		return arr.map((item, i) => {
			const {url, wdt, ht} = this.props ;
			
			let lC = item.face.left_col * wdt ;
		    let tR = item.face.top_row * ht ;
		    let rC = (item.face.right_col * wdt) ;
		    let bR = (item.face.bottom_row * ht) ;

		    const imgW = (rC - lC);
		    const imgH = (bR - tR);
		    
		    console.log(lC, rC, tR, bR) ;
		    console.log(imgW, imgH) ;
			
			let xStr = ((lC/wdt)*100*1.49+'').slice(0, 5)+'%' ;
			let yStr = ((tR/ht)*100*1.49+'').slice(0, 5)+'%' ;
			console.log(xStr+' '+ yStr) ;
			
			return (
				<div key={i} className="face-con">
					<div className="face-box" style={{
						width: imgW ,
						height: imgH ,
						backgroundImage: "url(\""+ url +"\")" ,
						backgroundPosition: xStr+' '+ yStr,
						backgroundSize: wdt+'px '+ht+'px'
					}}> &nbsp; </div>
					<Box key={item.race.id} middle="Accuracy :" text1={item.race.name}
								text2={((item.race.value*100)+' ').slice(0, 5) + ' %'}/>
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