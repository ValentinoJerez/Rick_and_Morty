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
const navigate = useNavigate();

const [access, setAccess] = useState(false);
const EMAIL = 'valentino@gmail.com';
const PASSWORD = 'proyecto42';

function loginHandler(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

//Hacer funcion Log Out:


useEffect(() => {
   !access && navigate('/');
}, [access]);

//Funcion buscadora madre:
function searchHandler(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
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
         {location.pathname !== "/" && <Nav onSearch={searchHandler} random={randomHandler}/>}
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
