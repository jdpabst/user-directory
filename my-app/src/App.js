import React, { useState } from 'react';
import UserCard from './UserCard.js';
import data from './data';
import './App.css';

function App() {
  const [items, setItems] = useState(data);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home</h1>
        </header>
          <UserCard data={ items }/>
      </div>
    )
  
}

export default App;
