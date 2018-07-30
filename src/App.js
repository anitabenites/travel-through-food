import React, { Component } from 'react';
import Search from './Search';
import MapContainer from './MapContainer';
import YelpContainer from './YelpContainer';

class App extends Component {
  constructor() {
    super();
    this.state= {data: ''}
    this.userSearch = this.userSearch.bind(this);
  }

  userSearch(params){
    this.setState({
      data: params
    })
  }

  render() {
    
    return (
      <div className="App">
        <Search callback={this.userSearch} />
        <MapContainer />
        <YelpContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
