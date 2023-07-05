import React from 'react'
import "../App.css";
import { useSelector } from 'react-redux'; 
export default function Header() {
    const result=useSelector((state)=>{
        return state.cartData
    })
    console.log(result)
    return (
        <>
            <div className='header'>
                    <div className='cart-img pos-rel'>
                        <img className='' src="../shopping-cart.png" />
                        <span className='item-length'>{result.length}</span>
                    </div>

            </div>
        </>
    )
}
