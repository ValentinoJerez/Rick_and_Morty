import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import axios from "axios";

import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";
import Favorites from "./components/Favorites/Favorites.jsx"
import About from "./views/About/About.jsx";
import Detail from './views/Detail/Detail.jsx';
import ErrorPage from './views/ErrorPage/ErrorPage.jsx';
import LandingPage from './views/LandingPage/LandingPage.jsx';

import './App.css';

function App() {
//Creo un estado local([])
const location = useLocation();
const [characters, setCharacters] = useState([]);
console.log(characters)
const navigate = useNavigate();

const [access, setAccess] = useState(false);

//Login
async function loginHandler(userData) {

   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         
      const { access } = data; //Devuelve true o false
      setAccess(data);
      access && navigate('/home');
   } catch (error) {
      alert(error)
   }
}

//Funcion Log Out:
function logOut(){
   setAccess(false)
}


useEffect(() => {
   !access && navigate('/');
}, [access]);

//Funcion buscadora madre:
async function searchHandler(id) {
try {
   const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         throw new Error ('¡No hay personajes con este ID!');
      }
} catch (error) {
   alert(error)
}



}

//Funcion cerradora 
function closeHandler(id){
   //Me quedo con todos los personajes menos con el que mande por id
   let deleted = characters.filter(character =>character.id !== Number(id))
   setCharacters(deleted);
}

//Funcion random
function randomHandler(){
   let memoria = []
   //Genero un numero random
   let randomId = (Math.random()*826).toFixed();
   randomId = Number(randomId);

   if(!memoria.includes(randomId))
   {memoria.push(randomId)
      axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });} else {
      alert("Ya agregado");
      return;
   }
}

   return (
      <div className="App">
         {location.pathname !== "/" && <Nav onSearch={searchHandler} random={randomHandler} logOut={logOut}/>}
         <Routes>
            <Route path='/' element={<LandingPage login={loginHandler} />}/>
            <Route path="/Home" 
            element={<Cards characters={characters} onClose={closeHandler}/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Detail/:id" element={<Detail/>}/>
            <Route path='/Favorites' element={<Favorites/>}/>
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>
      </div>
   );
}

export default App;
