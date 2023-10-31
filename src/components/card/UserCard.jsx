// UserCard.jsx
import React from 'react';
import ToggleSection from '../interactions/ToggleSection';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <ToggleSection title="Address">
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
            </ToggleSection>

            <ToggleSection title="Company">
                <p><strong>Name:</strong> {user.company.name}</p>
                <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                <p><strong>BS:</strong> {user.company.bs}</p>
            </ToggleSection>
        </div>
    );
}

export default UserCard;
