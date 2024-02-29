"use client";
import textClip from "@/utils/Textclip";
import { Rating } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "../general/Loading";
import { Suspense } from "react";
import ReactLoading from "react-loading";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();

  // <Loading type={"balls"} color={"#fffff"} height={'20%'} width={'20%'} />

  return (
    <div
      onClick={() => router.push(`product/${product.id}`)}
      className="flex flex-col flex-1 gap-3 shadow-lg p-2  cursor-pointer rounded-md hover:scale-110"
    >
      <div className="relative h-[200px] w-[200px] mx-auto">
        <Suspense
          fallback={
            <ReactLoading
              type={"balls"}
              color={"#000"}
              height={667}
              width={375}
            />
          }
        >
          <Image
          loading="lazy"
            src={product.coverImage ||<Skeleton count={10} />}
            fill
            alt={product.Name || <Skeleton count={10} />}
            className="object-contain"
            title={product.Name || <Skeleton count={10} />}
          ></Image>
        </Suspense>
      </div>

      <div className="text-center mt-2 space-y-1">
        <Rating name="read-only" value={Math.random() * 6} readOnly />
        <div className="text-center font-bold text-xl mt-2">
          {textClip(product.Name)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
