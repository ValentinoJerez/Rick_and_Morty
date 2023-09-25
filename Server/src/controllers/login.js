//Importaciones
const {User} = require("../DB_connection")

//
const login = (req, res) => {
    try {
        const {email, password} = req.query;
        if(email === ''|| password === ''){
            return res.status(400).json("Faltan datos")
        } else if (""){
            return res.status(404).json("Usuario no encontrado")
        } else if (""){
            return res.status(403).json("Contraseña incorrecta")
        } else {
            {
              access: true;
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {login};