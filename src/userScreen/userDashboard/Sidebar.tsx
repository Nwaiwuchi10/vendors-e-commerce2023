import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
          <div>
            <Link
              to="/makeDeposit"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My Bookings
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
          <div> Invoice</div>
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
          <div> Audit Logs</div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
