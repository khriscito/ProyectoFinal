import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const variants = {
  avaible: "bg-success",
  occupied: "bg-danger",
  maintenance: "bg-warning",
  not_Avaible: "bg-secondary",
};

const RoomCard = ({
  id = "",
  variant = "",
  roomNumber = "",
  customer = "",
  timein = "",
  timeout = "",
  roomType = "",
}) => {
  const { store, actions } = useContext(Context);
  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    const response = await actions.changeRoomStatus(id, value);
    console.log(response);
    if (response) {
      actions.room();
    }
  };
  return (
    <div className="col-xl-3 col-md-6 p-5">
      <div className={`card ${variants[variant]} text-white mb-4`}>
        <div className="align-items-center justify-content-center">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <span>Habitación: {roomNumber}</span>
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteRoom(id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <p>Nombre del cliente: {customer}</p>
              <p>Tiempo de ingreso: {timein}</p>
              <p>Tiempo de salida: {timeout}</p>
              <div>
                <i className="fas fa-bed fs-5"></i>
                {` ${roomType} persona(s)`}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between gap-5">
          <div>
            <select
              name="status"
              defaultValue={variant}
              className="form-control"
              onChange={handleOnChange}
            >
              {store.room_status.map((item, index) => {
                return (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <Link className="btn btn-primary" to="/dashboard/clients/new">
            Ocupar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
