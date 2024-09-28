import { ProductType, StateType } from "@/type";
import { NextRequest, NextResponse } from "next/server";
import { useSelector } from "react-redux";
import Stripe from "stripe";




const stripe_secret = (process.env.STRIPE_SECRET_KEY!)
export const POST = async (request: NextRequest) => {
      const stripe = new Stripe(stripe_secret);

      try {
            const reqBody = await request?.json();
            const { email, item } = await reqBody;


            const modifiedProducts = await item?.map((items: ProductType) => ({
                  quantity: items?.quantity,
                  price_data: {
                        currency: "usd",
                        unit_amount: Math.round(items.price * 100),
                        product_data: {
                              name: items.title,
                              description: items.description,
                              images: items.images
                        }
                  }
            }));
            console.log('modi', modifiedProducts);




            const session = await stripe.checkout.sessions.create({
                  payment_method_types: ["card"],
                  line_items: modifiedProducts,
                  mode: "payment",
                  success_url: `${process.env.NEXTAUTH_URL}/success`,
                  cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
                  metadata: {
                        email,
                  },
            });



            return NextResponse.json({
                  success: true,
                  message: "Server is connected",
                  id: session.id
            });
      } catch (error) {
            console.log("error", error);
      }
};