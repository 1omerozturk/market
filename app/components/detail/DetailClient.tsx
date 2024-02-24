"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import { Button, IconButton, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AddShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import textClip from "@/utils/Textclip";
import { Html } from "next/document";

import { useEffect, useState } from "react";
import Counter from "../general/Counter";
import { PreviewData } from "next";
import ButtonB from "../general/ButtonB";
import Comment from "./Comment";
import UseCart from "@/hooks/UseCart";

const textt: string = "text-center text-xl font-bold";
const textt2: string =
  "font-sans text-blue-700 font-normal border-2 border-indigo-800 rounded-xl my-2";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  os: string;
};

// Button
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  padding: "6px 12px",
  border: "2px solid",
  borderTopRightRadius: "25%",
  borderBottomLeftRadius: "25%",
  lineHeight: 1.5,
  color: "#000",
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "white",
    backgroundColor: "#0062cc",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 5px 0 0.2rem rgba(0,123,255,.9)",
  },
});

// const router=useRouter();

const DetailClient = ({ product }: { product: any }) => {

  const {productCartQty,addToBasket,cartPrdcts}=UseCart();
  const [displayButton, setDisplayButton]=useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.Name,
    description: product.Other_specifications,
    price: product.Size,
    quantity: 0,
    image: product.coverImage,
    os: product.os,
  });

  console.log(cartPrdcts," cartPrdcts")

  useEffect(()=>{
    setDisplayButton(false)
    let controlDisplay:any=cartPrdcts?.findIndex(cart=>cart.id==product.id);
    if(controlDisplay>-1) setDisplayButton(true)
  },[cartPrdcts])



  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFunc = () => {
    if (cardProduct.quantity == 0) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  return (
    <div className="my-10 bg-slate-200 rounded-3xl shadow-2xl">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative file:h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0 mr-2 px-4">
            <Image
              src={product.coverImage}
              fill
              alt={""}
              className="object-contain hover:scale-125 mt-8"
            />
          
          </div>
          <div className="w-full md:w-1/2 bg-slate-300 rounded-3xl shadow-2xl py-2 my-2 px-4">
            <div className={textt}>
            <div>
            <div>Stok Durumu: </div>
            {product.inStock! ? (
              <div className="text-green-500">Ürün stokta mevcut</div>
              ) : (
                <div className="text-red-500">Ürün tükendi.</div>
                )}
                </div>
              <Rating name="read-only" value={Math.random() * 6} readOnly />
              <h1>
                <span className=" text-orange-700">Özellikler</span>
              </h1>
              <h2>{product?.Name}</h2>
              <div className={textt2}>{product?.Brand}</div>
              <div className={textt2}>{product?.os}</div>
              <div className={textt2}>{product?.battery_size}</div>
              <div className={textt2}>{product?.camera_pixels}</div>
              <div className={textt2}>{product?.Colors}</div>
              <div className={textt2}>
                {product?.Charging ? product.Charging : "Charging ..."}
              </div>
              <div className={textt2}>{product?.Resolution}</div>
              <div className={textt2}>{product?.Size}</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-center items-center ">
              {(Math.random() * (500 - 100) + 100).toFixed(2)}{" "}
              <span className="text-green-500">$</span>
            </div>
            {
              displayButton?
              <>
              <ButtonB
              text="Ürün Sepete ekli" outline small onClick={()=>{}}
              />
              </>
              :<>
               <Counter
              increaseFunc={increaseFunc}
              decreaseFunc={decreaseFunc}
              productCard={cardProduct}
            />
            <BootstrapButton
            onClick={()=> addToBasket(cardProduct)}
              variant="contained"
              className="hover:scale-90"
              disableRipple
              // onClick={()=>router.push("/sepeteEkle")}
            >
              Sepete Ekle
              <AddShoppingCart style={{ marginLeft: "10px" }} />
            </BootstrapButton>
              </>
            }
           
          </div>
        </div>
        <div>
          {
            product?.reviews?.map((prd:any)=>(
              <Comment key={prd._id} prd={prd}/>
              ))
          }
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
