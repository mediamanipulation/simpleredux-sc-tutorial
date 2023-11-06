// Path: src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './features/users/usersSlice';
import Cards from './features/components/card/index.jsx';
import UserForm from './features/components/user-form/UserForm';
import UserList from './features/components/UserList';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
      <UserList users={users} />
      <Cards />
    <UserForm />
      </header>
    </div>
  );
}


export default App;


