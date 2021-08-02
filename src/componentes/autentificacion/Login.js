import React, {useState} from 'react'
import {Link} from 'react-router-dom' ;

 const Login = () => {
     const [usuario, guardarUsuario] = useState
        ({email: '', password: ''
     })
     const {email,password } = usuario;
     const onChange = e =>{
        guardarUsuario({...usuario,[e.target.name]:e.target.value})
     }
     const onSubmit = e =>{
        e.preventDefault(); 
    //Validar que no haya campos vacíos
        if(email.trim()===''|| password.trim()===''){
            alert('Debe llenar todos los campos');
        }

        else{
           window.location.href ="/proyectos"
           }
    }

    return (
    
            <div className="container">
            <div className="row d-flex justify-content-center mt-5">
            <div className="col-20 col-sm-8 col-md-10 col-lg-4">
            <div className="card border-warning border-2  bg-gradient">
            <div className="card-body border bg-bg-gradient">
            <div className="p-2 mb-0 bg-info bg-gradient text-black text-center text-uppercase font-weight-bold mt-0 text-"> Inicie Sesión </div>
       
          
            <form onSubmit={onSubmit}>
                <div className='row'>
                <div className = 'col-md-12'>
                <div className = 'input-group mb-3'>
                <div className = 'input-group-prepend'>
                <svg width="40" height="60" fill="currentColor" class="bi bi-envelope" viewBox="0 0 17 10">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                </div>
                    <input
                        type ="email"
                        className = "form-control mt-3"
                        name="email"
                        placeholder="e-mail"
                        araia-aria-describedby ="basic-addon1"
                        value={email}
                        onChange={onChange}
                    />
                </div>
                </div>
                </div>

                <div className = 'row'>
                <div className = 'col-md-12'>
                <div className = 'input-group mb-3'>
                <div className = 'input-group-prepend'>
                <svg  width="40" height="60" fill="currentColor" class="bi bi-key" viewBox="0 0 16 10">
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                </div>
                    <input
                        type ="password"
                        className = "form-control mt-3"
                        placeholder="Contraseña"
                        name="password"
                        aria-describedby = 'basic-addon2'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                </div>
                </div>  
                    <div className = 'row'>
                    <div className = 'col-md-8 row d-flex justify-content-center'>
                    <div className = 'campo-form'>
                    <Link to= {'/proyectos'} className="btn btn-info btn-gradient">Iniciar</Link>
                    </div>
                    </div>
                    <div className = 'col-md'> 
                    <Link to={'/cuenta'} className="btn btn-info btn-gradient"> Obtener Cuenta</Link>
                    </div>
                    </div>

            </form>
            
            
                </div>    
                </div>
                </div>
                </div>
                </div>




        )
    
}
export default Login;