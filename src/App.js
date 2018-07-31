import React, { Component } from 'react';
import Search from './Search';
import MapContainer from './MapContainer';
import YelpContainer from './YelpContainer';

class App extends Component {
  constructor() {
    super();
    this.state= {
      data: '',
      // coordinates: ''
    }
    this.userSearch = this.userSearch.bind(this);
  }

  userSearch(params){
    this.setState({
      data: params
    })
  }

  // YelpContainer(params){
  //   this.setState({
  //     coordinates: params
  //   })
  // }

  render() {

    return (
      <div className="App">
        <Search callback={this.userSearch} />
        <YelpContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
