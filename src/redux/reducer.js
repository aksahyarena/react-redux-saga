import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_FROM_TO_CART } from "./constants";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("Reducer : Add To Cart Action called", action);
            return [action.data, ...data];
        case REMOVE_FROM_TO_CART:
            console.log(action.data)
            // data.length = data.length ? data.length - 1 : []
            const remainingItem=data.filter((item)=>{
                return item.id!=action.data.id
            })
            return [...remainingItem];
        case EMPTY_TO_CART:
            return data = []
            RETURN
        default:
            return data
    }
}