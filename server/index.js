const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');




const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '28100305',
    database: 'contabilidad'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {

// Dominio que tengan acceso (ej. 'http://example.com')
   res.setHeader('Access-Control-Allow-Origin', '*');
    
// Metodos de solicitud que deseas permitir
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
// Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');
    
next();
})



app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT fecha, codigo, descripcion, debe, haber, timestamp FROM asiento UNION ALL SELECT fecha, codigo, descripcion, debe, haber, timestamp FROM asiento2 ORDER BY timestamp DESC";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
}); 

app.get("/api/get/auxiliar", (req, res)=> {
    const sqlSelect = "SELECT auxiliar.nombre, auxiliar.codigo, auxiliar.saldo, sub_cuenta.nombre as Proviene FROM auxiliar JOIN sub_cuenta ON auxiliar.sub_cuenta_id = sub_cuenta.codigo ORDER BY Proviene";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
}); 

app.get("/api/get/subcuenta", (req, res)=> {
    const sqlSelect = "SELECT sub_cuenta.nombre, sub_cuenta.codigo, sub_cuenta.saldo, cuenta.nombre as Proviene FROM sub_cuenta JOIN cuenta ON sub_cuenta.cuenta_id = cuenta.codigo ORDER BY Proviene";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
}); 

app.get("/api/get/cuenta", (req, res)=> {
    const sqlSelect = "SELECT cuenta.nombre, cuenta.codigo, cuenta.saldo, grupo.nombre as Proviene FROM cuenta JOIN grupo ON cuenta.grupo_codigo = grupo.codigo ORDER BY Proviene";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
}); 










app.delete("/api/get/auxiliar/delete/:nombre", (req, res)=>{
    const borrar = req.params.nombre;
    const sqlDelete = "DELETE FROM auxiliar WHERE nombre = ?";
    db.query(sqlDelete, borrar);
});

app.put("/api/get/auxiliar/update", (req, res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const sqlUpdate = "UPDATE auxiliar SET nombre = ? WHERE nombre = ?";
    db.query(sqlUpdate, [nombre, codigo]);
});

app.put("/api/get/auxiliar/update2", (req, res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const sqlUpdate = "UPDATE auxiliar SET codigo = ? WHERE codigo = ?";
    db.query(sqlUpdate, [nombre, codigo]);
});

app.delete("/api/get/subcuenta/delete/:nombre", (req, res)=>{
    const borrar = req.params.nombre;
    const sqlDelete = "DELETE FROM sub_cuenta WHERE nombre = ?";
    db.query(sqlDelete, borrar);
});

app.put("/api/get/subcuenta/update", (req, res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const sqlUpdate = "UPDATE sub_cuenta SET nombre = ? WHERE nombre = ?";
    db.query(sqlUpdate, [nombre, codigo]);
});

app.put("/api/get/subcuenta/update2", (req, res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const sqlUpdate = "UPDATE sub_cuenta SET codigo = ? WHERE codigo = ?";
    db.query(sqlUpdate, [nombre, codigo]);
});






app.delete("/api/get/cuenta/delete/:nombre", (req, res)=>{
    const borrar = req.params.nombre;
    const sqlDelete = "DELETE FROM cuenta WHERE nombre = ?";
    db.query(sqlDelete, borrar);
});

app.put("/api/get/cuenta/update", (req, res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const sqlUpdate = "UPDATE cuenta SET nombre = ? WHERE nombre = ?";
    db.query(sqlUpdate, [nombre, codigo]);
});
 
app.put("/api/get/cuenta/update2", (req, res)=>{
    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const sqlUpdate = "UPDATE cuenta SET codigo = ? WHERE codigo = ?";
    db.query(sqlUpdate, [nombre, codigo]);
});

app.get("/api/get/select", (req, res)=> {

    const sqlSelect = "SELECT id, nombre, codigo FROM cuenta UNION ALL SELECT id, nombre, codigo FROM sub_cuenta UNION ALL SELECT id, nombre, codigo FROM auxiliar";
    
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
}); 

app.get("/api/get/selectt/:inputValue", (req, res)=> {
    
    const inputValue = req.params.inputValue;

    const sqlSelect = "SELECT id, nombre, codigo FROM cuenta where codigo like '%' UNION ALL SELECT id, nombre, codigo FROM sub_cuenta where codigo like '%' UNION ALL SELECT id, nombre, codigo FROM auxiliar where codigo like '%'";
    db.query(sqlSelect, inputValue, (req,result)=> {
        res.send(result);
    });
}); 

app.post("/api/insert/auxiliar", (req, res)=> {

    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const codigo2 = req.body.codigo2;



    const sqlInsert = 
        "INSERT INTO auxiliar (nombre, codigo, sub_cuenta_id) VALUES (?,?,?)";

    db.query(sqlInsert,  [nombre, codigo, codigo2], (err, result)=> {});
});

app.post("/api/insert/subcuenta", (req, res)=> {

    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const codigo2 = req.body.codigo2;



    const sqlInsert = 
        "INSERT INTO sub_cuenta (nombre, codigo, cuenta_id) VALUES (?,?,?)";

    db.query(sqlInsert,  [nombre, codigo, codigo2], (err, result)=> {});
});

app.post("/api/insert/cuenta", (req, res)=> {

    const nombre = req.body.nombre;
    const codigo = req.body.codigo;
    const codigo2 = req.body.codigo2;



    const sqlInsert = 
        "INSERT INTO cuenta (nombre, codigo, grupo_codigo) VALUES (?,?,?)";

    db.query(sqlInsert,  [nombre, codigo, codigo2], (err, result)=> {if (err){console.log("ERROR")}});
});

app.post("/p", (req, res)=> {

    const codigo = req.body.codigo;
    const debe = req.body.debe;
    const sqlInsert = 
        "INSERT INTO prueba (codigo, debe) VALUES (?,?)";

    db.query(sqlInsert,  [codigo, debe], (err, result)=> {if (err){alert("Fallido")}});
});

app.post("/api/insert", (req, res)=> {
 
    const Codigo = req.body.Cuenta;
    const Descripcion = req.body.Descripcion;
    const Debe = req.body.Debe;
    const Haber = req.body.Haber;

    const codigo = req.body.cuenta;
    const debe = req.body.debe;
    const haber = req.body.haber;

    const sqlInsert = 
        "INSERT INTO asiento (codigo, descripcion, debe, haber) VALUES (?,?,?,?)";
    const sqlInsert2 = 
        "INSERT INTO asiento2 (codigo, descripcion, debe, haber) VALUES (?,?,?,?)";
    db.query(sqlInsert,  [Codigo, Descripcion, Debe, Haber], (err, result)=> {if (err){alert("Fallido")}});
    db.query(sqlInsert2, [codigo, Descripcion, debe, haber], (err, result)=> {if (err){alert("Fallido")}});
});


app.get("/api/get/libroMayor", (req, res)=> {

    const sqlSelect = "SELECT fecha, codigo, debe, haber, timestamp FROM asiento UNION ALL SELECT fecha, codigo, debe, haber, timestamp FROM asiento2 ORDER BY timestamp DESC";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
});







app.listen(3001, () => {
    console.log("running on port 3001");
});