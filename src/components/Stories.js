import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Article from './Article.js';

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: this.props.articles };
  }

  removeArticle = (index) => {
    this.setState(prev => {
      const newArticles = [...prev.articles];
      newArticles.splice(index, 1);
      return { articles: newArticles };
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.articles !== this.props.articles)
      this.setState({ articles: this.props.articles });
  }

  render() {
    return (
      <section className="stories">
        
        {
          this.state.articles.length ?
            this.state.articles.map((article, index) => 
              <Article
                key={article.created_at_i}
                title={article.title || article.story_text || article.comment_text}
                url={article.url}
                author={article.author}
                points={article.points}
                num_comments={article.num_comments}
                getRemoved={() => this.removeArticle(index)}
              />)
            :
              <p>No results. Please enter different search text.</p>
        }

      </section>
    );
  }
}

Stories.propTypes = {
  articles: PropTypes.array
};

export default Stories;