import React, { Component } from 'react';
import ViewTripHeader from './viewtripheader';
import TripMap from './tripmap';
import DestinationSection from './destinations';

class ViewTripContainer extends Component {
	constructor(props) {
	super(props);
	console.log("this.props.trip from ViewTripContainer:", this.props.trip);
		
	}

	render() {
		return(
			<div>
				<ViewTripHeader tripId={this.props.tripId}/>
				<TripMap />
				<DestinationSection />
			</div>
			)
	}
}

export default ViewTripContainer;