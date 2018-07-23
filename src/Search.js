import React, { Component } from 'react';

class Search extends Component {
  onClick(event) {
    event.preventDefault();
    console.log("I am clicked")
  }

  onChange(event) {
    let userInput = event.target.value
      console.log(userInput)
  }

  render() {
    return (
      <div>
        <form action="post">
          <input onChange={this.onChange} placeholder="Select a cuisine..."></input>
          <button onClick={this.onClick} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
