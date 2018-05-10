import React, {Component} from 'react';
import TripMap from 'react-map-gl';

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_KEY;

// TO DO: CHANGE TO BE TRIP MAP, NOT WORLDVIEW COPY

class TripMap extends Trip {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 600,
        height: 800,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    }
  }

  render() {
    const {viewport} = this.state;
    return (
      <div>
        <TripMap
        mapboxApiAccessToken={MapboxAccessToken}
          {...this.state.viewport}
          // mapStyle="mapbox://styles/mapbox/high-contrast"
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </div>
    );
  }
}

export default TripMap;