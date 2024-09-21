import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
import { ImCheckmark } from "react-icons/im";
import AddToCartButton from "../AddToCartButton";
import { IoClose } from "react-icons/io5";
import PriceFormate from "../ui/PriceFormate";
import { useDispatch } from "react-redux";
import { cartDelete } from "@/constants/shofySlice";
import toast from "react-hot-toast";
import { ProductType } from "@/type";


interface Props {
      product: ProductType;
}


const CartProduct = ({ product }: Props) => {

      const dispatch = useDispatch()
      const handleDelete = () => {
            dispatch(cartDelete(product?.id))
            toast.success(`${product?.title.substring(0, 10)} deleted successfully!`)
      }
      return (
            <Container className="flex flex-col lg:flex-row gap-4 border-b-2 border-gray-300 relative">
                  <div className="">
                        <Link className="flex items-center justify-center text-center" href={{ pathname: `/products/${product.id}`, query: { id: product.id } }}>
                              <Image className="h-48 w-48 lg:border-r-2  border-gray-300 cursor-pointer" src={product?.images[0]} alt="cartImage" height={200} width={200} />
                        </Link>
                  </div>
                  <div>
                        <div>
                              <h1 className="mt-2 text-xl text-gray-700 ">{product?.title}</h1>
                              {/* <h1 className="text-gray-700 mt-1 text-sm">Brand : {product?.brand}</h1> */}
                              <h1 className="text-gray-700 mt-1 text-sm">Category : {product?.category}</h1>
                        </div>
                        <div className="flex gap-6 items-center text-start">
                              <PriceFormate className="mt-4" amount={product?.price * product?.quantity!} />
                              <AddToCartButton product={product} className="gap-4" />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-2 mt-2 text-sm">
                              <h1 className="flex lg:items-center gap-2"> <ImCheckmark size={10} className="text-green-500" /> {product?.availabilityStatus && (<p>In Stock</p>)}</h1>
                              <h1 className="flex lg:items-center gap-2"> You are saving <PriceFormate className="text-green-500 text-[14px]" amount={product?.price * (product?.discountPercentage / 100) * product?.quantity!} /> upon purchase</h1>
                        </div>
                  </div>
                  <button onClick={handleDelete}>
                        <IoClose size={20} className="absolute right-4 top-4 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                  </button>
            </Container >
      );
};

export default CartProduct;