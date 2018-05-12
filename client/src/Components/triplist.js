import React, { Component } from 'react';
import axios from 'axios';

class TripList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tripId: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	// componentWillMount = () => {
	// 	axios.get('http://localhost:3001/user/'+this.props.user.id+'/trips').then(user =>{
	// 		console.log("user is:", user)
	// 	})
	// }

	handleClick(e) {
		this.setState({
			tripId: e.target.id
		})
	}


	render() {
		console.log("these are the trips:", this.props.trips)
		let properArray = Array.from(this.props.trips)

		let mappedTrips = properArray.map( (trip, id) => (<p onClick={(e) => this.handleClick(e)} id={id} key={id}>{trip.name}</p>) )
		return (
			<div>
				<p>THIS IS MY TRIP LIST!!</p>
				<p>The selected trip id is {this.state.tripId}</p>
				{mappedTrips}
			</div>

		)
	}
}

export default TripList