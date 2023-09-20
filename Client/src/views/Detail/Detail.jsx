import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import style from "../Detail/Detail.module.css"

import axios from "axios"

function Detail(){
    //Le hago destructuring, obtengo el id
    const {id} = useParams();
    
    const [character, setCharacter] = useState({});

    useEffect(() => {
        console.log(id)
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           }
        });
        return setCharacter({});
     }, []);

    return(
        <div className={style.detail}>
            <div className={style.titulo}>
                <h3>{character?.name}</h3>
            </div>    
            <div className={style.info}>
                <h3>Status:</h3>
                <p>{character?.status}</p>
                <h3>Species:</h3>
                <p>{character?.species}</p>
                <h3>Gender:</h3>
                <p>{character?.gender}</p>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p>  
                <h3>Location:</h3>
                <p>{character.location?.name}</p>
            </div>
            <div className={style.imagen}>
                <img src={character.image} alt="Character Image"/>
            </div>
        </div>
        );
};

export default Detail;