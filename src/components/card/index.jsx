import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from '../../store/actions/index';
import UserCard from './UserCard';
import './card.css';

function Cards() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users || []);

  return (
    <>
    <div className="users-title-container"> <p className='userTitle'><h1>Users</h1></p></div>
    
      <div className="users-container">
        {users.map(user => <UserCard key={user.id} user={user} />)}
      </div>
      <div className="btnStl">
        <button onClick={() => dispatch(getUsersFetch())}>Get users</button>
      </div>
    </>


  );
}

export default Cards;
