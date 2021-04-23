import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

function Libro_Diario() {

    const [List, setList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3001/api/get").then((response)=> {
            setList(response.data);
        });
    }, []);
    

    return (
    <div>
        
        

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
                        <td> {List.map((val) => {return <p key={ Math.random().toString(36).substr(2, 9) }> {val.fecha} </p> })} </td>
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


export default Libro_Diario;