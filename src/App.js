import logo from './logo.svg';
import './App.css';
import Amination from './Amination';

import React, { useEffect, useState, useRef } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState('');
  const textRef = useRef();
  const colors = ['#ffff00',  '#e8eb0e', '#71ff67','#fff'];
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

  useEffect(()=>{
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  }, [quotes])
    return (
      <div className="App">            
        <div className="quote-area">
            <p ref={textRef}>{quotes.text}</p>
            <p style={{fontStyle:"italic"}}>Author: {quotes.author}</p>
            <div className="btn-area">  
               <button  onClick={getQuote} class="button7" >Get Quote </button>
               <a href='https://twitter.com/intent/tweet?text=${quote.text}' class="button7">Tweet</a>
            </div>
            
          </div>
          <Amination/>
      </div>
    );
}

export default App;

