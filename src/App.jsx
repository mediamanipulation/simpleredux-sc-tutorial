import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './store/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users || []);

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name}
                {user.email && <ul>{user.email}</ul>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
