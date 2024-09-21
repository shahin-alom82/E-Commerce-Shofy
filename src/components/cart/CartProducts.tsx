import { useSelector } from "react-redux";
import Container from "../ui/Container";
import Link from "next/link";
import Button from "../ui/Button";
import CartProduct from "./CartProdut";
import CartSummary from "./CartSummary";



const CartProducts = () => {
  const { cart } = useSelector((state: any) => state.shofy);

  return (
    <div>
      <Container className="py-16">
        {cart.length ? (
          <div>
            <h1 className="text-4xl text-gray-700 font-semibold tracking-wide">
              Shopping Cart
            </h1>
            <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10">
              <div className="w-full lg:w-2/3 border-t-2 border-r-2 border-l-2 border-gray-300">
                {cart.map((product : any) => (
                  <CartProduct key={product?.id} product={product} />
                ))}
              </div>
              <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
                <CartSummary cart={cart} />
              </div>
            </div>
          </div>
        ) : (
          <div className="shadow-2xl shadow-gray-500 mx-auto py-10 px-4 lg:px-0 lg:mx-56">
            <div className="text-center lg:text-4xl  font-semibold text-gray-600">
              Nothing To Shopping
            </div>
            <p className="w-full lg:w-[580px] text-center mx-auto mt-4">
              Product cart is empty. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Consequatur, omnis explicabo voluptates optio
              consequuntur velit ab nobis quae vero perferendis!
            </p>
            <Link href={"/"}>
              <Button className="mx-auto lg:ml-[330px] ml-14 mt-4">Add to Shopping</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartProducts;
