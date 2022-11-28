import React from 'react'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

function App() {
  return (
    <>

    <form className="search-form">
      <h2>search hacker news</h2>
      <input type="text" className="form-input" value="react"/>
    </form>
  
    <div className="btn-container">
      <button>prev</button>
      <p>1 of 50</p>
      <button>next</button>
    </div>

    <section className="stories">
      <article className="story">
        <h4 className="title">US regulators will certify first small nuclear reactor design</h4>
        <p className="info">829 points by <span>papa-whisky | </span> 697 comments</p>
        <div>
          <a
            href="https://arstechnica.com/science/2022/07/us-regulators-will-certify-first-small-nuclear-reactor-design/"
            className="read-link" target="_blank" rel="noopener noreferrer"
          >
            read more
          </a>
          <button className="remove-btn">remove</button>
        </div>
      </article>
    </section>

    </>
  );
}

export default App
