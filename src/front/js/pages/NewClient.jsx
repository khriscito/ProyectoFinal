import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import DashboardNavbar from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";
const NewClient = () => {
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
          <h3 className="text-center">Ingresa un nuevo cliente</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
            <div>
              <label htmlFor="room_number">Nombre</label>
              <input
                type="text"
                name="id"
                className="form-control"
                {...register("name")}
              />
            </div>
            <div>
              <label htmlFor="room_number">Apellido</label>
              <input
                type="text"
                name="id"
                className="form-control"
                {...register("lastname")}
              />
            </div>
            <div>
              <label htmlFor="room_type">Documento de identidad</label>
              <input type="text" name="id" className="form-control" />
            </div>
            <div>
              <label htmlFor="room_type">Correo electronico</label>
              <input type="text" name="id" className="form-control" />
            </div>
            <div>
              <label htmlFor="room_price">Ocupacion</label>
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

export default NewClient;
