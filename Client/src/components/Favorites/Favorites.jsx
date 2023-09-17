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
            <button onClick={resetHandler} className={style.boton}>Reset</button>
            <Cards characters={favorites}/>
        </div>
    )
};

export default Favorites