import React, { Component } from 'react';
import TripList from './Components/triplist';

class Profile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		if(this.props.user){
			return(
				<div>
					<h2>Hello again, {this.props.user.name}!</h2>
					<h4>Your email is {this.props.user.email}.</h4>
					<TripList trips={this.props.user.trips}/>
				</div>
			);
		}
		return(
			<div>
				<p>PROFILE PAGE! You must be logged in to view this page.</p>
				<p>Would you like to <a href="/login">log in</a> or <a href="/signup">sign up</a>?</p>
			</div>
		);
	}
}

export default Profile;