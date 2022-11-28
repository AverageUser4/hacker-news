import React, { Component } from 'react'
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search-form">
        <h2>search hacker news</h2>
        <input
          className="form-input"
          value={this.props.queryString}
          onChange={(event) => this.props.setQueryString(event.target.value)}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  queryString: PropTypes.string,
  setQueryString: PropTypes.func
};

export default SearchForm;
