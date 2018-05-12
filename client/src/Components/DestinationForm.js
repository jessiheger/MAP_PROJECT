import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class DestinationForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
      		landmark: '',
      		city: '',
      		state: '',
      		country: '',
      		image: ''
      	};
	}
	onLandmarkChange = (event) => {
		this.setState({
			landmark: event.target.value,
		})
	}
	onCityChange = (event) => {
		this.setState({
			city: event.target.value,
		})
	}
	onStateChange = (event) => {
		this.setState({
			state: event.target.value,
		})
	}
	onCountryChange = (event) => {
		this.setState({
			state: event.target.value,
		})
	}
	onImageChange = (event) => {
		this.setState({
			image: event.target.value,
		})
	}
	onSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		axios.post('/destination', {newDestination: this.state, user: this.props.user } ) 
		.then(result => {
			console.log("destination SUCCESS!", result)
		})
		.catch(err => {
			console.log("ERROR", err)
		})
	}
	render(){
		return (
			<div className='DestinationForm'>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Landmark</label>
						<input
							autoFocus= {this.props.autoFocus}
							onChange={this.onLandmarkChange}
							placeholder="Taj Mahal"
							type="text"
							value={(this.state.landmark)} />
					</div>
					<div>
						<label>City</label>
						<input
							onChange={this.onCityChange}
							placeholder="Agra"
							type="text"
							value={(this.state.city)} />
					</div>
					<div>
						<label>State</label>	
						<input
							onChange={this.onStateChange}
							placeholder="Uttar Pradesh"
							type="text"
							value={(this.state.state)} />
					</div>
					<div>
						<label>Country</label>	
						<input
							onChange={this.onCountryChange}
							placeholder="India"
							type="text"
							value={(this.state.country)} />
					</div>
					<div>
						<label>Image Upload</label>
						<input
							onChange={this.onImageChange}
							placeholder="India"
							type="text"
							value={(this.state.image)} />
					</div>
					<button type='submit'>Add Destination</button>
				</form>
			</div>
		)
	}
}

export default DestinationForm;