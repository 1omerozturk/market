"use client"

import Link from "next/link";
import commonClasses from "../TailwindClasses/Class"
import { useRouter } from "next/navigation"



const User = () => {

const router=useRouter();

  return (
    <div onClick={()=>router.push("/login")} 
    className={commonClasses.button + " hidden md:flex cursor-pointer after:hidden"}>

      Giriş Yap
      </div>
  )
}

export default User