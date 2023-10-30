// UserCard.jsx
import React from 'react';

function UserCard({ user }) {
  return (
    <div key={user.id} className="user-card">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <div className="address-section">
        <h4>Address</h4>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
      </div>

      <div className="company-section">
        <h4>Company</h4>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>BS:</strong> {user.company.bs}</p>
      </div>
    </div>
  );
}

export default UserCard;
