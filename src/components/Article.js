import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, url, author, points, num_comments, getRemoved } = this.props;

    return (
      <article className="story">
        <h4 className="title">{title}</h4>
        <p className="info">
          {points > 0 && `${points} points`}
          {author && <> by <span>{author}</span></>}
          {num_comments > 0 && `| ${num_comments} comments`}
        </p>
        <div>
          <a
            href={url}
            className="read-link" target="_blank" rel="noopener noreferrer"
          >
            read more
          </a>
          <button 
            className="remove-btn"
            onClick={getRemoved}
          >
            remove
          </button>
        </div>
      </article>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  points: PropTypes.number,
  num_comments: PropTypes.number,
  getRemoved: PropTypes.func
};
// title, url, author, points, num_comments
export default Article;