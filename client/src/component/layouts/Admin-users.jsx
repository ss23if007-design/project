import { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../store/auth.jsx";
import {Link } from "react-router-dom";
import "./Admin-users.css"

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { token } = useAuth();

  const getAllUsersData = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error(`Fetch users failed: ${res.status}`);
      const data = await res.json();
      // assume server returns array directly or { users: [...] }
      setUsers(Array.isArray(data) ? data : data.users ?? []);
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
    }
  }, [token]);

  const deleteUser = async (id) => {
    if (!confirm("Delete this user?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/admin/user/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errBody = await response.json().catch(() => null);
        throw new Error(errBody?.message || `Delete failed: ${response.status}`);
      }
      // refresh list after delete
      await getAllUsersData();
    } catch (error) {
      console.error("Delete error:", error);
      alert(error.message || "Could not delete user");
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  return (
    <>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th> Username </th>
              <th> Email </th>
              <th> Phone </th>
              <th> Role </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser) => (
              <tr key={curUser._id}>
                <td>{curUser.username}</td>
                <td>{curUser.email}</td>
                <td>{curUser.phone}</td>
                <td>{curUser.isAdmin ? "Admin" : "User"}</td>
                <td className="actions">
                  <button className="edit-btn"> <Link to = {`/admin/users/${curUser.id}/edit`}>Edit</Link></button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(curUser._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: "12px" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};