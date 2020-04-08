import React from 'react';
import logo from './logo.svg';
import Header from './ components/Header/header';
import Books from './ components/Books/books';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Books/>
    </div>
  );
}

export default App;
