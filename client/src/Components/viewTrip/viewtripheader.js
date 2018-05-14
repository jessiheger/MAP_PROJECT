import React, { Component } from 'react';

class ViewTripHeader extends Component {
	constructor(props) {
		super(props)
		console.log("this.props looks like", this.props);
		console.log("this.props.tripId:", this.props.tripId)
	}
	render() {
		return(
			<div>
				<h1>{this.props.tripId}</h1>
			</div>
		);
	}
}

export default ViewTripHeader;