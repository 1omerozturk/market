import React from "react"
import { CardProductProps } from "../detail/DetailClient"
import { Button } from "@mui/material"

interface CounterProps{
    productCard:CardProductProps,
    increaseFunc:()=>void,
    decreaseFunc:()=>void,
}
const Counter:React.FC<CounterProps> = ({productCard,increaseFunc,decreaseFunc}) => {
  return (
    <div  className="flex justify-center gap-2 my-3 mx-4 w-full">

    <Button className="cursor-pointer rounded-lg hover:bg-red-400 hover:scale-95 bg-red-700 text-black font-extrabold text-2xl"onClick={decreaseFunc}>-</Button>
    <div className="font-extrabold text-lg select-none">{productCard?.quantity}</div>
    <Button className="cursor-pointer hover:bg-indigo-400 hover:scale-95 bg-indigo-700 rounded-lg text-black font-extrabold text-xl"onClick={increaseFunc}>+</Button>
    </div>
  )
}

export default Counter