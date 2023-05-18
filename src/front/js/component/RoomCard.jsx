import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const variants = {
  avaible: "",
  occupied: "bg-danger text-white",
  maintenance: "bg-warning",
  not_Avaible: "bg-secondary text-white",
  occupied_maintenance: "bg-info text-white",
};

const RoomCard = ({
  id = "",
  variant = "",
  roomNumber = "",
  customer = {},
  checkin,
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
  const setMaintenance = async (occupy) => {
    const value = occupy ? "occupied" : "occupied_maintenance";
    const response = await actions.changeRoomStatus(id, value);
    if (response) {
      actions.room();
    }
  };
  return (
    <div className="col-xl-3 col-md-6 col-lg-6 p-3 h-100">
      <div className={`card ${variants[variant]} mb-4 h-100`}>
        <div className="align-items-center justify-content-center h-100">
          <div className="card-header h-100">
            <div className="d-flex justify-content-between align-items-center h-100">
              <span>Habitación: {roomNumber}</span>
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteRoom(id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="card-body h-100">
            <div className="row h-100">
              {checkin && (
                <>
                  <p>
                    Nombre del cliente: {checkin.customer?.name}{" "}
                    {checkin.customer?.lastname}{" "}
                  </p>
                  <p>
                    Tiempo de ingreso:{" "}
                    {new Date(checkin?.time_in).toLocaleString()}
                  </p>
                  <p>
                    Tiempo de salida:{" "}
                    {new Date(checkin?.time_out).toLocaleString()}
                  </p>
                </>
              )}
              <div>
                <i className="fas fa-bed fs-5"></i>
                {` ${roomType} persona(s)`}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between gap-5">
          <div>
            {variant !== "occupied" && variant !== "occupied_maintenance" && (
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
            )}
            {variant === "occupied" && (
              <button
                className="btn btn-info"
                onClick={() => setMaintenance(false)}
              >
                Mantenimiento
              </button>
            )}
            {variant === "occupied_maintenance" && (
              <button
                className="btn btn-warning"
                onClick={() => setMaintenance(true)}
              >
                Ocupar
              </button>
            )}
          </div>
          {(variant === "occupied" || variant === "occupied_maintenance") && (
            <button
              className="btn btn-outline-warning"
              onClick={() => actions.finishStay(id)}
            >
              terminar estadia
            </button>
          )}
          {variant === "avaible" && (
            <Link
              className="btn btn-primary"
              to={"/dashboard/room/occupy/" + id}
            >
              Ocupar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
