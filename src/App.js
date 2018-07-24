import React, { Component } from 'react';
import Search from './Search';
import MapContainer from './MapContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Search />
      <MapContainer />
      </div>
    );
  }
}

export default App;
