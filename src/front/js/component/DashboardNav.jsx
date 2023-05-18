import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../component/Logo.js"
const DashboardNav = () => {
  const navigate = useNavigate();
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
            Hotelium
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="row">
            <button
              className="navbar-brand"
              onClick={() => navigate("/dashboard")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Habitaciones
            </button>
            <button
              className="navbar-brand"
              onClick={() => navigate("/dashboard/clients")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Clientes
            </button>
            <button
              className="navbar-brand"
              onClick={() => navigate("/dashboard/historics")}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Historial
            </button>
          </div>
          <div className="dropdown mt-3">
            <button className="btn btn-danger" type="button">
              Cerrar sesion
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
