import React, { Component } from 'react'

import Buttons from './components/Buttons.js';
import SearchForm from './components/SearchForm.js';
import Stories from './components/Stories.js';

// 0-49
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      queryString: '',
      articles: [],
      currentPage: 0,
      maxPage: 0,
      isLoading: false
    };

    this.lastFetchTime = 0;
  }

  changePage = (prev) => {
    const subsequentPage = this.state.currentPage + (prev ? -1 : 1);
    this.setState({ currentPage: Math.max(Math.min(subsequentPage, this.state.maxPage), 0) });
  }
  
  setQueryString = (value) => {
    if(this.state.queryString === value)
      return;

    this.setState({ queryString: value, currentPage: 0 });
  }

  fetchArticles = async () => {
    try {
      this.setState({ isLoading: true });

      const thisFetchTime = Date.now();
      
      const url = API_ENDPOINT + `query=${this.state.queryString}&page=${this.state.currentPage}`;
      const response = await fetch(url);
      const json = await response.json();

      this.setState({ isLoading: false });

      if(thisFetchTime < this.lastFetchTime)
        return;
      this.lastFetchTime = thisFetchTime;

      if(json.message)
        throw new Error(json.message);

      this.setState({ maxPage: json.nbPages - 1, articles: json.hits });

    } catch(e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if(
        prevState.queryString === this.state.queryString
        && prevState.currentPage === this.state.currentPage
      )
      return;

    this.fetchArticles();
  }

  render() {
    console.log(this.state)

    return (
      <>
  
        <SearchForm
          queryString={this.state.queryString}
          setQueryString={this.setQueryString}
        />
  
        <Buttons
          currentPage={this.state.currentPage}
          maxPage={this.state.maxPage}
          changePage={this.changePage}
        />
  
        <Stories
          articles={this.state.articles}
        />
  
      </>
    );
  }

}

export default App
