import { ProductType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import AddToCartButton from "../AddToCartButton";
import PriceFormate from "./PriceFormate";

interface Props {
      product: ProductType;
}


export const Sidbar = () => {
      return (
            <div className="flex flex-col gap-1 absolute right-3 mt-6 overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300">
                  <button className="relative text-gray-800 hover:bg-themeColor hover:text-white duration-300 border-2 border-gray-200 p-2 px-2">
                        {/* <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 bg-black text-white text-sm rounded-md p-1 duration-300 whitespace-nowrap">
                Add to Cart
              </span> */}
                        <BsCartCheck size={25} />
                  </button>
                  <button className="text-gray-800 hover:bg-themeColor hover:text-white duration-300 border-2 border-gray-200 p-2 px-2">
                        <FiEye size={25} />
                  </button>
                  <button className="text-gray-800 hover:bg-themeColor hover:text-white duration-300 border-2 border-gray-200 p-2 px-2">
                        <GrFavorite size={25} />
                  </button>
            </div>

      )
}

const ProductCart = ({ product }: Props) => {
      return (
            <div className="border-2 overflow-hidden relative border-gray-200  hover:shadow-black/20 flex flex-col justify-between group hover:shadow-sm">
                  {/* Image Section */}
                  <div className="flex items-center justify-center border-b-2 border-gray-200 py-8">
                        <Link
                              href={{ pathname: `/products/${product.id}`, query: { id: product.id } }}
                        >
                              <Image className="lg:h-48 lg:w-44 h-24 w-28 object-contain group-hover:scale-110 duration-300" src={product?.images[0]} width={500} height={500} alt="Product-Image" />
                              {product?.rating && (
                                    <p className="absolute lg:top-4 lg:right-4 top-2 right-2  bg-orange-400 text-white lg:text-xs text-[10px] font-medium flex products-center lg:py-1 lg:px-2 gap-1 py-0.5 px-1">
                                          {product?.rating} <FaStar />
                                    </p>
                              )}
                        </Link>
                        {/* Hover SideBar */}
                        <Sidbar />

                  </div>
                  {/* Text Bar */}
                  <div className="px-4 lg:py-5 py-3">
                        <h1 className="font-medium text-gray-800">{product.category}</h1>
                        <h1 className="text-[20px] text-sm mt-1 font-medium">{product.title}</h1>
                        <h1 className="mt-2 text-themeColor"><PriceFormate className="" amount={product.price} /></h1>
                        {/* add Button */}
                        <AddToCartButton className="lg:text-[16px] text-[12px]" product={product} />
                  </div>
            </div>
      );
};

export default ProductCart;