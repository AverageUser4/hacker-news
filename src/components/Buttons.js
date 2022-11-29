import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPage, maxPage, changePage, isLoading } = this.props;

    if(maxPage === -1)
      return;

    return (
      <div className="btn-container">
        <button disabled={isLoading} onClick={() => isLoading || changePage(true)}>prev</button>
        <p>{currentPage + 1} of {maxPage + 1}</p>
        <button disabled={isLoading} onClick={() => isLoading || changePage(false)}>next</button>
      </div>
    )
  }
}

Buttons.propTypes = {
  currentPage: PropTypes.number,
  maxPage: PropTypes.number,
  changePage: PropTypes.func,
  isLoading: PropTypes.bool
};

export default Buttons;
