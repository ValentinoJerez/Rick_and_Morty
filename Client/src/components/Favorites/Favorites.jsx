import { useSelector, useDispatch } from "react-redux"
import { filterCards, order, reset } from "../../redux/actions/actions"
import Cards from "../Cards/Cards";
import style from "../Favorites/Favorites.module.css"

function Favorites(){
const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites);

function filterHandler(event){
    dispatch(filterCards(event.target.value))
}
function orderHandler(event){
    dispatch(order(event.target.value))
}
function resetHandler(){
    dispatch(reset());
}

    return(
        <div className={style.container}>
            <div className={style.fuente}>
            <h1 className={style.titulo}>Favoritos</h1>
            </div>
            <div className={style.filters}>
            <select className={style.select} onChange={filterHandler}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknow">Unknow</option>
                <option value="Genderless">Genderless</option>
            </select>
                <select className={style.select} placeholder="Order" onChange={orderHandler}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            </div>
            {/* <button onClick={resetHandler} className={style.boton}></button> */}
            <button onClick={resetHandler} className={style.button}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-reload" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"></path>
            <path d="M20 4v5h-5"></path></svg>RESET</button>
            
            <Cards characters={favorites}/>
        </div>
    )
};

export default Favorites