"use client"

import { render } from "react-dom"
import commonClasses from "../TailwindClasses/Class"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={"/"} className={commonClasses.button +"  px-2 text-black py-1 rounded-md text-lg md:text-2xl"}>
      
      Nerde<span className="text-sm text-blue-500">.</span><span className="text-sm text-slate-800">com</span>

      </Link>
  )
}

export default Logo