const express = require("express")
const PUERTO = 4444

const app = express()

// Endpoints
// 1. Tipo de peticion
// 2. Ruta (Identificador del endpoint)
// 3. Funcion callback (funcion a ejecutar dada la preticion HTTP)

app.get("/",(req,resp)=>{
    console.log("Llego una preticion HTTP GET (/)")
    resp.send("<h1>Hola Progra WEB</h1>")
})

//Puerto con el cual vamos a trabajar
//Error puedo ocurrir si un servido ya esta usando este codigo
app.listen(PUERTO,() => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})