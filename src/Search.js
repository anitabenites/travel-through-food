import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    //event.preventDefault();
    this.setState({value: event.target.value})
  }

  handleClick(event) {
    event.preventDefault();
    this.props.callback(this.state.value)
  }


  render() {
    return (
      <div>
        <form action="post">
          <input type="text" onChange={this.handleChange} placeholder="Select a cuisine..."/>
          <button onClick={this.handleClick} value={this.props.value} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
