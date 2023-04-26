import React from "react";
import UserDashBoard from "../userDashboard/userDashboard";
import VendorsApplication from "../../screens/VendorsAppliForm/VendorsApplication";

const UserProfile = () => {
  return (
    <UserDashBoard>
      <div>
        <VendorsApplication />
      </div>
    </UserDashBoard>
  );
};

export default UserProfile;
