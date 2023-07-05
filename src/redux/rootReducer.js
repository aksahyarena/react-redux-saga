import { combineReducers } from "redux";
import { cartData } from "./reducer";  
import {productRed} from './productReducer'
export default combineReducers({cartData,productRed})