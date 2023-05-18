import React, { useState, createContext, useContext, useEffect } from "react";
import "../../styles/styles.css";
import RoomCard from "../component/RoomCard.jsx";
import DashboardNav from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { store, actions } = useContext(Context);

  const getRooms = async () => {
    try {
      actions.room();
    } catch (error) {
      console.log("Error al cargar las habitaciones", error);
    }
  };

  useEffect(() => {
    if (store.token) {
      actions.room();
    }
  }, [store.token]);
  console.log(store.rooms);
  return (
    <>
      <DashboardNav />
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mt-4 p-3">Dashboard</h1>
          <Link className="btn btn-primary" to="/dashboard/room/new">
            Agregar habitación
          </Link>
        </div>
        <div className="row">
          {store.rooms?.map((room) => (
            <RoomCard
              key={room.id}
              variant={room.status}
              roomNumber={room.number}
              customer={room.customer_name}
              timein={room.checkin_time}
              timeout={room.checkout_time}
              roomType={room.room_type}
              id={room.id}
            />
          ))}
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
