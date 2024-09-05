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
                  <Container className="py-10">
                        {
                              cart.length ?
                                    <div>
                                          <h1 className="text-4xl text-gray-700 font-semibold tracking-wide">Shopping Cart</h1>
                                          <div className="flex justify-between gap-6 mt-10">
                                                <div className="w-2/3 border-t-2 border-r-2 border-l-2 border-gray-300 lg:col-span-7">
                                                      {
                                                            // @ts-ignore
                                                            cart.map((product) => (
                                                                  // @ts-ignore
                                                                  <CartProduct key={product?.id} product={product} />
                                                            ))
                                                      }
                                                </div>
                                                <div className="w-1/3">
                                                      <CartSummary />
                                                </div>
                                          </div>
                                    </div>
                                    :
                                    <div className="shadow-2xl shadow-green-500 mx-56 py-10">
                                          <div className="text-center items-center justify-center text-4xl font-semibold text-gray-600">Nothing To Shopping</div>
                                          <p className="w-[580px] items-center justify-center text-center mx-auto mt-4">Product cart is empty Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, omnis explicabo voluptates optio consequuntur velit ab nobis quae vero perferendis!</p>
                                          <Link href={"/"}>
                                                <Button className="lg:ml-[330px] mt-4">Add to Shopping</Button>
                                          </Link>
                                    </div>
                        }
                  </Container>
            </div>
      );
};

export default CartProducts;