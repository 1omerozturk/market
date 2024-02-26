"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { json } from "stream/consumers";

interface CardContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  removeFromCart:(product:CardProductProps)=>void;
  addToBasketIncrease :(product:CardProductProps)=>void;
  addToBasketDecrease :(product:CardProductProps)=>void;
  removeCart:()=>void;
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




const removeCart=useCallback(()=>{
  setCartPrdcts(null)
  toast.success("Sepetiniz Temizlendi.")
  localStorage.setItem('cart',JSON.stringify([null]))
},[])







  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts(prev => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success("Ürün sepete eklendi.")
        localStorage.setItem("cart",  JSON.stringify(updatedCart));

        return updatedCart;
      });
    },
    [cartPrdcts]
  );
const removeFromCart=useCallback((product:CardProductProps)=>{
  if(cartPrdcts){
    
const filteredProducts=cartPrdcts?.filter(cart=>cart.id !== product.id)
setCartPrdcts(filteredProducts);
toast.error("Ürün sepetten silinde")
localStorage.setItem("cart",JSON.stringify(filteredProducts))
  }
},[cartPrdcts])


const addToBasketIncrease = useCallback((product: CardProductProps) => {
  let updatedCart;
  if (product.quantity === 10) {
      toast.error("Daha fazla ekleyemezsiniz.");
      return;
  }
  
  if (cartPrdcts) {
      updatedCart = [...cartPrdcts];
      const existingItemIndex = cartPrdcts.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
          updatedCart[existingItemIndex].quantity = updatedCart[existingItemIndex].quantity + 1;
      }
      
      setCartPrdcts(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
}, [cartPrdcts, setCartPrdcts]);

const addToBasketDecrease = useCallback((product: CardProductProps) => {
  let updatedCart;
  if (product.quantity === 1) {
      toast.error("Daha fazla Çıkaramaszınz.");
      return;
  }
  
  if (cartPrdcts) {
      updatedCart = [...cartPrdcts];
      const existingItemIndex = cartPrdcts.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
          updatedCart[existingItemIndex].quantity = updatedCart[existingItemIndex].quantity - 1;
      }
      
      setCartPrdcts(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
}, [cartPrdcts, setCartPrdcts]);

  let value: CardContextProps = {
    productCartQty,
    cartPrdcts,
    removeFromCart,
    addToBasket,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
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
