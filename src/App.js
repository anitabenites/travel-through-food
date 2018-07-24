import React, { Component } from 'react';
import Search from './Search';
import MapContainer from './MapContainer';
import YelpContainer from './YelpContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Search />
      <MapContainer />
      <YelpContainer />
      </div>
    );
  }
}

export default App;
