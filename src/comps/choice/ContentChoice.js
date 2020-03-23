import React, { Component } from 'react';

import './contentchoice.css' ;

class ContentChoice extends Component {
	state = {
		current : '' ,
	} ;

	componentDidMount = () => {
		this.setState({current: this.props.choices[0]});
	}

	checkActive = (strx) => {
		let str = 'choice-box ' ;
		if(strx === this.state.current)
			str += 'c-active' ;
		return str ;
	}

	createChoices = () => {
		return this.props.choices.map(choice => {
			let str = 'choice-box ' ;
			let styleObj = {
						color: this.props.color,
						border : '2px solid ' + this.props.color
					} ;
			if(choice === this.state.current)
			{	str += 'c-active' ;
				styleObj.backgroundColor = this.props.color ;
			}
			return ( 
				<div className={str} key={choice} style={styleObj}
					onClick={() => {this.setState({current: choice});}} > 
					{choice} 
				</div> );
			}
		) ;
	}

	render() {
		// console.log(this.props) ;
		return (
			<div className="cont-choice">
				<div className="choices">
					{this.createChoices()}
				</div>
				<div className="ch-cont">
					{this.props[this.state.current]}
				</div> 
			</div>
		);
	}
}

export default ContentChoice ;
