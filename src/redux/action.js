// Actions are the plain js functions 
import { ADD_TO_CART,EMPTY_TO_CART,REMOVE_FROM_TO_CART } from "./constants"
export const addToCart=(data)=>{
    console.warn("Action Called with data",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
   
}
export const removeFromCart=(data)=>{
    console.warn("Remove Action Called with data",data);
    return{
        type:REMOVE_FROM_TO_CART,
        data:data
    }
   
}
export const emptyCart=()=>{
    console.warn("Action Called with data");
    return{
        type:EMPTY_TO_CART
    }
   
}