import React, { useState, useEffect } from 'react';

// UserForm component for creating and editing users
const UserForm = ({ user, onSubmit }) => {
  // Initialize form state with all fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '' // Uncomment if you decide to use 'bs' field
    }
  });

  // Effect to populate form when editing a user
  useEffect(() => {
    if (user) {
      setFormData({ ...formData, ...user });
    }
  }, [user]);

  // Handle form field changes for top-level fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form field changes for nested objects
  const handleNestedChange = (e, section) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value
      }
    }));
  };

  // Handle form field changes for deeply nested objects (e.g., address.geo)
  const handleDeepNestedChange = (e, section, subSection) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [subSection]: {
          ...prevState[section][subSection],
          [name]: value
        }
      }
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Flexbox layout wrapper for form group
  const FormGroup = ({ children }) => (
    <div className="user-form-group">
      {children}
    </div>
  );

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="website">Website</label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </FormGroup>

      {/* Repeat FormGroup for address and company inputs as needed */}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
