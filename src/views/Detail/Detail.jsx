import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

import axios from "axios"

function Detail(){
    //Le hago destructuring, obtengo el id
    const {id} = useParams();
    
    const [character, setCharacter] = useState({});

    useEffect(() => {
        console.log(id)
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           }
        });
        return setCharacter({});
     }, []);

    // useEffect(() => {
    //     axios(`https://rickandmortyapi.com/api/character/${id}`)
    //     .then( response => response.data)
    //     .then((data) => {
    //        if (data.name) {
    //           setCharacter(data);
    //        } else {
    //           window.alert('No hay personajes con ese ID');
    //        }
    //     });
    //     return setCharacter({});
    //  }, [id])

    return(
        <div className="detail-container">
            <div>
                <h3>Name:</h3>
                <p>{character?.name}</p>
            </div>    
            <div>
                <h3>Status:</h3>
                <p>{character?.status}</p>
            </div>
            <div>
                <h3>Species:</h3>
                <p>{character?.specie}</p>
            </div>
            <div>
                <h3>Gender:</h3>
                <p>{character?.gender}</p>
            </div>
            <div>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p>  
            </div>
            <div>
                <h3>Location:</h3>
                <p>{character.location?.name}</p>    
            </div>
            <div>
                <img src={character.image}/>
            </div>
        </div>
        );
};

export default Detail;