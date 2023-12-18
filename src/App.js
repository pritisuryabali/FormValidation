//App.js
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const createUser = (user) => {
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    const updateUsers = users.filter((user) => user.id !== id);
    setUsers(updateUsers);
  };
  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateEditedUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };
  const cancelEdit = () => {
    setEditingUser(null);
  };
  return (
    <div>
      {editingUser ? (
        <EditUserForm
          user={editingUser}
          onUpdateUser={updateEditedUser}
          onCancelEdit={cancelEdit}
        />
      ) : (
        <UserForm onCreateUser={createUser} />
      )}
      <UserList users={users} onDeleteUser={deleteUser} onEditUser={editUser} />
    </div>
  );
};
export default App;
