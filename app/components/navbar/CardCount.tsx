"use client"
import UseCart from "@/hooks/UseCart"
import { MdShoppingBasket, MdShoppingBag} from "react-icons/md"
import commonClasses from "../TailwindClasses/Class"
import Link from "next/link"


export const CardCount = () => {
  const {cartPrdcts}=UseCart()
  return (
    <Link href={"/cart"}>
    <div className={commonClasses.button+ " hidden md:flex relative"}>
      
      <div>
    <MdShoppingBag size={25} />

    <div className="absolute -top-2 -right-2 text-xs bg-indigo-900 w-5 h-5 flex items-center justify-center rounded-full ">
      {cartPrdcts?.length}
    </div>
      </div>

      </div>
    </Link>
  )
}
