import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { SERVER_URL } from '../constants';

// import {Tabs, Tab} from 'material-ui/Tabs';

// MATERIAL UI
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			// name: '',
			email: '',
			password: ''
			// value: 'login'
		};
	}

	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	}
	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
	}

	handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted. this.state:', this.state);
		axios.post(SERVER_URL+'/auth/login', {
			email: this.state.email,
			password: this.state.password })
		.then(result => {
			console.log("SUCCESSFUL LOGIN! result.data is ", result.data)
			localStorage.setItem('mernToken', result.data.token);
			this.props.updateUser();
		})
		.catch(err => {
			console.log("LOGIN ERROR", err.response)
		});
	}

	render() {
		if(this.props.user) {
			return (<Redirect to="/profile" />);
		}
		return(
			<form onSubmit={this.handleLoginSubmit}>                     
			<div>                         
			<input type='text' name='Email' placeholder='email' value={this.state.email} onChange={this.handleEmailChange} />                     
			</div>                     
			<div>                         
			<input type='password' name='Password' placeholer='password' value={this.state.password} onChange={this.handlePasswordChange} />                     
			</div>                    
			 <div>                         
			 <input type='submit' value='Login' />                     
			 </div>                 
			 </form>
		);
	}
}

export default Login;