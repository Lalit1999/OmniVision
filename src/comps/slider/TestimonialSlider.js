import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import i1 from '../images/i1.jpg' ;
import i2 from '../images/i2.jpg' ;
import i3 from '../images/i3.jpg' ;
import i4 from '../images/i4.jpg' ;

import './testimonial.css' ;

class TestimonialSlider extends Component {
	checkImage = (str) => {
		switch(str)
		{	case 'i1' : return i1 ;
			case 'i2' : return i2 ;
			case 'i3' : return i3 ;
			case 'i4' : return i4 ;
			default : return i1 ;
		}
	}

	dataList = () => {
		return this.props.data.map( (item, i) => {
			return (
				<div className="testim-slide" key={i}>
					<div className="testim-up">
						<div>
							<img className="testim-img" src={this.checkImage(item.img)} 
								alt={item.msg} />
						</div>
						<div>
							<p className='testim-name'> {item.name} </p>
							<p className='testim-role'> {item.role} </p>
						</div>
					</div>
					<div className="testim-down">
						<p className="testim-msg">{item.msg} </p>
					</div>
				</div>
			) ;
		}) ;
	}

	render() {
		const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            effect: 'fade',
            autoplay: {
            	disableOnInteraction: false ,
                delay: 3000
            },
            pagination: {
                el: '.testim-bullet',
                type: 'bullets',
                clickable: true
            },
            renderPagenation: () => (
                <div className="testim-bullet"></div>
              ),
        }

		return (
			<div className="testim-slider-parent">
				<Swiper {...params}>
                    {this.dataList()}
                </Swiper>
                <div className="testim-bullet"></div>
			</div>
		);
	}
}

export default TestimonialSlider ;

					// <div className="slide" style={item.style}>
					// 	<div className="cont">
					// 		<div className="row">
					// 			<h2 className="slide-heading"> {item.title} </h2>
					// 			<p className="slide-message"> {item.message}</p>
					// 		</div>
					// 		{this.createButton(item.link)}
					// 	</div>
					// </div>
