import React, { useState } from 'react';
import useForm from './useForm';
import validar from './validar';
import axios from "axios";

function Form () {
    
    const {handleChange, handleSubmit, values, errors} = useForm(submit, validar);


    function submit() {
        console.log("Bien!");
        axios.post('http://localhost:3001/p', {
            codigo: values.codigo, 
            debe: values.debe, 
        }).catch(err =>{
            console.log(err);
            alert("Fallo");
        });
    }

    return(
        <>  <br/>   <br/>
            <form onSubmit={handleSubmit} noValidate> <br/>
                    <label >Codigo</label>

                        <input name="codigo" type="text" value={values.codigo} onChange={handleChange} />  
                        {errors.codigo && <spam>{errors.codigo}</spam> }



                    <label >Debe</label>

                        <input name="debe" type="text" value={values.debe} onChange={handleChange} />  
                        {errors.debe && <spam>{errors.debe}</spam> }


                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;