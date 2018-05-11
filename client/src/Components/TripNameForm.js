import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class TripNameForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			destinations: []
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
		axios.post('/trip', this.state )
		.then(result => {
			console.log("trip name SUCCESS!", result)
			// this.props.updateUser();
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
							placeholder="My TWo Week Trip to Europe!"
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