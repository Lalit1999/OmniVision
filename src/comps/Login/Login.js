import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import './Login.css' ;

class Login extends Component
{
	constructor(props)
	{
		super(props) ;
		this.state = {
      		username : '' ,
      		pw : '' ,
      		error :''
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
		else if (event.target.name === 'pw')
		{
			if(event.target.value === '')
				this.setState({error: 'password can not be blank'}) ;
			else if (event.target.value !== this.state.pw )
				this.setState({error: 'Password does not match'}) ;
			else 
				this.setState({error: ''}) ;
			this.setState({pw : event.target.value}) ;
		}
		
	}

  	render() {
		return (
			<div className = "bg">
				<div className="login">
	              <h3 className="login-title">Login </h3>
	              <p>{this.state.error}</p>
	              <div>
	                <label className="lbl">Username : </label>
	                <input  className="inp" type="text" onChange={this.onIdChange} name="name" value={this.state.id}/>
	              </div>
	              <div>
	                <label className="lbl">Password : </label>
	                <input className="inp" type="password" onChange={this.onPwChange} name="name" value={this.state.pw}/>
	              </div>
	              <div className="btn-con">
	                <button onClick={this.checkUser}> Sign-in </button> 
	                <Link className="btn-con2" to = '/register'>Register</Link> 
	              </div>
	            </div>
			</div>          
		);
	}
}

export default Login ;
