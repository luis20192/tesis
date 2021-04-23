import React, { Component } from 'react';
import './index.css';
import './App.css';
import Libro_Mayor from './components/Libro_Mayor';
import Asiento from './components/Asiento';
import Libro_Diario from "./components/Libro_Diario";
import Crear_Cuenta from "./components/Crear_Cuenta";
import Crear_Auxiliar from "./components/Crear_Auxiliar";
import Auxiliar from "./components/Auxiliar";
import Sub_Cuenta from './components/Sub_Cuenta';
import Cuenta from './components/Cuenta';
import Crear_Subcuenta from './components/Crear_Subcuenta'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import Form from './components/Form';




class App extends Component {
  render() {
    return (
      <div>
        <div>
            <ul>
              <li> <Link to="/">Asiento</Link> </li>
              <li> <Link to="/Libro_Diario">Libro Diario</Link> </li>
              <li> <Link to="/Libro_Mayor">Libro Mayor</Link> </li>
              <li> <Link to="/Auxiliar">A</Link> </li>
              <li> <Link to="/Sub_Cuenta">S</Link> </li>
              <li> <Link to="/Cuenta">C</Link> </li>
              <li className="float"> <Link to="/Crear_Cuenta">Crear Cuenta</Link> </li>
              <li className="float"> <Link to="/Crear_Subcuenta">Crear Sub Cuenta</Link> </li>
              <li className="float"> <Link to="/Crear_Auxiliar">Crear Auxiliar</Link> </li>

            </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/"  component={Asiento} />
            <Route exact path="/Libro_Diario" component={Libro_Diario} />
            <Route exact path="/Libro_Mayor" component={Libro_Mayor} />
            <Route exact path="/Crear_Cuenta" component={Crear_Cuenta} />
            <Route exact path="/Crear_Auxiliar" component={Crear_Auxiliar} />
            <Route exact path="/Crear_Subcuenta" component={Crear_Subcuenta} />
            <Route exact path="/Auxiliar" component={Auxiliar} />
            <Route exact path="/Sub_Cuenta" component={Sub_Cuenta} />
            <Route exact path="/Cuenta" component={Cuenta} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
