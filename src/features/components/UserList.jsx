import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectUsers,
  selectUsersLoading,
  selectUsersError,
} from '../../features/users/usersSelectors';

function UserList() {
  // Use the selectors to access state in the component
  const users = useSelector(selectUsers);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  // Conditional rendering based on the state
  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error fetching users: {error}</div>;

  // If there are no users and it's not loading, you might want to show a message
  if (!loading && users.length === 0) return <div>No users available.</div>;

  // Mapping over the users array to create a list
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
