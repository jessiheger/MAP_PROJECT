import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class DestinationForm extends Component {
	constructor(props) {
		super(props);
		this.setState{
      		landmark: '',
      		city: '',
      		state: '',
      		country: '',
      		image: ''
      	};
	}
	onLandmarkChange(event) {
		this.setState({
			landmark: event.target.value,
		})
	}
	onCityChange(event) {
		this.setState({
			city: event.target.value,
		})
	}
	onCountryChange(event) {
		this.setState({
			state: event.target.value,
		})
	}
	onImageChange(event) {
		this.setState({
			image: event.target.value,
		})
	}
	onSubmit = (e) => {
		e.preventDefault();
		console.log('form was submitted', this.state);
		axios.post('/auth/signup', this.state) //WHAT TO PUT HERE
		.then(result => {
			console.log("destination SUCCESS!", result.data)
			localStorage.setItem('mernToken', result.data.token);
			this.props.updateUser();
		})
		.catch(err => {
			console.log("ERROR", err)
		})
	}
	render(){
		return (
			<div className='destinationForm'>
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
							autoFocus= {this.props.autoFocus}
							onChange={this.onCityChange}
							placeholder="Agra"
							type="text"
							value={(this.state.city)} />
					</div>
					<div>
						<label>Country</label>	
						<input
							autoFocus= {this.props.autoFocus}
							onChange={this.onCountryChange}
							placeholder="India"
							type="text"
							value={(this.state.country)} />
					</div>
					<div>
						<label>Image Upload</label>
						<input
							autoFocus= {this.props.autoFocus}
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