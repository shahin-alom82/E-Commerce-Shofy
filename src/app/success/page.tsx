"use client"
import Container from "@/components/ui/Container";
import { resetOrder } from "@/constants/shofySlice";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
      

      const serchParams = useSearchParams();
      console.log("serch", serchParams);
      const sessionId = serchParams.get("session_id");
      const dispatch = useDispatch();

      !sessionId && redirect("/");

      useEffect(() => {
            if (sessionId) {
                  dispatch(resetOrder());
                  toast.success("Payment Received Successfully!");
            }
      }, [sessionId, dispatch]);

      return (
            <div className="py-10">
                  <Container className="max-w-screen-md mx-auto">
                        <div className=" bg-gray-100">
                              <div className="bg-white shadow-lg p-8 rounded-lg text-center">
                                    <h1 className="text-4xl font-semibold text-green-500 mb-4">
                                          Payment Successful!
                                    </h1>
                                    <p className="text-lg text-gray-700 mb-6">
                                          Thank you for your purchase. Your order is being processed.
                                    </p>

                                    <div className="space-x-4">
                                          <Link href={"/cart"}>
                                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">
                                                      View Cart
                                                </button>
                                          </Link>

                                          <Link
                                                href="/"
                                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out"
                                          >
                                                Continue Shopping
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default SuccessPage;