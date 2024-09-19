import { ProductType } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
      try {
            const reqBody = await request?.json();
            const { email, item } = reqBody;

            const modifiedProducts = item?.map((item: ProductType) => { });
            // Stripe checkout instance

            return NextResponse.json({
                  success: true,
                  message: "Server is connected",
                  email: email,
            });
      } catch (error) {
            console.log("error", error);
      }
};