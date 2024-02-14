import { products } from "@/utils/Products"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"


const Products = () => {
  return (
    <div className="w-full">
        <Heading text="Tüm Ürünler"/>
        <div className="flex items-center flex-wrap gap-3 md:gap-10">
        {/* <div className="w-full grid grid-cols-3 gap-8 mt-10 lg:grid-cols-6 lg:gap-12 sm:grid-cols-3 sm:gap-16 "> */}
          {
          products.map(product => (

            <ProductCard key={product.id} product={product} />
         
            
            )
          )
          }
        </div>
    </div>
  )
}

export default Products