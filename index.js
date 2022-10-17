const express = require("express")
const bodyParser = require("body-parser")
const PUERTO = 4444

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Endpoints
// 1. Tipo de peticion
// 2. Ruta (Identificador del endpoint)
// 3. Funcion callback (funcion a ejecutar dada la preticion HTTP)

app.get("/",(req, resp)=>{
    console.log("Llego una preticion HTTP GET (/)")
    resp.send("<h1>Hola Progra WEB</h1>")
})

//PATH PARAMETER
//URL:"http://localhost:4444/alumno/20152461/Diego"
//obtenemos Nombre: Diego
//          Codigo: 20152461
app.get("/alumno/:cod/:nom",(req, resp)=>{
    const codigo = req.params.cod
    const nombre = req.params.nom

    resp.send(` <div>Nombre: ${nombre}</div>
                <div>Codigo: ${codigo}</div>`)
})

//QUERY PARAMETER
//URL:"http://localhost:4444/alumno-query?cod=20152461&nom=Diego"
//obtenemos Nombre: Diego
//          Codigo: 20152461
app.get("/alumno-query",(req,resp)=>{
    const codigo = req.query.cod
    const nombre = req.query.nom

    resp.send(` <h1>Query parameter request</h1>
                <div>Nombre: ${nombre}</div>
                <div>Codigo: ${codigo}</div>`)

})


app.post("/alumno",(req, resp)=>{
    console.log(req.body)
    const nombre = req.body.nombre
    const codigo = req.body.codigo

    const respuesta = ` <h1>Peticion HTTP Post (raw)</h1>
                        <div>Nombre: ${nombre}</div>
                        <div>Codigo: ${codigo}</div>`

    resp.send(respuesta)
})


//FORMULARIOS HTTP
app.get("/alumno-form",(req, resp)=>{
    resp.send(` <form method ="post" action="/alumno-post">
                    <input type="text" name="cod"/>
                    <input type="text" name="nom"/>
                    <input type="submit" value="Enviar"/>
                </form>`)
})

app.post("/alumno-post",(req, resp)=>{
    console.log(req.body)
    const nombre = req.body.nom
    const codigo = req.body.cod

    const respuesta = ` <h1>Peticion HTTP Post (formulario HTTP)</h1>
                        <div>Nombre: ${nombre}</div>
                        <div>Codigo: ${codigo}</div>`

    resp.send(respuesta)
})


//Puerto con el cual vamos a trabajar
//Error puedo ocurrir si un servido ya esta usando este codigo
//
app.listen(PUERTO,() => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})