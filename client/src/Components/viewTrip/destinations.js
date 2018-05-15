import React, { Component } from 'react';

class DestinationSection extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        // let mappedDestinations = this.props.tripDestinations.map( (item, idx) => {
        //     return <p key={idx}>{item} </p>
        // });
            return (
                <div className="DestinationContent">
                    <p>{this.props.tripDestinations}</p>
                </div>
            )
        }
}


export default DestinationSection;