import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
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
          <input style={{ width: 120, height: 30 }} type="text" onChange={this.handleChange} placeholder="Select a cuisine..."/>
          <button style={{ width: 60, height: 34 }} onClick={this.handleClick} value={this.props.value} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
