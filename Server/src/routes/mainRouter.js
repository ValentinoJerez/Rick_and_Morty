//Importaciones
const {Router} = require("express")
const getCharById = require("../controllers/getCharById")
const {postFav, deleteFav} = require("../controllers/handleFavorites")
const login = require("../controllers/loginController")

const mainRouter = Router();

//Rutas
mainRouter.get("/character/:id", getCharById)
mainRouter.post("/login", login)
mainRouter.post("/fav", postFav)
mainRouter.delete("/fav/:id", deleteFav)

module.exports = mainRouter