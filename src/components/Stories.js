import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Article from './Article.js';

class Stories extends Component {
  constructor(props) {
    super(props);
    // title, url, author, points, num_comments
  }

  render() {
    return (
      <section className="stories">
        
        {
          this.props.articles.map(article => 
            <Article
              key={article.created_at_i}
              title={article.title}
              url={article.url}
              author={article.author}
              points={article.points}
              num_comments={article.num_comments}
            />)
        }

      </section>
    );
  }
}

Stories.propTypes = {
  articles: PropTypes.array
};

export default Stories;