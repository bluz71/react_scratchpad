import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.onSubmit  = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { _search } = this.refs;
    alert(`Searching for ${_search.value}.`);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref="_search" type="text" placeholder="...search" />
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
