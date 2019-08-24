import React from 'react' ;

// import Banner from '../banner/Banner.js' ;
// import BannerTwo from '../banner/BannerTwo.js' ;
// import Slider from '../slider/Slider.js' ;
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
	            title: 'PSYMENT',
	            link : '/' ,
	            message: 'Welcome To the World of Self Discovery',
         	},
         	{	style : {
	            	backgroundImage: 'url(' + i3+ ')',
            	},
	            title: 'AQUESS',
	            link : '/program/AQUESS' ,
	            message: 'An Online Free Query System for Students',
         	},
            {	style : {
	            	backgroundImage: 'url(' + i1+ ')',
            	},
	            title: 'Sarathi',
	            message: 'Workshop organising solution for Schools and Colleges' ,
	            link : '/program/Sarathi'
	        } ,
	        {	style : {
	            	backgroundImage: 'url(' + i2+ ')',
            	},
	            title: 'Personal Consultation',
	            link : '/program/personal' ,
	            message: 'Get personal consultation from our experts',
         	},
        ];
	}

	render()
	{
		return(
			<div>
				this is home
			</div>
		) ;
	}
}

export default Home ;

				
				
				// <Slider data={this.data} />