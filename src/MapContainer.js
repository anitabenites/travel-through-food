import React, { Component } from 'react';
import YelpContainer from './YelpContainer';

class MapContainer extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    console.log('hello');
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 52.5200, lng: 13.4050 },
      zoom: 8
    });

    if(this.props.restCoordinates.length == 0){
      return
    }
    console.log(this.props.restCoordinates);
    var myLatLng = {lat: this.props.restCoordinates[0][0], lng: this.props.restCoordinates[0][1]};
    console.log('myLatLng',myLatLng);
    var marker = new window.google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }


  render() {
    return (
      <div>
        <div style={{ width: 500, height: 500 }} id="map" />
        {this.props.restCoordinates}

      </div>
    );
  }
}
export default MapContainer;
