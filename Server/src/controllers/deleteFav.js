//Importaciones
const {Favorite} = require("../DB_connection")

//
const deleteFav = (req, res) => {
    try {
        const id = req.params._id;
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}