"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { json } from "stream/consumers";

interface CardContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
}

const CartContext = createContext<CardContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

useEffect(()=>{
  let getItem:any=localStorage.getItem('cart')
  let getItemParse:CardProductProps[] | null = JSON.parse(getItem);
  setCartPrdcts(getItemParse)

}
,[]
)
  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts(prev => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }

        localStorage.setItem("cart",  JSON.stringify(updatedCart));

        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  let value: CardContextProps = {
    productCartQty,
    cartPrdcts,
    addToBasket,
  };

  return (
    <CartContext.Provider value={value} {...props} />
  );
};

const UseCart = () => {
  const context = useContext(CartContext);

  if (context == null) {
    throw new Error("Bir hata oluştu.");
  }
  return context;
};

export default UseCart;
