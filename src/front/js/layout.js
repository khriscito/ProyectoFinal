import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { createContext, useState} from "react";
import Profile from "./pages/Profile.jsx";

export const UserContext = createContext();


const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
    
    const[user,setUser] =useState({
        email:'',
        password:''
    });

    const handleChangeContext = (event) => {
        setUser({...user,[event.target.name]:event.target.value});};

    const contextValue ={
        usuario: user, 
        funcionContexto: handleChangeContext
    };

    return (
        <div>
            <UserContext.Provider value ={contextValue}>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Profile />} path="/profile" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
};

export default injectContext(Layout);
