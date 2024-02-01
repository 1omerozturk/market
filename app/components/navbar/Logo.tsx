"use client"

import commonClasses from "../TailwindClasses/Class"

const Logo = () => {
  return (
    <div className={commonClasses.button +"  px-2 text-black py-1 rounded-md text-lg md:text-2xl"}>Burada<span className="text-sm">.com</span></div>
  )
}

export default Logo