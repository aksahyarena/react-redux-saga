import React from 'react'
import { addToCart } from './redux/action'
import { useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  const data = {
    name: "I Phone", 
    type: "Mobile" ,
    price:"10000",
    color:"red"
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(data))}>Add To Cart</button>
    </div>
  )
}
