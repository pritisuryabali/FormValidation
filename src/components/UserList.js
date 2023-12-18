// components/UserList.js
import React from "react";
import "./UserList.css";

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span className="user-name">
              {user.firstName} {user.lastName}
            </span>
            <div className="button-container">
              <button className="edit-button" onClick={() => onEditUser(user)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => onDeleteUser(user.id)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
