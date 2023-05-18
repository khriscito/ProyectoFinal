import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import NewRoom from "./pages/NewRoom.jsx";
// import { Home } from "./pages/home";
import Home from "./component/home.jsx";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import  Footer  from "./component/Footer.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { createContext, useState } from "react";
import Profile from "./pages/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserContext = createContext();
import NewClient from "./pages/NewClient.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Clients from "./pages/Clients.jsx";
import Historics from "./pages/Historics.jsx";
import CreateTransaction from "./pages/CreateTransaction.jsx";
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangeContext = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const contextValue = {
    usuario: user,
    funcionContexto: handleChangeContext,
  };

  return (
    <div>
      <UserContext.Provider value={contextValue}>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            {/* <Navbar /> */}
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Dashboard />} path="/dashboard" />
              <Route element={<Single />} path="/single/:theid" />
              <Route element={<Register />} path="/register" />
              <Route element={<Login />} path="/login" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<Clients />} path="/dashboard/clients" />
              <Route element={<NewClient />} path="/dashboard/clients/new" />
              <Route element={<NewRoom />} path="/dashboard/room/new" />
              <Route
                element={<CreateTransaction />}
                path="/dashboard/room/occupy/:id"
              />
              <Route element={<Historics />} path="/dashboard/historics" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default injectContext(Layout);
