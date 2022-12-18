import React from "react";
import HeadComponent from '../components/Head';
import Link from 'next/link';

// Constants
const TWITTER_HANDLE = "andersonddc";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <HeadComponent />
      <div className="container">
        <header className="header-container">
          <p className="header"> 🎶 Meta Music 🔊</p>
          <p className="sub-text">O melhor ambiente digital para curtir seu artista favorito</p>
        </header>

        <main>
          <img className='gif-image' src="yoda-good.gif" alt="Meta Music" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`contruido by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
