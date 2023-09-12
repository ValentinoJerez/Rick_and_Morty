const data = require("../utils/users")

function login(req, res){
    //Por query recibo los datos
    const {email, password} = req.query
    //Busco el usuario y comparo los datos
    const found = data.find(user => user.email === email && user.password === password)
    //Si encuentro al usuario
    const access = found ? true : false;
    res.status(200).json({access});
}

//Log Out



module.exports = login;