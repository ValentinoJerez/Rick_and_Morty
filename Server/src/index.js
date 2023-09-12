//SERVER
const express = require("express")
const mainRouter = require("./routes")
const server = require("./app")

// const server = express()
const PORT = 3001

//Funcion listen
server.listen(PORT, ()=>{
    console.log('Server raised in port: ' + PORT)
    //Permito acceso
    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
            );
            res.header(
                'Access-Control-Allow-Methods',
                'GET, POST, OPTIONS, PUT, DELETE'
                );
                next();
            });
    server.use(express.json());
    
    server.use("/rickandmorty", mainRouter);
})