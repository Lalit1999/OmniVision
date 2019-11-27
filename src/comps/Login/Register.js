import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import './Register.css' ;

class Register extends Component 
{	
	constructor(props)
	{
		super(props) ;
		this.state = {
      		username : '' ,
     		pw : '' ,
      		rpw : '' ,
      		error: ''
		} ;
	}

	onInputChange = (event) => {
		if(event.target.name === 'username')
		{
			if(event.target.value === '')
				this.setState({error: 'Username Name can not be blank'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({username : event.target.value}) ;
		}
		else if(event.target.name === 'pw')
		{
			if(event.target.value === '')
				this.setState({error: 'Password can not be blank'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({pw : event.target.value}) ;
		}
		else if (event.target.name === 'rpw')
		{
			if(event.target.value === '')
				this.setState({error: 'password can not be blank'}) ;
			else if (event.target.value !== this.state.pw )
				this.setState({error: 'Password does not match'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({rpw : event.target.value}) ;
		}
		
	}
	onButtonClick = () => {
		console.log("button clicked") ;
		if(this.state.error === '')
		{
			const obj = {
				name : this.state.username ,
				pw : this.state.pw
			} ;
			fetch('https://ov-api.herokuapp.com/register',{
				method : 'post' ,
				headers : { 'Content-Type' : 'application/json'} ,
				body :JSON.stringify(obj) ,
			})
			.then(res => {
				if(res.ok)
					return res.json() ;
				else
					throw Error(res.statusText) ;
			})
			.then(data => {	
				this.setState({username: '', pw: '', rpw: ''});
				
				//Remove alert and add error jaisa paragraph with green color 
				alert('You have been successfully registered') ;
				
				console.log(data) ;
			}) 
			.catch( err  => console.log(err) ) ;
		}
		else
		{
			this.setState({error: 'Please Fix any errors before submitting form'})
		}
	}
	render() 
	{
  		let err = (this.state.error.length > 1) ? 'error' : '' ;
		return (
			<div className = "bgk">
				<div className="register">
	              <h3 className="register-title">Register </h3>
				  <p className={err}>{this.state.error}</p>

	              <div>
	                <label className="lbel">UserName : </label>
	                <input  className="inpu" type="text" name="username" onChange={this.onInputChange} 
	                		value={this.state.username} />
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
	              
	              <div className="btn-cona">
	                <button onClick={this.onButtonClick} > Sign-up </button> 
	                <Link className="btn-con2" to = '/login'>Sign-in</Link> 

	              </div>
	            </div>
			</div>     
		);
	}
}

export default Register ;	