import React, { Component } from 'react';
import Search from './Search';
import MapContainer from './MapContainer';
import YelpContainer from './YelpContainer';

class App extends Component {
  constructor() {
    super();
    this.state= {data: ''}
    this.handleClickParent = this.handleClickParent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formChildSearch = this.formChildSearch.bind(this);

  }

  handleChange(event) {
    console.log('parent event',event.target.value)
    event.preventDefault();
    this.setState({ data: event.target.value })
  }

  handleClickParent(event) {
    event.preventDefault();
    let searchWord = this.term.value;
    console.log("searchWord", searchWord)
  }

  formChildSearch(params){
    this.setState({
      data: params
    })
  }

  render() {
    return (
      <div className="App">
        <Search onChange={this.handleChange} searchString={this.state.data} callback={this.formChildSearch} />
        <MapContainer />
        <YelpContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
