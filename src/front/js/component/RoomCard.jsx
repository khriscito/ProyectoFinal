import React from "react";

const variants = {
  avaible: "bg-success",
  occupied: "bg-danger",
  maintenance: "bg-warning",
  not_avaible: "bg-secondary",
};
const RoomCard = ({
  variant = "",
  roomNumber = "",
  costumer = "",
  timein = "",
  timeout = "",
}) => {
  return (
    <div className="col-xl-3 col-md-6 p-5">
      <div className={`card ${variants[variant]} text-white mb-4`}>
        <div className="card-header text-center">Status: {variant}</div>
        <div className="align-items-center justify-content-center">
          <div className="card-body">Nombre del cliente: {costumer}</div>
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
