import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/admin.module.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [adminEmail, setAdminEmail] = useState("");
  
  useEffect(() => {
    fetchUserInfo();
    fetchUsers();
  }, [currentPage]);

  const fetchUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in local storage");
      return;
    }
 
    try {
      const response = await axios.get(process.env.REACT_APP_INFORMATION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { email } = response.data;
      setAdminEmail(email);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in local storage");
      return;
    }
    try {
      const response = await axios.get(process.env.REACT_APP_PAGE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { users, totalUsers } = response.data.data;
      setUsers(users);
      setTotalPages(Math.ceil(totalUsers / pageSize));
    } catch (error) {
      console.log(error);
    }
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>welcome {adminEmail}</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Graduation Year</th>
            <th>Previous Job</th>
            <th>Current Job</th>
            <th>Location Or Country</th>
            <th>Who was your supervisor?</th>
            <th>Advice for the Department</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailAddress}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.graduatedYear}</td>
              <td>{user.previousJob}</td>
              <td>{user.currentJob}</td>
              <td>{user.locationOrCountry}</td>
              <td>{user.supervisor}</td>
              <td>{user.advice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.page}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Admin;










