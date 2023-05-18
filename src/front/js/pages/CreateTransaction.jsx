import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import DashboardNav from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const CreateTransaction = () => {
  const [currentRoom, setCurrentRoom] = useState();
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await actions.createCheckIn(data, id);
    if (response) navigate(-1);
  };

  useEffect(() => {
    if (!store.rooms || store.rooms.length === 0) {
      actions.room();
      return;
    }
    const room = store.rooms.find((room) => room.id === parseInt(id));
    setCurrentRoom(room);
  }, [store.rooms]);

  useEffect(() => {
    if (!store.clients || store.clients.length === 0) {
      actions.getClients();
      return;
    }
  }, [store.clients]);
  return (
    <>
      <DashboardNav />
      <div className="container my-5">
        <div className="row card p-4">
          <div className="col-12">
            <h1 className="text-center">
              Crear estadía en habitacion {currentRoom && currentRoom.number}
            </h1>
          </div>
          <div className="col-12">
            <form
              action=""
              className="row gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label>Seleccione un cliente</label>
                <select
                  name="client"
                  className="form-control"
                  {...register("customer_id")}
                >
                  <option value="">Seleccione un cliente</option>
                  {store.clients &&
                    store.clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name} {client.lastname}
                      </option>
                    ))}
                </select>
                <div className="d-flex justify-content-end">
                  <Link
                    className="btn btn-primary mt-3"
                    to="/dashboard/clients/new"
                  >
                    Crear un cliente nuevo
                  </Link>
                </div>
              </div>
              <div>
                <label>Fecha de ingreso</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("time_in")}
                />
              </div>
              <div>
                <label>Fecha de salida</label>
                <input
                  type="date"
                  className="form-control"
                  {...register("time_out")}
                />
              </div>
              <div>
                <label htmlFor="">Observaciones</label>
                <textarea
                  name="observations"
                  className="form-control"
                  {...register("observations")}
                ></textarea>
              </div>
              <div>
                <button className="btn btn-primary">
                  Crear estadía <i className="fas fa-plus"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default CreateTransaction;
