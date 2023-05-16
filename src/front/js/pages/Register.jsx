import React, { useState, createContext, useContext} from "react";
import  ReactDOM  from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const initialValue = {
    email: "",
    password: "",
    name: ""
}

const Register = () => {
    const { store, actions } = useContext(Context);
    const [newUser, setNewUser] = useState (initialValue);
    const navigate=useNavigate()
    const handleChange = (e) => {
        setNewUser({...newUser,[e.target.name]:e.target.value});
    };
    const handleOnClick = async() =>{
        const response = await actions.registerUser(newUser);
        if (response){
            navigate('/dashboard');
        }
        
    };


    return (
        <section className="vh-100 gradientback">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black rounded my-4 mx-5" >
                <div className="card-body p-md-1">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrese</p>
                        <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">Nombre del Hotel</label>
                            <input type="text" id="form3Example1c" className="form-control" 
                            placeholder="Coloque el nombre del hotel" 
                            name="name"
                            value= {newUser.name} 
                            onChange ={(e)=> handleChange(e)}/>
                            
                            </div>
                        </div>
    
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">Correo</label>
                            <input type="email" id="form3Example3c" className="form-control"
                            placeholder="Coloque su correo"
                            name="email"
                            value={newUser.email} 
                            onChange={(e)=>handleChange(e)}/>

                            </div>
                        </div>
    
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">Coloque su contraseña</label>
                            <input type="password" id="form3Example4c" className="form-control"
                            name="password"
                            placeholder="Coloque su password"
                            value={newUser.password} 
                            onChange={(e)=>handleChange(e)}/>
                            </div>
                        </div>
    
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4cd">Repita su contraseña</label>
                            <input type="password" id="form3Example4cd" className="form-control" 
                            name="password"
                            placeholder=""
                            value={newUser.password} 
                            onChange={(e)=>handleChange(e)}/>
                            </div>
                        </div>
    
                        <div className="form-check d-flex justify-content-center mb-5">
                        <label className="form-check-label" for="form2Example3">
                            Estoy de acuerdo con <a href="#!">Términos de Servicio</a>
                            </label>
                            <div>
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            </div>

                        </div>
    
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick ={()=>handleOnClick()} type="button" className="btn btn-primary btn-lg btn-grad fw-bold border border-0">Register</button>
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
    )
}

export default Register

