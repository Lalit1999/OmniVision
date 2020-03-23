import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import './Register.css' ;

class Register extends Component 
{	
	state = {
  		username : '' ,
 		pw : '' ,
 		email: '' ,
  		rpw : '' ,
  		error: ''
	} ;

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

	onEmailChange = (event) => {
		//eslint-disable-next-line
		var emre = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi;
		if(event.target.value === '')
			this.setState({error: 'E-Mail can not be blank'}) ;
		else if(emre.test(event.target.value) === false)
			this.setState({error: 'This might not be a valid E-Mail address'});
		else
		{	if(this.state.error === 'E-Mail can not be blank' || this.state.error === 'This might not be a valid E-Mail address') 
				this.setState({error: ''}) ;
		}
		this.setState({ email : event.target.value }) ;
	}

	onButtonClick = () => {
		if(this.state.error === '')
		{
			const obj = {
				name : this.state.username ,
				password : this.state.pw ,
				email : this.state.email 
			} ;
			fetch('https://ov-api.herokuapp.com/users',{
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
				this.setState({username: '', pw: '', rpw: '', email: ''});
				
				this.props.setUser(data) ;

				this.props.history.push('/');
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
	                <label className="lbel">Username : </label>
	                <input  className="inpu" type="text" name="username" onChange={this.onInputChange} 
	                		value={this.state.username} />
	              </div>
	              <div>
	                <label className="lbel">E-Mail : </label>
	                <input  className="inpu" type="text" name="email" onChange={this.onEmailChange} 
	                		value={this.state.email} />
	              </div>
	              <div>
	                <label className="lbel">Password : </label>
	                <input className="inpu" type="password"  name="pw" onChange={this.onInputChange}
	                		 value={this.state.pw} />
	              </div>
	              <div>
	                <label className="lbel">Re-enter&ensp; Password : </label>
	                <input className="inpu" type="password"  name="rpw" onChange={this.onInputChange}
	                		 value={this.state.rpw} />
	              </div>
	              
	              <div className="btn-cona">
	                <button onClick={this.onButtonClick} > Submit </button> 
	                <Link className="btn-con2" to = '/login'> Login </Link> 

	              </div>
	            </div>
			</div>     
		);
	}
}

export default Register ;	