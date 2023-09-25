//Importaciones
const {User} = require("../DB_connection")

//
const createUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(email === ''|| password === ''){
            return res.status(400).json("Faltan datos")
        } else {
            //Si los datos son correctos, los guardamos en el modelo
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {createUser}