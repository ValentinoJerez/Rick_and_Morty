const axios = require("axios")
const URL = "http://rickandmortyapi.com/api/character/"

async function getCharById(req, res){
    const {id} = req.params
    try {
        const response = await axios.get(`http://rickandmortyapi.com/api/character/${id}`)
        //const { name, gender, species, origin, status, image } = response.data;
        response.data.name ? res.status(200).json(response.data) : res.status(404).send("Not Found")
        .status(400).send("Not found")
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = getCharById;