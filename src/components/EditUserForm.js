// components/EditUserForm.js
import React, { useState, useEffect } from "react";
import "./EditUserForm.css"; // Import te CSS file

const EditUserForm = ({ user, onUpdateUser, onCancelEdit }) => {
  const [formData, setFormData] = useState({ ...user });

  useEffect(() => {
    setFormData({ ...user });
  }, [user]);

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleUpdate = () => (event) => {
    onUpdateUser(formData);
  };

  return (
    <div className="edit-user-form">
      <h2>Edit User</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
          />
        </label>
        <label>
          Mobile:
          <input
            type="tel"
            value={formData.mobile}
            onChange={handleChange("mobule")}
          />
        </label>
        <label>
          Address 1:
          <input
            type="text"
            value={formData.address1}
            onChange={handleChange("address1")}
          />
        </label>
        <label>
          Address 2:
          <input
            type="text"
            value={formData.address2}
            onChange={handleChange("address2")}
          />
        </label>
        {/*Add other input fields for state, city , country, zip code*/}
        <div className="button-container">
          <button
            type="button"
            onClick={handleUpdate}
            className="update-button"
          >
            update
          </button>
          <button
            type="button"
            onClick={onCancelEdit}
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
