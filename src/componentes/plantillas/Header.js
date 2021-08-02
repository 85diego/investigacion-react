import React, {useState} from 'react'

const Header =() => {
    const [user, setUser] = useState(null)
    const login = () => {
        setUser({id:1,nombre:"DIEGO"})
    }
    const logout = () => {
        setUser(null)
    }

    return (
        <header className="d-flex justify-content-between p-4 bg-success bg-gradient">
       <div className="container-fluit">
        <span className="navbar-brand mb-0 fs-4 text-white">User:{user ? user.nombre:"no autentificado"}</span>
         { user 
         ? ( <button type="button" 
               className="btn btn-outline-light"
                onClick ={logout}
                >Cerrar sesion
            </button>) 
         : ( <button type="button" 
               className="btn btn-outline-light"
               onClick ={login}
               >Iniciar sesion
            </button>)

         }
        </div>
       
    


        </header>
    )
}
export default Header;