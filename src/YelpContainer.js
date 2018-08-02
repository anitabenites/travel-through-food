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
  const term = nextProps && nextProps.data;
    const config = {
      headers: {'Authorization': "Bearer " + process.env.REACT_APP_YELP_API_KEY},
      params: {
        term,
        location: 'berlin'
      }
    };

    axios.get('https://shielded-hamlet-43668.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
    .then(response => {
      const restaurants = response.data.businesses.map((rest, index) => {
        let restCoordinates = []
         restCoordinates = Object.keys(rest.coordinates).map(function(key) {
          return rest.coordinates[key];
        });
        return restCoordinates
      });

      this.setState({ restaurants, term });
    });
  };

  render() {
    return (
      <div>
      <MapContainer restCoordinates={this.state.restaurants} />
      </div>
    );
  };
}

export default YelpContainer;
