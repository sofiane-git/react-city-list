import React from 'react';
import './App.css';
import CardList from "./components/CardList";
import cityList from "./data/city";

const App = () => (
    <div className="h-screen">
      <CardList data={cityList} />
    </div>
  );

export default App;
