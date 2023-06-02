import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("phoneNumber", "");
    localStorage.setItem("lastName", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("email", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("firstName", "");
    localStorage.setItem("roles", "");
    localStorage.setItem("contactAdress", "");
    navigate("/");
  };
  return (
    <div>
      <ul className="ul-list">
        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              marginLeft: "5px",
            }}
          >
            <Link
              to="/userDashboard"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Dashboard
            </Link>
          </div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div> Vendors</div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div>My Bookings</div>
        </li>
        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div>
            {" "}
            <Link
              to="/makeWithdrawal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Profile
            </Link>{" "}
          </div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div>
            <Link
              to="/invoice"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Invoice
            </Link>
          </div>
        </li>
        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div> Services</div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div>SETTINGS</div>
        </li>

        <li
          style={{
            fontSize: "medium",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ cursor: "pointer" }} onClick={Logout}>
            {" "}
            Log Out
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
