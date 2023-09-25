//Importaciones
const {Favorite} = require("../DB_connection")

//
const postFav = (req, res) => {
    try {
        const {name, origin, status, image, species, gender} = req.body;
        if(origin === undefined || name===undefined||status===""){
            return  res.status(401).json({message: "Faltan datos"})
        } else {
            
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {postFav};