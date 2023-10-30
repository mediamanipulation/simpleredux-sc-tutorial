import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './components/card/index.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users || []);

  return (
    <div className="App">
      <header className="App-header">
      <Cards />
      </header>
    </div>
  );
}


export default App;
