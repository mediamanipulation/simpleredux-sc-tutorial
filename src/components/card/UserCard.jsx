// UserCard.jsx
import React from 'react';
import ToggleSection from '../interactions/ToggleSection';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <div className="user-section">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
            </div>
            <ToggleSection title="Address" >
              <div className="address-section">
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
                </div>
            </ToggleSection>

            <ToggleSection title="Company">
            <div className="company-section">
                <p><strong>Name:</strong><br/> {user.company.name}</p>
                <p><strong>Catchphrase:</strong> <br/>{user.company.catchPhrase}</p>
                {/* <p><strong>BS:</strong><br/> {user.company.bs}</p> */}
                </div>
            </ToggleSection>
        </div>
    );
}

export default UserCard;
