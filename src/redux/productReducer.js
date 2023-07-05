import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constants"

export const productRed = (data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.log("Product list reducer called",action.data)
            return [...action.data]
        default:
            return data
    }
}