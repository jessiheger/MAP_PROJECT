// TRIP CONTAINER WITH BOTH TRIP MAP AND TRIP TEXT

import TripNameForm from './TripNameForm';
import DestinationForm from './DestinationForm';
import React, { Component } from 'react';

// This is the container for destination and trip name forms
// This is the /newtrip page 

// import axios from 'axios';

class Trip extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<div>
				<TripNameForm user={this.props.user} />
				<DestinationForm user={this.props.user} />
			</div>
		);
	}
}

export default Trip;