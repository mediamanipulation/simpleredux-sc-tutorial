import React, { useState, useEffect } from 'react';

// UserForm component for creating and editing users
const UserForm = ({ user, onSubmit }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // ... add other fields as necessary
  });

  // Effect to populate form when editing a user
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Add additional form fields as needed */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
