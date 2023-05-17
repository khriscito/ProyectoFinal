import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import DashboardFooter from "../component/DashboardFooter.jsx";
import DashboardNavbar from "../component/DashboardNav.jsx";
import { useForm } from "react-hook-form";
const NewRoom = () => {
  const { store, actions } = useContext(Context);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <DashboardNavbar />
      <div className="container my-5">
        <div className="card p-3">
          <h3 className="text-center">Crea una habitación nueva</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
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
              <label htmlFor="room_price">Precio de la habitación</label>
              <input
                type="text"
                name="room_price"
                className="form-control"
                {...register("room_price")}
              />
            </div>
            <button className="btn btn-primary mt-2" type="submit">
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
