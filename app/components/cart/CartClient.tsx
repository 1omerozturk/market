"use client"


import UseCart from "@/hooks/UseCart"
import PageContainer from "../containers/PageContainer"
import Image from "next/image"
import { Toaster } from "react-hot-toast"

const CartClient = () => {

    const {cartPrdcts}=UseCart()

    console.log(cartPrdcts)

    if(!cartPrdcts || cartPrdcts.length==0){
        return <div>Sepetinizde ürün bulunmamaktadır...</div>
    }

  return (
    <div className="my-3 md:my-10 ">
        <PageContainer>

            <div className=" text-xl underline font-semibold flex items-center gap-3 text-center border-b py-3">

                <div className="w-1/5">Ürün Resmi</div>
                <div className="w-1/5">Ürün Adı</div>
                <div className="w-1/5">Ürün Miktarı</div>
                <div className="w-1/5">Ürün Sistemi</div>
                <div className="w-1/5"></div>


            </div>
    <div>
        {
            cartPrdcts.map(cart=>(
               <div className="">

               <div className="flex items-center justify-between text-center my-5" key={cart.id}>
                    <div className="w-1/5 flex items-center justify-center hover:scale-150 hover:cursor-cell">
                        <Image src={cart.image} height={120} width={120} alt=""/>
                    </div>
                    <div className="w-1/5 text-blue-600 cursor-pointer hover:bg-indigo-700 hover:text-lime-50 hover:rounded-2xl">{cart.name}</div>
                    <div className="w-1/5 text-slate-500 text-lg">{cart.quantity}</div>
                    <div className="w-1/5 text-violet-900">{cart.os}</div>
                    <div className="w-1/5">
                    <div onClick={()=>{}} className="w-1/2 border-4 mx-auto  border-red-500 rounded-xl hover:scale-90 h-[60px] py-3 font-bold font-mono text-lg cursor-pointer text-red-800 hover:bg-red-500 hover:text-lime-50">SİL</div>
                    </div>
                </div>
                    <div className="w-full border-b-4 border-orange-300 h-1 mx-8"></div>
               </div>

            ))
}
    </div>

        </PageContainer>
    </div>
  )
}

export default CartClient