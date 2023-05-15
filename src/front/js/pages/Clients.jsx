import React from "react";
import Datatable from "../component/Datatable.jsx";
import DashboardNav from "../component/DashboardNav.jsx";
import DashboardFooter from "../component/DashboardFooter.jsx";
const Clients = () => {
  return (
    <>
      <DashboardNav />
      <Datatable title="Clientes" />
      <DashboardFooter />
    </>
  );
};

export default Clients;
