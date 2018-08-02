import React, { Component } from 'react';
import YelpContainer from './YelpContainer';

class MapContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.5200, lng: 13.4050 },
        zoom: 8
    });
  }

  componentWillReceiveProps(nextProps) {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 52.5200, lng: 13.4050 },
      zoom: 12
    });

    const coordinatesList = nextProps.restCoordinates
    let latLong = coordinatesList.map((coor) => {
      let latitude = coor[0],
          longitude = coor[1],
          myLatLng = {lat: latitude, lng: longitude},
          marker = new window.google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    })
  }

  render() {
    return (
      <div>
        <div style={{ width: 1130, height: 550 }} id="map" />
      </div>
    );
  }
}
export default MapContainer;
