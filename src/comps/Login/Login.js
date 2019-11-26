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
      		error : ''
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
			else 
				this.setState({error: ''}) ;
			this.setState({pw : event.target.value}) ;
		}
		
	}
	OnButtonClick = () => {
		console.log("button clicked") ;
		if(this.state.error === '')
		{
			const obj = {
				name : this.state.username ,
				pw : this.state.pw
			} ;
			fetch('https://ov-api.herokuapp.com/login',{
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
			.then(data =>{	
				//user ko login karake state update karani hai 
				console.log(data) ;
			}) 
			.catch( err  => console.log(err) ) ;
		}
	}

  	render() {
  		let err = (this.state.error.length > 1) ? 'error' : '' ;
		return (
			<div className = "bg">
				<div className="login">
	              <h3 className="login-title">Login </h3>
	              <p className={err}>{this.state.error}</p>
	              <div>
	                <label className="lbl">Username : </label>
	                <input  className="inp" type="text" onChange={this.onInputChange}
	                	 name="name" value={this.state.id}/>
	              </div>
	              <div>
	                <label className="lbl">Password : </label>
	                <input className="inp" type="password" onChange={this.onInputChange}
	                	 name="pw" value={this.state.pw}/>
	              </div>
	              <div className="btn-con">
	                <button onClick={this.OnButtonClick}> Sign-in </button> 
	                <Link className="btn-con2" to = '/register'>Sign-up</Link> 
	              </div>
	            </div>
			</div>          
		);
	}
}

export default Login ;
