import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import Datatable from "../component/Datatable.jsx";
import DashboardNav from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";
const Clients = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (store.token && store.clients.length === 0) {
      actions.getClients();
    }
  }, []);
  return (
    <>
      <DashboardNav />
      <Datatable
        title="Clientes"
        fields={[
          "id",
          "Nombre",
          "Apellido",
          "ocupacion",
          "Documento de identidad",
        ]}
      >
        {store.clients &&
          store.clients.length > 0 &&
          store.clients.map((item, index) => (
            <tr key={`customer-${index}`}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.occupation}</td>
              <td>{item.document}</td>
            </tr>
          ))}
      </Datatable>
      <DashboardFooter />
    </>
  );
};

export default Clients;
