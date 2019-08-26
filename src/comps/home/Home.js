import React from 'react' ;

// import Banner from '../banner/Banner.js' ;
// import BannerTwo from '../banner/BannerTwo.js' ;
import Slider from '../slider/Slider.js' ;
// import Parallax from '../Parallax/Parallax.js' ;
import './home.css' ;
// import TestimonialSlider from '../slider/TestimonialSlider.js' ;

import i1 from '../images/i1.jpg' ;
import i2 from '../images/i2.jpg' ;
import i3 from '../images/i3.jpg' ;
import i4 from '../images/i4.jpg' ;

class Home extends React.Component
{	constructor()
	{
		super() ;
		this.data = [
            {	style : {
	            	backgroundImage: 'url(' + i4+ ')',
            	},
	            title: 'OmniVision',
	            link : '/' ,
	            message: 'Magic Eye that understand images',
         	},
         	{	style : {
	            	backgroundImage: 'url(' + i3+ ')',
            	},
	            title: 'Face Detection',
	            link : '/face' ,
	            message: 'Magic Eye detecting faces in your pictures',
         	},
            {	style : {
	            	backgroundImage: 'url(' + i1+ ')',
            	},
	            title: 'Color Detection',
	            message: 'Magic Eye is not color blind' ,
	            link : '/color'
	        } ,
	        {	style : {
	            	backgroundImage: 'url(' + i2+ ')',
            	},
	            title: 'General Model',
	            link : '/general' ,
	            message: 'Day-to-Day items detected by Magic Eye',
         	},
        ];
	}

	render()
	{
		return(
			<div>
				<Slider data={this.data} />
			</div>
		) ;
	}
}

export default Home ;

				
				