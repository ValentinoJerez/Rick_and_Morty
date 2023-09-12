import { useSelector, useDispatch } from "react-redux"
import { filterCards, order, reset } from "../../redux/actions/actions"
import Cards from "../Cards/Cards";

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
        <div>
            <h1>Favoritos</h1>
            <select onChange={filterHandler}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknow">Unknow</option>
                <option value="Genderless">Genderless</option>
            </select>
            <select placeholder="Order" onChange={orderHandler}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
            <button onClick={resetHandler}>Reset</button>
            <Cards characters={favorites}/>
        </div>
    )
};

export default Favorites