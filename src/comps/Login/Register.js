import React, { Component } from 'react';
import './Register.css' ;

class Register extends Component 
{	
	constructor(props)
	{
		super(props) ;
		if(this.props.ob)
		{	const {user, pw, rpw, mob, email} = this.props.ob ;
			this.state = {
	      		user : user ,
	     		pw : pw ,
	     		rpw: rpw ,
	      		mob : mob ,
	      		email : email ,
			} ;
		}
		else
		{
			this.state = {
				name : '' ,
				realname : '' ,
				link : '' ,
				biglink : '' ,
				error : ''
			} ;
		}
	}

	onInputChange = (event) => {
		if(event.target.name === 'user')
		{
			if(event.target.value === '')
				this.setState({error: 'User Name can not be blank'}) ;
			else if (this.props.user.includes(event.target.value.toLowerCase()))
				this.setState({error: 'user Name must be unique'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({user : event.target.value}) ;
		}
		else if(event.target.name === 'pw')
		{
			if(event.target.value === '')
				this.setState({error: 'Password can not be blank'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({pw : event.target.value}) ;
		}
		else if (event.taarget.name === 'rpw')
		{
			if(event.target.value === '')
				this.setState({error: 'password can not be blank'}) ;
			else if (event.target.value !== this.state.pw )
				this.setState({error: 'Password does not match'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({rpw : event.target.value}) ;
		}
		else if (event.taarget.name === 'mob')
		{
			if(event.target.value === '')
				this.setState({error: 'Mobile can not be blank'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({mob : event.target.value}) ;
		}
		else if (event.taarget.name === 'email')
		{
			if(event.target.value === '')
				this.setState({error: 'Email can not be blank'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({email : event.target.value}) ;
		}
	}
	render() 
	{
		
		return (
			<div className = "bgk">
				<div className="register">
	              <h3 className="register-title">Register </h3>
				  <p className = 'error'>{this.state.error}</p>

	              <div>
	                <label className="lbel">User Name : </label>
	                <input  className="inpu" type="text" name="user" onChange={this.onInputChange} 
	                		value={this.state.user} />
	              </div>
	              <div>
	                <label className="lbel">Password : </label>
	                <input className="inpu" type="password"  name="pw" onChange={this.onInputChange}
	                		 value={this.state.pw} />
	              </div>
	              <div>
	                <label className="lbel">Re-enter Password : </label>
	                <input className="inpu" type="password"  name="rpw" onChange={this.onInputChange}
	                		 value={this.state.rpw} />
	              </div>
	              <div>
	              	<label className="lbel">Mobile no. : </label>
	                <input  className="inpu" type="text" name="mob" onChange={this.onInputChange} 
	                		value={this.state.mob} />
	              </div>
	              <div>
	              	<label className="lbel">Email-ID : </label>
	                <input  className="inpu" type="text" name="email" onChange={this.onInputChange} 
	                		value={this.state.email} />
	              </div>
	              <div className="btn-cona">
	                <button > Submit </button> 
	                
	              </div>
	            </div>
			</div>     
		);
	}
}

export default Register ;


	// let nam = document.getElementByName('name') ;
	// let btn = document.getElementById('btn-cona') ;
	// let pass = document.getElementByName() ;
