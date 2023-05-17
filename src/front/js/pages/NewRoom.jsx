import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import DashboardFooter from "../component/DashboardFooter.jsx";
import DashboardNavbar from "../component/DashboardNav.jsx";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// los values hacen referencia al enum src/api/models.py
const room_status = [
  { value: "avaible", label: "Disponible" },
  { value: "occupied", label: "Ocupada" },
  { value: "maintenance", label: "Mantenimiento" },
  { value: "not_avaible", label: "No disponible" },
];

const NewRoom = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await actions.createRoom(data);
    if (response) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <DashboardNavbar />
      <div className="container my-5">
        <button onClick={() => navigate("/dashboard")}>Regresar</button>
        <div className="card p-3">
          <h3 className="text-center">Crea una habitación nueva</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="row gap-2">
            <div>
              <label htmlFor="room_number">
                Numero/nombre de la habitación
              </label>
              <input
                type="text"
                name="number"
                className="form-control"
                {...register("number")}
              />
            </div>
            <div>
              <label htmlFor="room_type">Tipo de habitación</label>
              <select
                name="room_type"
                className="form-control"
                {...register("room_type")}
              >
                <option value="1">Sencilla</option>
                <option value="2">Doble</option>
                <option value="3">Triple</option>
                <option value="4">Suite</option>
              </select>
            </div>
            <div>
              <label htmlFor="status">Estatus</label>
              <select
                name="status"
                className="form-control"
                {...register("status")}
              >
                {store.room_status.map((status, index) => {
                  return (
                    <option key={index} value={status.value}>
                      {status.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-success mt-2" type="submit">
              Crear Habitación
            </button>
          </form>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default NewRoom;
