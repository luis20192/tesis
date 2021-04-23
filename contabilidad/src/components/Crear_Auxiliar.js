import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import useCrear from "./useCrear";
import validar from "./validarAux";

function Crear_Auxiliar() {

  const {handleChange, handleSubmit, values, errors} = useCrear(submit, validar);


  function submit () {
      axios.post('http://localhost:3001/api/insert/auxiliar', {

        nombre:  values.nombre, 
        codigo:  values.codigo, 
        codigo2: values.codigo2,

      }).catch(err =>{
        console.log(err);
        alert("Fallo");
    });
  };

    return (
 
        <form onSubmit={handleSubmit} noValidate> <br/>


        <h2 className="h2C" >Registrar nueva cuenta tipo Auxiliar</h2>
  
        <div className="Div2">
  
          
  
          <br/>
  
          <span className="Código">Nombre</span>
  
          <br/><br/>
  
          <input type="text" name="nombre" id="" value={values.nombre} onChange={handleChange} className="input4"/>

          {errors.nombre && <> <br/>  <spam className="codigo">{errors.nombre}</spam> </>}

          <br/>
  
          <span className="Nombre">Codigo</span>
  
          <br/><br/>
  
          <input type="number" name="codigo" id="" value={values.codigo} onChange={handleChange} className="input4"/>

          {errors.codigo && <> <br/>  <spam className="codigo">{errors.codigo}</spam> </>}

          <br/>
          
          <span className="CP">Codigo de Sub Cuenta "Padre"</span>

          <br/><br/>

          <input type="number" name="codigo2" id="" value={values.codigo2} onChange={handleChange} className="input4"/>

          {errors.codigo2 && <> <br/>  <spam className="codigo">{errors.codigo2}</spam> </>}
          
          <br/>
          <br/>
          <br/>
          <div className="CC">

          <button type="submit" className="submit">Aceptar</button>

          <br/>
          </div>
        </div>
      </form>
    );
    
}

export default Crear_Auxiliar;