import React from 'react';
import './App.css';
import Search from './components/Search';
import MealDetails from './components/MealDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meal Finder</h1>
      </header>
      <main>
        <Search />
        <MealDetails />
      </main>
    </div>
  );
}

export default App;

