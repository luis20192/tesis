import React, { Component, useEffect, useState } from "react";
import axios from "axios";


function Sub_Cuenta() {

    const [List, setList] = useState([]);
    const [nombre, setnombre] = useState("");
    const [codigo, setcodigo] = useState(0);

    const [unombre, setunombre] = useState("");
    const [ucodigo, setucodigo] = useState(0);

    useEffect(()=> {
        axios.get("http://localhost:3001/api/get/subcuenta", {
           
        nombre: nombre,
        codigo: codigo,

        }).then((response)=> {
            setList(response.data);
        });
    }, []);

    const borrar = (nombres) => {
        axios.delete(`http://localhost:3001/api/get/subcuenta/delete/${nombres}`);
    };

    const actualizar = (nombres) => {
        axios.put("http://localhost:3001/api/get/subcuenta/update", {
           
            nombre: unombre,
            codigo: nombres,

    
            });
            setunombre()
    };

    const actualizar2 = (nombres) => {
        axios.put("http://localhost:3001/api/get/subcuenta/update2", {
           
            nombre: ucodigo,
            codigo: nombres,

    
            });
            setucodigo()
    };




    return (
    <div><br/>
    
    <h2 className="h2">Sub Cuenta</h2>


        

        <div className="Div1"> <br/>

            <table className="table" >
                <thead>

                    <tr>
                        <th className=""> Nombre </th>
                        <th> Codigo </th>
                        <th> Saldo </th> 
                        <th> Proviene de </th> 
                        <th> MN </th>
                        <th> MC </th>
                        <th> Borrar </th>
                    </tr>

                </thead>
                <tbody>
        
                    <tr>
                        <td name= "nombre" WIDTH="" HEIGHT=""> {List.map((val) => {return <> <spam className="pading">{val.nombre}</spam> <br/><br/><br/> </> })} </td>
                        <td name="codigo" WIDTH="" HEIGHT=""> {List.map((val) => {return <> <spam className="pading">{val.codigo}</spam> <br/><br/><br/> </> })} </td>
                        <td name="saldo" WIDTH="" HEIGHT=""> {List.map((val) => {return <> <spam className="pading">{val.saldo}</spam> <br/><br/><br/> </> })} </td>   
                        <td WIDTH="" HEIGHT=""> {List.map((val) => {return <> <spam className="pading">{val.Proviene}</spam> <br/><br/><br/> </> })} </td>     
                        <td WIDTH="" HEIGHT=""> {List.map((val) => {return <> <input type="text" className="inputt" onChange={(e)=>{setunombre(e.target.value) }} /> <button onClick={() => {actualizar(val.nombre) }}> MN </button> <br/><br/><br/> </>  })} </td>   
                        <td WIDTH="" HEIGHT=""> {List.map((val) => {return <> <input type="number" className="inputt" onChange={(e)=>{setucodigo(e.target.value) }}  /> <button onClick={() => {actualizar2(val.codigo) }}> MC </button> <br/><br/><br/> </>  })} </td>   
                        <td WIDTH="" HEIGHT=""> {List.map((val) => {return <> <button onClick={() => {borrar(val.nombre) }}> borrar </button> <br/><br/><br/> </> })} </td>      
                    </tr>

                </tbody>
            </table>
        
        </div>
    </div>
    );
    
}


export default Sub_Cuenta;


