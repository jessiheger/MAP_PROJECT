import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
		axios.post('/trip', {newTrip: this.state, user: this.props.user} )
		.then(res => {
			console.log("trip name SUCCESS!", res.data);
			this.setState({
				trip: res.data
			})
			let tripDataFromBE = res.data
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
						<label>Name your Trip!</label>
						<input
							onChange={this.onNameChange}
							placeholder="Trip to India!"
							type="text"
							value={(this.state.name)} />
					</div>
					<button type='submit'>Create Trip</button>
				</form>
			</div>		
		)
	}
}

export default TripNameForm;