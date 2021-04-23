import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Menu from './Menu'
import AsyncSelect from 'react-select/async';


export default function Libro_Mayor() {

    const [List, setList] = useState([]);
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState("");
  
    // handle input change event
    const handleInputChange = value => {
      setValue(value);
    };
  
    // handle selection
    const handleChange = value => {
      setSelectedValue(value);
    };
  
    // load options using API call

    const loadOptions=(inputValue)=>{
      return axios.get("http://localhost:3001/api/get/select").then((response)=> {
        return response.data;
    });
    };

    

    useEffect(()=> {
        axios.get("http://localhost:3001/api/get/libroMayor",{codigo:selectedValue.codigo}).then((response)=> {
            setList(response.data);
            console.log(List);
        });
    }, []);



      
        return (
            <div> <br/><br/><br/>

                <div className="center">
                <h2>Elige Tu Cuenta! </h2>
                <pre className="">Input Value: "{inputValue}"</pre>
                <AsyncSelect
                    cacheOptions
                    defaultOptions
                    value={selectedValue}
                    getOptionLabel={e => e.nombre}
                    getOptionValue={e => e.codigo} //Si esto se cambia a e.nombre marca en azul los de ese nombre
                    loadOptions={loadOptions}
                    onInputChange={handleInputChange}
                    onChange={handleChange}
                />
                <pre>Cuenta Seleccionada: {JSON.stringify(selectedValue)}</pre> 
                </div>


                

                <div className="Div1"> <br/>



                    <table className="table">
                        <thead>
                            <tr>
                                <th> Fecha </th>
                                <th> Cuenta </th>
                                <th> Descripción </th>
                                <th> Debe </th>
                                <th> Haber </th>
                            </tr>
                        </thead>
                        <tbody>

                
                            <tr>
                            <td> {List.map((val) => {return <p key={ Math.random().toString(36).substr(3, 9) }> {val.fecha} </p> })} </td>
                            <td> {List.map((val) => {return <p key={ Math.random().toString(36).substr(2, 9) }> {val.codigo} </p> })} </td>
                            <td> {List.map((val) => {return <p key={ Math.random().toString(36).substr(2, 9) }> {val.descripcion} </p> })} </td>
                            <td> {List.map((val) => {return <p key={ Math.random().toString(36).substr(2, 9) }> {val.debe} </p> })} </td>
                            <td> {List.map((val) => {return <p key={ Math.random().toString(36).substr(2, 9) }> {val.haber} </p> })} </td>
                            </tr>
                            
                
                            
                        </tbody>
                    </table>
 
                
                </div>
            </div>
        );

}