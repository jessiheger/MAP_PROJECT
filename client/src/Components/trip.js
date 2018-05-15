// TRIP CONTAINER WITH BOTH TRIP MAP AND TRIP TEXT

import TripNameForm from './TripNameForm';
import DestinationForm from './DestinationForm';
import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';


// This is the container for destination and trip name forms
// This is the /newtrip page 

let trips;

class Trip extends Component {
	constructor(props){
		super(props)
		this.state ={
			tripId: '',
			tripName: ''
		}
	}

	getTrip = (trip) => {
		console.log('getTrip:', trip)
		this.setState({ tripId: trip._id, tripName: trip.name})
	}

	render() {
		if (this.state.tripId === '') {
			return(
				<div>
					<TripNameForm user={this.props.user} updateTrip={this.getTrip} reFetchData={this.props.reFetchData} />
				</div>
			);
		} 
		else {
			axios.get(SERVER_URL+`/trip/${this.state.tripId}`)
	      .then(res => {
	        console.log('res:',res);
	        if (res.data.destinations !== undefined) {
		        trips = res.data.destinations.map( destination => {
		          return (
		            <DestinationForm user={this.props.user} trip={res.data._id} landmark={destination.landmark} city={destination.city} state={destination.state} country={destination.country} updateTrip={this.getTrip} />
		          )
		        })
		      }
	      })
	    }

			return(
				<div>
					<TripNameForm user={this.props.user} updateTrip={this.getTrip} />
					{trips}
					<DestinationForm user={this.props.user} trip={this.state.tripId} updateTrip={this.getTrip} />
				</div>
			);
		}
	}


export default Trip;