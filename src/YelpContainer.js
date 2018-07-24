import React, { Component } from 'react';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer sX4fKJ-nINKvVQ_QyCLYGXMNE3AiZLK_Pj2_pLyxDWvhwNkY6MCYH_36ZH47ZkyQKKGAZYCzuoJ4moFo_P3-D3OL2CndzzHizE2d5FRMez87y2PUya1kwbnBiDBXW3Yx'},
  params: {
    term: 'tacos',
    location: 'london'
  }
};

class YelpContainer extends Component {

  componentWillMount() {
    axios.get('https://shielded-hamlet-43668.herokuapp.com/'+'https://api.yelp.com/v3/businesses/search', config)
    .then(function(response){
      for (let i = 0; i < response.data.businesses.length; i++) {
        let restaurant = {
          name: response.data.businesses[i].name,
          street: response.data.businesses[i].location.address1,
          postcode: response.data.businesses[i].location.zip_code,
          cuisine: response.data.businesses[i].categories[0].title,
          rating:response.data.businesses[i].rating
        }
        console.log(restaurant);
      }
    })
    }

  render() {
    return (
      <div></div>
    );
  }
}




export default YelpContainer;
