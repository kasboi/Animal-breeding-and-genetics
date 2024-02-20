import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/admin.module.css";
import Loading from "../components/loader/Loading";
import { useNavigate } from "react-router-dom";
import SingleMail from "../components/Modal/single-mail/SingleMail";

function Admin() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [adminEmail, setAdminEmail] = useState("");
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const fetchInformationOfUser = async () => {
    const URL = "https://abg-3n55.onrender.com/api/v1/admin/information";

    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      console.error("Token not found in local storage");
      return;
    }

    try {
      const response = await axios.get(URL, {
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

  const fetchAllUser = async () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      setLoading(false);
      console.error("Token not found in local storage");
      return;
    }
    try {
      const response = await axios.get(
        `https://abg-3n55.onrender.com/api/v1/admin/page?page=${currentPage}&limit=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { users, totalUsers } = response.data.data;
      setUsers(users);
      setTotalPages(Math.ceil(totalUsers / pageSize));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInformationOfUser();
    fetchAllUser();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.all}>
          <div className={styles.effect}>
            <div className={styles.header}>
              <h1 className={styles.h1}>Admin Dashboard</h1>
              <p>{adminEmail}</p>
            </div>
            <nav className={showNav ? styles.navMenu : styles.hideNavMenu}>
              <ul>
                <li>All Responses</li>
                <li>Message All</li>
                <li>Send a Message</li>
              </ul>
              <div className={styles.admin}>
                <button onClick={signOut}>Logout</button>
              </div>
            </nav>
            <button onClick={toggleNav} className={styles.menuButton}>
              ☰
            </button>
          </div>
          <div className={styles.tableOverflow}>
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
            {showModal && <SingleMail user={selectedUser} onClose={closeModal} />}
          </div>
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
      )}


    </>
  );
}

export default Admin;
