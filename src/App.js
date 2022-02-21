import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState('');
  const getQuote = () =>{
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      let randomNum = Math.floor(Math.random()* data.length);
      setQuotes(data[randomNum])

    });
  };

  useEffect(()=>{
    getQuote();
  },[]);

    return (
      <div className="App">
        <div className="main-App">
          <p>{quotes.text}</p>
          <h4>{quotes.author}</h4>
          <button onClick={getQuote} class="quote_btn">get quote</button>
          <a href={'https://twitter.com/intent/tweet?text=${quote.text}'}>Tweet</a>
          <button onClick={getQuote}  href="something" class="button7" style="background-color:#2979FF">get quote</button>
          <a href={'https://twitter.com/intent/tweet?text=${quote.text}'} class="button7" style="background-color:#CCCCCC; color:#000000">Tweet</a>
        </div>
    </div>
    );
}

export default App;

