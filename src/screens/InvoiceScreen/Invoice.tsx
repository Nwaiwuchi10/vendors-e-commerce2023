import React from "react";
import UserDashBoard from "../../userScreen/userDashboard/userDashboard";

const Invoice = () => {
  return (
    <UserDashBoard>
      <div className="text-center mt-3 mb-4 ">
        <h3>Invoice </h3>
        <div>
          Note<strong style={{ color: "#e94560" }}>*</strong> that our
          <strong style={{ color: "#e94560" }}> support team </strong>
          is always there to atend to your Invoice request.
        </div>
        <div>
          Note<strong style={{ color: "#e94560" }}>*</strong> that this will
          take 24hrs working day in other to confirm your payment receipt.
        </div>
        <div>
          As soon as your payment is acknowledged, Your Event Booking
          Transaction Invoice will be displayed on this screen.
        </div>
        <div>
          *Your Patronage and event satisfaction is always our concern*.
        </div>
        <p className="mb-5">Thanks</p>
      </div>
    </UserDashBoard>
  );
};

export default Invoice;
