import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuoteComponent from './components/QuoteComponent';

import './App.css';

const App = () => {
  const [quote, setQuote] = useState({});

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    console.log("test")
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    // Call the function on component mount
    fetchRandomQuote();
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <QuoteComponent quote={quote} />
      <button onClick={() => fetchRandomQuote()}>Get Another Quote</button>
    </div>
  );
};

export default App;
