import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
      super(props);
      this.state = {value: ""};
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    event.preventDefault();
    console.log("click", this.state.value)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)

  }

  render() {
    return (
      <div>
        <form action="post">
          <input value={this.props.value} onChange={this.handleChange} placeholder="Select a cuisine..."></input>
          <button onClick={this.handleClick} value={this.props.value}type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
