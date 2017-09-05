import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);

  //   // Custom function bindings that bind this to be this component.
  //   this.onSubmit = this.onSubmit.bind(this);
  // }
  //
  // onSubmit(e) {
  //
  // No need for constructors and manual binding when defining arrow functions.
  // Arrow functions will automatically bind this to this component.

  onSubmit = (e) => {
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
