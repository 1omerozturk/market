"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps{
id:string
placeholder:string
disabled?:boolean
type:string
required?:boolean
register:UseFormRegister<FieldValues>
errors:FieldErrors
}

const Input:React.FC<InputProps>=({
id,placeholder,disabled,type,required=true, register, errors
})=> {
    return(
       <input className={`w-full h-12 p-3 rounded-lg outline-none my-3 border-2 border-zinc-900 ${errors[id] ? "border-2 border-red-500" : "border-2 border-sky-500"}`} id={id} disabled={disabled} type={type} placeholder={placeholder} {...register(id,{required})} />
    )
}

export default Input