import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './MapContainer'

class YelpContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    restaurants: [],
    term: ''
  }
}

componentWillReceiveProps(nextProps) {
  const term = nextProps && nextProps.data
    const config = {
      headers: {'Authorization': "Bearer " + process.env.REACT_APP_YELP_API_KEY},
      params: {
        term,
        location: 'berlin'
      }
    };

    axios.get('https://shielded-hamlet-43668.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
    .then(response => {

      // let latitudeArray = []
      // let longitudeArray = []



      const restaurants = response.data.businesses.map((rest, index) => {

        let restCoordinates = []

        // console.log('information', response.data.businesses);
        // let lat = rest.coordinates.latitude;
        // let lng = rest.coordinates.longitude;
        // console.log('these are the coordinates from Yelp', rest.coordinates);
        // console.log(typeof restCoordinates);
        // restCoordinates.push(lat + " ");
        // restCoordinates.push(lng + " | ");


         restCoordinates = Object.keys(rest.coordinates).map(function(key) {
          return rest.coordinates[key];
        });
        console.log('restCoordinates', restCoordinates);

        return restCoordinates

          // <div key={rest.id}>
          // <ul>
          //   <p>Name: {rest.name}</p>
          //   <p>Address:{rest.location.address1}</p>
          //   <p>Postcode: {rest.location.zip_code}</p>
          //   <p>Rating: {rest.rating}</p>
          //   <p>--</p>
          // </ul>
          // </div>

      });

      console.log('restaurants', restaurants);

      this.setState({ restaurants, term });
    });

  };

  render() {
    return (
      <div>
      <MapContainer restCoordinates={this.state.restaurants} />
        {this.state.restaurants}
      </div>
    );
  };
}

export default YelpContainer;

//Now YelpContainer is the parent of the MapContainer children!!
