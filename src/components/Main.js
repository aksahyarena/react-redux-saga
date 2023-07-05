import React, { useEffect } from 'react'
import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction'
export default function Main() {

   
    const dispatch = useDispatch()
    const data = {
        name: "I Phone",
        type: "Mobile",
        price: "10000",
        color: "red"
    }
    let result = useSelector((state) => {
        return state.productRed
    })
    console.log(result)

    useEffect(()=>{
        dispatch(productList())
    },[])
    return (
        <>
            <div className='text-center'>
              
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
                <button onClick={() => dispatch(productList())}>Product List</button>

                <div className='product-list'>
                    {result.map((item) => {
                        return (
                            <div className='product-area'>
                                <img src={item.image} alt="" />
                                <p>{item.title}</p>
                                {/* <p>{item.description}</p> */}
                                <p>{item.category}</p>
                                <p>{item.price}</p>
                                <p>{item.rating.rate}</p>
                                <p>{item.rating.count}</p>

                                <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                <button onClick={() => dispatch(removeFromCart(item))}>Remove From Cart</button>

                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
