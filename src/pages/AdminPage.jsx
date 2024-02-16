import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/admin.module.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    const url = `https://abg-3n55.onrender.com/api/v1/admin/page?page=${currentPage}&limit=${pageSize}`;

    try {
      const response = await axios.get(
     url
      );
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

// import axios from 'axios';
// import styles from '../styles/admin.module.css'
// function Admin() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:2024/api/v1/admin/get')
//       .then(response => {
//         setUsers(response.data.data.users);
//         console.log(response.data.data.users);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Graduation Year</th>
//             <th>Previous Job</th>
//             <th>Current Job</th>
//             <th>Location Or Country</th>
//             <th>Who was your supervisor?</th>
//             <th>Advice for the Department</th>

//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user._id}>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.emailAddress}</td>
//               <td>{user.phoneNumber}</td>
//               <td>{user.graduatedYear}</td>
//               <td>{user.previousJob}</td>
//               <td>{user.currentJob}</td>
//               <td>{user.locationOrCountry}</td>
//               <td>{user.supervisor}</td>
//               <td>{user.advice}</td>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Admin;
