import React from 'react'
import CrearProyecto from '../proyectos/CrearProyecto'
import MostrarProyectos from '../proyectos/MostrarProyectos'

function MenuVertical(){
    return(
        <aside className="text-center p-4">
            <h2 className="fst-italic text-danger bg-success bg-gradient fw bold "></h2>
            <CrearProyecto/>
            <h3 className="text-light boder border-buttom fw-bold">Panel De Proyectos</h3>
            <MostrarProyectos/>
        </aside>
    )
}

export default MenuVertical