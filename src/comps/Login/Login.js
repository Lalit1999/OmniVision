import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import './Login.css' ;

class Login extends Component
{
	state = {
  		email : '' ,
  		pw : '' ,
  		error : ''
	} ;

	onInputChange = (event) => {
		if(event.target.name === 'email')
		{
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
		if(this.state.error === '')
		{
			const obj = {
				email : this.state.email ,
				password : this.state.pw
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
				this.setState({pw: '', email: ''});
				
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

  	render() {
  		let err = (this.state.error.length > 1) ? 'error' : '' ;
		return (
			<div className = "bg">
				<div className="login">
	              <h3 className="login-title">Login </h3>
	              <p className={err}>{this.state.error}</p>
	              <div>
	                <label className="lbl">E-Mail : </label>
	                <input  className="inp" type="text" onChange={this.onInputChange}
	                	 name="email" value={this.state.id}/>
	              </div>
	              <div>
	                <label className="lbl">Password : </label>
	                <input className="inp" type="password" onChange={this.onInputChange}
	                	 name="pw" value={this.state.pw}/>
	              </div>
	              <div className="btn-con">
	                <button onClick={this.OnButtonClick}> Login </button> 
	                <Link className="btn-con2" to = '/register'> Register </Link> 
	              </div>
	            </div>
			</div>          
		);
	}
}

export default Login ;
