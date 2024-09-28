
import { ProductType } from "@/type";
import Container from "../ui/Container";
import { useEffect, useState } from "react";
import PriceFormate from "../ui/PriceFormate";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";

interface Props {
      cart: ProductType[];
}


const CartSummary = ({ cart }: Props) => {
      const [discount, setDisCount] = useState(0)
      const [totalAmt, setTotalAmt] = useState(0)
      const { data: session } = useSession()


      useEffect(() => {
            let amt = 0;
            let dis = 0;
            cart.map((item) => {
                  // @ts-ignore
                  amt += item?.price * item?.quantity;
                  // @ts-ignore
                  dis += ((item?.price * item?.discountPercentage) / 100) * item?.quantity
            })
            setDisCount(dis)
            setTotalAmt(amt)
      }, [cart])








      // payment
      const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      const handleCheakOut = async () => {
            const stripe = await stripePromise;
            const response = await fetch("/api/checkout", {
                  method: "POST",
                  headers: {
                        "Content-type": "application/json"
                  },
                  body: JSON.stringify({
                        item: cart,
                        email: session?.user?.email
                  })
            })
            const data = await response.json();
            console.log('data', data);

            if (response.ok) {
                  stripe?.redirectToCheckout({ sessionId: data.id });

            }
            else {
                  throw new Error("Failed to create Stripe Payment");
            }
      }



      return (
            <Container>
                  <div className="border-2 border-amazonYellow bg-yellow-100 px-4 py-2 sm:gap-6 h-48 lg:col-span-5 mt-4 lg:mt-0 text-2xl">
                        <h2 className="text-2xl font-medium text-gray-700">
                              Order summary
                        </h2>

                        <div className="mt-2">

                              <div className="flex items-center justify-between">
                                    <p className="text-base font-medium text-gray-900">Subtotal</p>
                                    <p className="text-sm font-medium text-gray-900"><PriceFormate className="" amount={discount + totalAmt} /></p>
                              </div>

                              <div className="flex items-center justify-between mt-2">
                                    <p className="text-base font-medium text-gray-900">
                                          Total Discount
                                    </p>
                                    <p className="text-sm font-medium text-gray-900"><PriceFormate className="" amount={discount} /></p>
                              </div>
                              <div className="flex items-center justify-between mt-2 mb-1">
                                    <p className="text-base font-medium text-gray-900">
                                          Payable total
                                    </p>
                                    <p className="text-sm font-medium text-gray-900"><PriceFormate className="" amount={totalAmt} /></p>
                              </div>
                              <div>
                                    <button onClick={handleCheakOut} className="w-full ">
                                          <p className="px-6 py-0.5 text-green-700 rounded-full bg-yellow-300/75 text-[16px]">
                                                Payment
                                          </p>
                                    </button>
                              </div>

                        </div>


                  </div>
            </Container>
      );
};

export default CartSummary;