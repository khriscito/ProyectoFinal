import React, { useContext, useEffect } from "react";
import Datatable from "../component/Datatable.jsx";
import DashboardNav from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";
import { Context } from "../store/appContext";
const Historics = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (store.token && store.checkins.length === 0) {
      actions.getCheckins();
    }
  }, [store.checkins]);
  return (
    <>
      <DashboardNav />
      <Datatable
        title="Historial"
        fields={["id", "Huesped", "Entrada", "Salida", "Habitacion"]}
        data={store.checkins}
      >
        {store.checkins &&
          store.checkins.length > 0 &&
          store.checkins.map((item, index) => (
            <tr key={`room-${index}`}>
              <td>{item.id}</td>
              <td>
                {item.customer.name} {item.customer.lastname}
              </td>
              <td>{item.time_in.toLocaleString()}</td>
              <td>{item.time_out.toLocaleString()}</td>
              <td>{item.Room_id}</td>
            </tr>
          ))}
      </Datatable>
      <DashboardFooter />
    </>
  );
};

export default Historics;
