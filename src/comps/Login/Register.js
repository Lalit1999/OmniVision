import React, { Component } from 'react';
import './Register.css' ;

class Register extends Component {
	render() {
		return (
			<div className = "bgk">
				<div className="register">
	              <h3 className="register-title">Register </h3>
	              <div>
	                <label className="lbel">User Name : </label>
	                <input  className="inpu" type="text" name="name" />
	              </div>
	              <div>
	                <label className="lbel">Password : </label>
	                <input className="inpu" type="password"  name="name" />
	              </div>
	              <div>
	                <label className="lbel">Re-enter Password : </label>
	                <input className="inpu" type="password"  name="name" />
	              </div>
	              <div>
	              	<label className="lbel">Mobile no. : </label>
	                <input  className="inpu" type="text" name="name" />
	              </div>
	              <div>
	              	<label className="lbel">Email-ID : </label>
	                <input  className="inpu" type="text" name="name" />
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
