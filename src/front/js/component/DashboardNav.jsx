import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../component/Logo.js"
const DashboardNav = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/dashboard">
          <Logo></Logo>
        </Link>
        <button
          className="btn btn-sm order-1 text-white order-lg-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <Logo></Logo>
            <div className="align-text-center m-4 gap-2 fs-1">
            Dashboard
          </div>
          </h5>
          <button
            type="button"
            className="btn-close my-3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
            <div className="row">
            <button
              className="navbar-brand btn btn-outline-light my-4"
              onClick={() => navigate("/dashboard")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Habitaciones
            </button>
            <button
              className="navbar-brand btn btn-outline-light my-4"
              onClick={() => navigate("/dashboard/clients")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Clientes
            </button>
            <button
              className="navbar-brand btn btn-outline-light my-4"
              onClick={() => navigate("/dashboard/historics")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Historial
            </button>
          </div>
          <div className="dropdown mt-3 my-5 d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-danger" type="button" onClick={logout}>
              Cerrar sesion
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
