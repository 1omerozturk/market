import DetailClient from "@/app/components/detail/DetailClient"
import { products } from "@/utils/Products"
import { log } from "console"
import React from "react"

type DetailProps={
    productId?:number|string
}
const Detail= ({params}:{params:DetailProps} ) => {
   const {productId}=params;
    const product=products.find(product=> product.id==productId)
  return (
    <div>
        <DetailClient product={product} />
    </div>
  )
}

export default Detail