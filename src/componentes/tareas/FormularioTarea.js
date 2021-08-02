import React from 'react'

const FormularioTarea= () => {
    return (
        <div className="border border-light mt-2">
            <h2 className="text-light fw-bold fs-1 text-center mb-0 mt-2">Formulario de Tarea</h2>
            <form className="">
                <div className='row'>
                <div className='col-md-12'>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text text-danger fs-2 fw-bolder"></span>
                        </div>
                        <input
                            type="text"
                            className="form-control fs-2"
                            placeholder="Nombre Tarea"
                            name="nombre"
                        />
                    </div>
                </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <div className="d-grid">
                            <input type="submit" className="btn btn-success bg-gradient"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormularioTarea