"use client"
import textClip from "@/utils/Textclip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const router=useRouter()
  return (
      <div onClick={()=>router.push(`product/${product.id}`)} className="flex flex-col flex-1 gap-3 shadow-lg p-2  cursor-pointer rounded-md hover:scale-110">
        <div className="relative h-[200px] w-[200px] ">
          <Image
            src={product.coverImage}
            fill
            alt={""}
            className="object-contain"
            title={product.Name}
          >

          </Image>
        </div>
        <div className="text-center mt-2 space-y-1">
        <Rating  name="read-only" value={Math.random()*6} readOnly />
          <div className="text-center font-bold text-xl mt-2">
            {textClip(product.Name)}
            </div>
        </div>
      </div>
  );
};

export default ProductCard;
