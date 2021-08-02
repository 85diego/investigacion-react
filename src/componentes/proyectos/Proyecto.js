//import { EXPORTDECLARATION_TYPES } from '@babel/types'
import React from 'react'

const Proyecto = ({proyecto}) => {
    return (
           
           <button className="list-group-item list-group-item-action list-group-item"
           type="button"
           >{proyecto.nombre} </button>
    )
}

export default Proyecto