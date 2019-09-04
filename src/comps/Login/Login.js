import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;
import './Login.css' ;

class Login extends Component
{
	constructor(props)
	{
		super(props) ;
		this.state = {
      		user : '' ,
     		id : '' ,
      		pw : '' ,
		} ;
	}
	onIdChange = (event) => {
    this.setState({ id: event.target.value}) ;
  	} 
  
  	onPwChange = (event) => {
    this.setState({ pw: event.target.value}) ;
  	}

  	checkUser = () => {
    if( this.state.id === 'admin' && this.state.pw === 'Amazing#15')
      this.setState({ user : this.state.id, pw: '', id: ''}) ;
  	}

	render() {
		return (
			<div className = "bg">
				<div className="login">
	              <h3 className="login-title">Login </h3>
	              <div>
	                <label className="lbl">User : </label>
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
