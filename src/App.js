import logo from './logo.svg';
import {Fragment} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Login from './componentes/autentificacion/Login';
import Cuenta from './componentes/autentificacion/Cuenta';
import Proyectos from './componentes/proyectos/Proyectos';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component ={Login} />
            <Route exact path="/cuenta" component={Cuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
       
        </Switch>
    </Router>
  ); 
}

export default App;
