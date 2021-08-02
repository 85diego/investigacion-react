//import { assertNullLiteralTypeAnnotation } from '@babel/types';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { number } from 'yargs';

const Cuenta = (props) => {


    // State para inciar sesion 
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password:'',
        confirmar:''
    });

    // extraer de usuario 
    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere inciar sesion 
    const onSubmit = e => {
        e.proventDefault();
        
        //validar que no haya campos vacios 
        if(nombre.trim() === ''||
           email.trim() === '' ||
           password.trim() === ''||
           confirmar.trim() === ''  ){
                //mostrarAlerta('todos los campos son obligatorios', 'alerta-error');
                alert(' todos los campos son obligatorios');
                return;
            }
        //password minimo de 6 caracteres 
        if(password.length < 6) {
            // mostrarAlerta('el password debe ser de al menos 6 caracteres', ' alerta error')
            alert('el password debe ser de al menos 6 caracteres');
            return;
        }

        // los 2 password son iguales 
        if(password !== confirmar){
            // mostrarAlerta(' los passwords no son iguales', 'alerta-error',);
            alert('los passwords no son iguales','alerta-error');
            return;
        }

    }


    return (
        <div className="container">
        <div className="row d-flex justify-cont-center mt-5">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <div className="card border-dark border-2 bg-grandient bg-success min-vw-50">
        <div className="card-body">
        <h2 className="text-center">Obtener una cuenta</h2>
              
        <form onSubmit={onSubmit} >
            <div className='row'>
            <div className='col-md-12'>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text text-danger fs-4 fw-bc"></span>
            </div>
                <input
                    type="nombre"
                    className="form-control"
                    placeholder="tu nombre"
                    name="nombre"
                    aria-describedby="basic-addon1"
                    value={nombre}
                    onChange={onChange}
                />
            </div>
            </div>
            </div>
            <div className='row'>
            <div className='col-md-12'>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text text-danger fs-4 fw-bc"></span>
            </div>
                <input
                    type="email"
                    className="form-control"
                    placeholder="tu email"
                    name="email"
                    aria-describedby="basic-addon2"
                    value={email}
                    onChange={onChange}
                />
            </div>
            </div>
            </div>
            <div className='row'>
            <div className='col-md-12'>
            <div className='input-groupmb-3'>
            <div className='input-group-prepend'>
            <span className='input-group-text text-danger fs-4 fw-bc'></span>
            </div>
                <input
                    type="password"
                    className="form-control"
                    placeholder="tu password"
                    name="password"
                    aria-describedby="basic-addon3"
                    value={password}
                    onChange={onChange}
               />
            </div>
            </div>
            </div>
            <div className='row'>
            <div className='col-md-12'>
            <div className='input-groupmb-3'>
            <div className='input-group-prepend'>
            <span className='input-group-text text-danger fs-4 fw-bc'></span>
            </div>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar password"
                    name="Confirmar"
                    aria-describedby="basic-addon4"
                    value={confirmar}
                    onChange={onChange}
               />
            </div>
            </div>
            </div>
                <div className='row'>
                <div className='col-md-6 text-center'>
                    <div className='campo-form'>
                     <input type="submit" className="btn btn-dark btn-gradient "value="registrarme"></input>
                    </div>
                </div>
              

              
                    <div className='col-md-6 text-center'>
                    <Link to={'/'} className ="btn btn-outline-light btn-grandient">
                        Iniciar sesion
                    </Link> 
                    </div>
                    </div>
                    
    </form>
            </div>
            </div>
            </div>
            </div>
            </div>
            
    );  
}
export default Cuenta