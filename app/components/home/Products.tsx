import { products } from "@/utils/Products"
import ProductCard from "./ProductCard"
import Skeleton from "react-loading-skeleton";

const Products = () => {
  return (
    <div className="w-full mt-20 my-4 mx-4">
        <div className="flex items-center flex-wrap gap-3 md:gap-10">
        {/* <div className="w-full grid grid-cols-3 gap-8 mt-10 lg:grid-cols-6 lg:gap-12 sm:grid-cols-3 sm:gap-16 "> */}
          {
          products.map(product => (
            
            <ProductCard key={product.id} product={product} />
            
            )
          ) || <Skeleton />
          }
        </div>
    </div>
  )
        }
  
export default Products;