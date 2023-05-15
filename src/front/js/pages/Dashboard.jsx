import React from "react";
import "../../styles/styles.css";
import RoomCard from "../component/RoomCard.jsx";
import DashboardNav from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <div className="container-fluid">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="row">
          <RoomCard variant="primary" roomNumber="1" />
          <RoomCard variant="primary" roomNumber="1" />
          <RoomCard variant="primary" roomNumber="1" />
          <RoomCard variant="primary" roomNumber="1" />
          <RoomCard variant="primary" roomNumber="1" />
          <RoomCard variant="primary" roomNumber="1" />
          <RoomCard variant="primary" roomNumber="1" />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Dashboard;

