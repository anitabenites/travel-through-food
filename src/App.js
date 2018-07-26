import React, { Component } from 'react';
import Search from './Search';
import MapContainer from './MapContainer';
import YelpContainer from './YelpContainer';

class App extends Component {
  constructor() {
    super();
    this.state= {
      data: ''
    }
    this.displayDataofSearch = this.displayDataofSearch.bind(this);
  }

  displayDataofSearch(params){
    this.setState({
      data:params
    })
  }

  render() {
    return (
      <div className="App">
      <Search callback={this.displayDataofSearch} />
      <MapContainer />
      <YelpContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
