import { PRODUCT_LIST } from "./constants"

export const productList=()=>{
    console.log("Product Action Called")
    return {
        type:PRODUCT_LIST
    }
}