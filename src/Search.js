import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <form action="post">
          <input placeholder="Select a cuisine..."></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
