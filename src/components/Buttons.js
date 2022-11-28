import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPage, maxPage, changePage } = this.props;

    return (
      <div className="btn-container">
        <button onClick={() => changePage(true)}>prev</button>
        <p>{currentPage + 1} of {maxPage + 1}</p>
        <button onClick={() => changePage(false)}>next</button>
      </div>
    )
  }
}

Buttons.propTypes = {
  currentPage: PropTypes.number,
  maxPage: PropTypes.number,
  changePage: PropTypes.func
};

export default Buttons;
