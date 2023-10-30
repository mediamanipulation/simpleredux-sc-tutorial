import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from '../../store/actions/index';
import UserCard from './UserCard';
import './card.css';

function Cards() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users || []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="users-container">
          {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
        <div className="btnStl">
          <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
        </div>
      </header>
    </div>
  );
}

export default Cards;
