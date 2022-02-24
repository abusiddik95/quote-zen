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
        <div className="quote-area">
            <p>{quotes.text}</p>
            <p>Author: {quotes.author}</p>
            <div className="btn-area">  
                <h1>Quote-zen</h1>
               <button  onClick={getQuote} class="button7" >Get Quote</button>
               <a href='https://twitter.com/intent/tweet?text=${quote.text}' class="button7">Tweet</a>
            </div>
            
          </div>
      </div>
    );
}

export default App;

