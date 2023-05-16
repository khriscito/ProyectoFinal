import React, { useContext } from "react";
import { Context } from "../store/appContext";

const variants = {
  avaible: "bg-success",
  occupied: "bg-danger",
  maintenance: "bg-warning",
  not_Avaible: "bg-secondary",
};

const RoomCard = ({
  variant = "",
  roomNumber = "",
  customer = "",
  timein = "",
  timeout = "",
}) => {
  return (
    <div className="col-xl-3 col-md-6 p-5">
      <div className={`card ${variants[variant]} text-white mb-4`}>
        <div className="align-items-center justify-content-center">
          <div className="card-body">Nombre del cliente: {customer}</div>
          <div className="card-body">Tiempo de ingreso: {timein}</div>
          <div className="card-body">Tiempo de salida: {timeout}</div>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-center gap-5">
            <i className="fas fa-bed fs-3"></i>
            <span className="fs-3">{roomNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
