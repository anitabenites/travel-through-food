import React, { Component } from 'react';

class MapContainer extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 52.5200, lng: 13.4050 },
      zoom: 8
    });
  }
  render() {
    return (
      <div style={{ width: 500, height: 500 }} id="map" />
    );
  }
}
export default MapContainer;
