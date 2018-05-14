import React, { Component } from 'react';
import ViewTripHeader from './viewtripheader';
import TripMap from './tripmap';
import DestinationSection from './destinations';
import axios from 'axios';

var tripInfo;

class ViewTripContainer extends Component {
	constructor(props) {
		super(props);
		const {match} = this.props;
		console.log('params', match.params);
	}

	componentWillMount = () => {
		tripInfo = axios.get('http://localhost:3001/trip/' + this.props.match.params.tripId)
		.then(result => {
			console.log("success, component DID MOUNT. Here\'s the axios request result", result.data.name);
			return result.data.name;
		})
		.catch(err => {
			console.log('fail', err);
		})
	}

	render() {
		return(
			<div>
				<ViewTripHeader tripId={this.props.match.params.tripId}/>
				<TripMap />
				<DestinationSection />
			</div>
			)
	}

//ALEX'S ADDITION. SHOULD REPLACE ^ 
	// render() {
 //        let trip = this.state.trips.filter((trip) => {trip.id === this.props.match.params.tripId})
 //        return(
 //            <div>
 //                <ViewTripHeader trip={trip}/>
 //                <TripMap trip={trip} />
 //                <DestinationSection trip={trip}/>
 //            </div>
 //            )
 //    }
}




export default ViewTripContainer;