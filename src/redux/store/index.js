import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducer"
import thunk from "redux-thunk"
import {composeWithDevTools} from '@redux-devtools/extension'

//Creo la store:
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
