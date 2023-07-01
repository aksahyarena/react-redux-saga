// Actions are the plain js functions 
export const addToCart=(data)=>{
    console.warn("Action Called with data",data);
    return{
        type:"Add_To_Cart",
        data:data
    }
}