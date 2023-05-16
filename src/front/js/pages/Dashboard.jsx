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
        <h1 className="mt-4 p-3">Dashboard</h1>
        <div className="row">
          <RoomCard 
          variant="occupied" 
          roomNumber="1"
          costumer="Khris"
          timein="3pm"
          timeout="5pm"
          />
          <RoomCard 
          variant="avaible" 
          roomNumber="2" 
          />
          <RoomCard 
          variant="not_avaible"
          roomNumber="3"
            />
          <RoomCard 
          variant="maintenance"
          roomNumber="4" />
          <RoomCard 
          variant="avaible" 
          roomNumber="5" />
          <RoomCard 
          variant="occupied" 
          roomNumber="6"
          costumer="Khris"
          timein="3pm"
          timeout="5pm" />
          <RoomCard 
          variant="avaible" 
          roomNumber="7" />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Dashboard;

