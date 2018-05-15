import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { SERVER_URL } from '../constants';



class TripNameForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			destinations: [],
			trip: ''
		};
	}
	onNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	}

	ComponentDidMount = () => {
		console.log('TripNameForm DID mount!')
	}

	onSubmit = (e) => {
		e.preventDefault();
			console.log('form was submitted', this.state);
		axios.post(SERVER_URL+'/trip', {newTrip: this.state, user: this.props.user} )
		.then(res => {
			console.log("trip name SUCCESS!", res.data);
			this.setState({
				trip: res.data
			})
			let tripDataFromBE = res.data
			this.props.updateTrip(res.data);
		})
		.catch(err => {
			console.log("ERROR", err)
		});
	}
	render(){
		return (
			<div className='TripNameForm'>
				<form onSubmit={this.onSubmit}>
					<div>
						<label><h1>Give your trip a name: </h1></label>
						<input
							onChange={this.onNameChange}
							placeholder="Trip to India!"
							type="text"
							value={(this.state.name)} />
					</div>
					<Button type='submit'>Create Trip</Button>
				</form>
			</div>		
		)
	}
}

export default TripNameForm;