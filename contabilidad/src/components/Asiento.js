import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAsiento from "./useAsiento";
import validar from "./validarr"

function Asiento() {

    const {handleChange, handleSubmit, values, errors} = useAsiento(submit, validar);

    function submit() {

        console.log("Bien!");
        axios.post('http://localhost:3001/api/insert', {
            Cuenta: values.Cuenta, 
            Descripcion: values.Descripcion, 
            Debe: values.Debe, 
            Haber: values.Haber, 
            cuenta: values.cuenta, 
            debe: values.debe, 
            haber: values.haber,
        }).catch(err =>{
            console.log(err);
            alert("Fallo");
        });
    }

      return (
        <>
        <form onSubmit={handleSubmit} noValidate> <br/>
    
            <h2 className="h2">Registrar Asientos</h2>
    
            <div className="Div1">
    
                <br/><br/>
    
                <div>

                    <label className="Cuenta">            Cuenta</label>
    
                </div>
    
                <div>
    
                    <label className="Descripción">       Descripción</label>
    
                </div>
    
                <div>
    
                    <label className="Debe">              Debe</label>
    
                    <label className="Haber">             Haber</label>
    
                </div>
    
                <br/>
                <br/>
            
                <div>
    
                        <input  
                        value={values.Cuenta} onChange={handleChange}
                        type="number"      
                        name="Cuenta"     
                        id="" 
                        className="input2"/> {errors.Cuenta && <> <br/>  <label className="spamCuenta">{errors.Cuenta}</label> </>}
    
                    <br/> <br/>
    
                        <input  
                        value={values.cuenta} onChange={handleChange}
                        type="number"     
                        name="cuenta"     
                        id="" 
                        className="input1"/> {errors.cuenta && <> <br/> <label className="spamCuenta">{errors.cuenta}</label> </>}
    
                </div>
    
                <div>
    
                        <textarea  
                        value={values.Descripcion} onChange={handleChange}
                        name="Descripcion"   
                        id="" 
                        cols="30" 
                        rows="10"></textarea>
                        
                        {errors.Descripcion && <> <br/>  <label className="textArea">{errors.Descripcion}</label> </>}

                        <textarea 
                        value={values.Descripcion} onChange={handleChange}
                        name="Descripcion"   
                        id="" 
                        cols="30" 
                        rows="10" 
                        className="hidden"></textarea>
                </div>
    
                <div>
    
                        <input  
                        value={values.Debe} onChange={handleChange}
                        type="number"     
                        name="Debe"       
                        id=""/> 
                
                        <input  
                        value={values.Haber} onChange={handleChange}
                        type="number"     
                        name="Haber"      
                        id=""/> 
                        {errors.Debe && <> <br/>  <label className="">{errors.Debe}</label> </>}
                        {errors.Haber && <> <br/> <label className="">{errors.Haber}</label> </>}
                
                    <br/>
                    <br/>
                    
    
                        <input  
                        value={values.debe} onChange={handleChange}
                        type="number"     
                        name="debe"       
                        id=""/>
                
                        <input  
                        value={values.haber} onChange={handleChange}
                        type="number"     
                        name="haber"      
                        id=""/>
                        {errors.debe && <> <br/>  <label className="">{errors.debe}</label> </>}
                        {errors.haber && <> <br/>  <label className="">{errors.haber}</label> </>}
    
    
    
                </div>

                
    
                <div className="Div4">
            
                    <button type="submit" className="submit">Aceptar</button>

                    <button className="reset">Borrar</button>


                    

                </div>
    
    
    
                
    
    
    
    
            </div>
            
        
            
        </form>

        </>
    )
    
};

export default Asiento;