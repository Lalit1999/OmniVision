import React, { Component } from 'react';
import './Register.css' ;

class Register extends Component {
	render() {
		return (
			<div className = "bgk">
				<div className="register">
	              <h3 className="register-title">Register </h3>
	              <div>
	                <label className="lbel">User : </label>
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
	              	<label className="lbel">Gmail-ID : </label>
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


