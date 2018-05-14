import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TripList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tripId: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			tripId: e.target.id
		})
	}


	render() {
		let properArray = Array.from(this.props.trips)

		let mappedTrips = properArray.map( (trip, id) => (
			// <p onClick={(e) => this.handleClick(e)} id={id} key={id}>{trip.name}</p>
				<li><Link to="/viewtrip" tripId={trip.id} id={id} key={id} tripname={this.props.trips.id}>{trip.name} </Link></li>
			))
		return (
			<div> 
				<p>Here are all the trips you've logged so far:</p>
				{/*<p>The selected trip id is {this.state.tripId}</p> */}
				<ul>
				{mappedTrips}
				</ul>
			</div>

		)
	}
}

export default TripList