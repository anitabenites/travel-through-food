import React, { Component } from 'react';
import axios from 'axios';

const config = {
  headers: {'Authorization': "Bearer " + process.env.REACT_APP_YELP_API_KEY},
  params: {
    term: 'tacos',
    location: 'berlin'
  }
};

class YelpContainer extends Component {

  constructor(props) {
  super(props);
  this.state = {
    restaurants: []
  }
}

  componentDidMount() {

    axios.get('https://shielded-hamlet-43668.herokuapp.com/'+'https://api.yelp.com/v3/businesses/search', config)
    .then(response => {
      let restaurants = response.data.businesses.map((rest, index) => {
        return(
          <div key={index}>
          <ul>
            <p>Name: {rest.name}</p>
            <p>Address:{rest.location.address1}</p>
            <p>Postcode: {rest.location.zip_code}</p>
            <p>Rating: {rest.rating}</p>
            <p>--</p>
          </ul>
          </div>
        );
      });
      this.setState({restaurants:restaurants});
    });
  };

  render() {
    return (
      <div>
      {this.state.restaurants}
      </div>
    );
  };
}

export default YelpContainer;
