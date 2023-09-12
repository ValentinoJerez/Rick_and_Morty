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
            <div className={style.info}>
                <h3>Name:</h3>
                <p>{character?.name}</p>
            </div>    
            <div className={style.info}>
                <h3>Status:</h3>
                <p>{character?.status}</p>
            </div>
            <div className={style.info}>
                <h3>Species:</h3>
                <p>{character?.species}</p>
            </div>
            <div className={style.info}>
                <h3>Gender:</h3>
                <p>{character?.gender}</p>
            </div>
            <div className={style.info}>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p>  
            </div>
            <div className={style.info}>
                <h3>Location:</h3>
                <p>{character.location?.name}</p>    
            </div>
            <div className={style.imagen}>
                <img src={character.image} />
            </div>
        </div>
        );
};

export default Detail;