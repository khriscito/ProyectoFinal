import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../layout.js";
import { Context } from "../store/appContext.js";

const initialValue = {
  email: "",
  password: "",
};
const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const redirectOnLogin = () => {
    navigate("/dashboard");
  };

  const [login, setLogin] = useState(initialValue);
  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const handleOnClick = async () => {
    const response = await actions.login(login);
    if (response) {
      navigate("/dashboard");
    }
  };

  return (
    <section className="vh-50 gradientback">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black rounded my-4 mx-5">
              <div className="card-body p-md-1">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Iniciar Sesión
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw mb-4"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example3c">
                            Correo
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="email"
                            name="email"
                            value={login.email}
                            onChange={(event) => handleChange(event)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw mb-4"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4c">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            value={login.password}
                            onChange={(event) => handleChange(event)}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          onClick={() => handleOnClick()}
                          type="button"
                          className="btn btn-primary btn-lg btn-grad fw-bold border border-0"
                        >
                          Ingresar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
