import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

const MapboxAccessToken = process.env.REACT_APP_MAPBOX_KEY;

class Worldview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1200,
        height: 600,
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
        <ReactMapGL
        mapboxApiAccessToken={MapboxAccessToken}
          {...this.state.viewport}
          // mapStyle="mapbox://styles/mapbox/high-contrast"
          onViewportChange={(viewport) => this.setState({viewport})}
        />
      </div>
    );
  }
}

export default Worldview;