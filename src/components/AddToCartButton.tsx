"use client"

import { addToCart, decrease, increase } from "@/constants/shofySlice";
import { ProductType } from "@/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";


interface PropstType {
      product: ProductType,
      className: string
}


const AddToCartButton = ({ product, className }: PropstType) => {

      const dispatch = useDispatch();

      const handleAddToCart = () => {
            dispatch(addToCart(product));
      };

      // increment decrement er kaj
      const [existingProduct, setExistingProduct] = useState<ProductType | null>(null)
      //@ts-ignore
      const { cart } = useSelector((state) => state.shofy)

      useEffect(() => {
            //@ts-ignore
            const avilableProduct = cart?.find((item) => item.id === product.id)
            setExistingProduct(avilableProduct)
      }, [cart, product])


      const handlePlus = () => {
            dispatch(increase(product.id))
            toast.success("Quantity increased successfully!")
      }
      const handleMinus = () => {
            // @ts-ignore
            if (existingProduct.quantity! > 1) {
                  dispatch(decrease(product.id))
                  toast.success("Quantity decrease successfully!")
            }
      }
      return (
            <div>
                  {
                        existingProduct ?
                              <div className={twMerge("mt-4 flex items-center gap-8", className)}>
                                    <span onClick={handleMinus} className="p-2 px-2 bg-slate-200 rounded-full cursor-pointer text-gray-800 hover:bg-green-300 hover:text-black duration-300">
                                          <HiMinusSmall />
                                    </span>
                                    <span>{existingProduct?.quantity}</span>
                                    <span onClick={handlePlus} className="p-2 px-2 bg-slate-200 rounded-full cursor-pointer text-gray-800 hover:bg-green-300 hover:text-black duration-300">
                                          <HiOutlinePlusSmall />
                                    </span>
                              </div>
                              :
                              <button onClick={handleAddToCart} className="w-full lg:h-10 mt-4 h-5 hover:bg-themeColor cursor-pointer duration-300 border border-themeColor hover:text-white rounded-full lg:text-[16px] text-[12px]">Add To Cart</button>
                  }
            </div>
      );
};

export default AddToCartButton;