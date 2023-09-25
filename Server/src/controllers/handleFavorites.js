//Declaro un arreglo
// let myFavorites = []

// function postFav(req, res){
//     const character = req.body;
//     //Agrego a mi array el personaje 
//     myFavorites.push(character)
//     res.status(200).json(myFavorites)
// }

// function deleteFav(req, res){
//     //Recibo por params el id
//     const {id} = req.params
//     //Elimino al que sea igual al id
//     myFavorites = myFavorites.filter((character) => character.id !== Number(id))
    
//     //Devuelvo una respuesta
//     res.status(200).json(myFavorites);
// }

// module.exports = {postFav, deleteFav}