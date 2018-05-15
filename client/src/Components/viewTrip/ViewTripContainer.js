import React, { Component } from 'react';
import ViewTripHeader from './viewtripheader';
import TripMap from './tripmap';
import DestinationSection from './destinations';
import axios from 'axios';
import { SERVER_URL } from '../../constants';


var tripInfo;
var tripDestinations;

class ViewTripContainer extends Component {
	constructor(props) {
		super(props);
		const {match} = this.props;
		console.log('params', match.params);
	}

	componentDidMount = () => {
		axios.get(SERVER_URL+'/trip/' + this.props.match.params.tripId)
		.then(result => {
			console.log("success, component DID MOUNT. Here\'s the axios request result", result.data);
			console.log("is array?", Array.isArray(result.data.destinations));
			tripInfo =  result.data.name;
			tripDestinations = result.data.destinations[0].landmark
			console.log(tripDestinations)
		})
		.catch(err => {
			console.log('fail', err);
		})
	}

	render() {
		// let berries = tripDestinations.map((item) => {
		// 	return <DestinationSection destinationInfo ={item} />
		// })
		return(
			<div>
				<ViewTripHeader tripInfo={tripInfo} tripId={this.props.match.params.tripId}/>
				<TripMap />
				<DestinationSection tripDestinations={tripDestinations} />
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