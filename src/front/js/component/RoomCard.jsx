import React from "react";

const variants = {
  primary: "bg-primary",
  warning: "bg-warning",
  success: "bg-success",
  danger: "bg-danger",
};
const RoomCard = ({ variant = "primary", roomNumber = "43" }) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className={`card ${variants[variant]} text-white mb-4`}>
        <div className="card-body">Habitación {roomNumber}</div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <a className="small text-white stretched-link" href="#">
            View Details
          </a>
          <div className="small text-white">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
