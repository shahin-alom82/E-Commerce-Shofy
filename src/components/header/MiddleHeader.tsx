
"use client";
import Image from "next/image";
import Container from "../ui/Container";
import { logo } from "@/assets";
import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addToUser, removeUser } from "@/constants/shofySlice";
import { ProductType } from "@/type";
import { CiUser } from "react-icons/ci";

interface StateType {
      shofy: {
            cart: ProductType[];
            userInfo: any;
      };
}



const MiddleHeader = () => {
      const [searchValue, setSearchValue] = useState("");
      const { data: session } = useSession()

      const dispatch = useDispatch()
      // Add To Cart
      const { cart } = useSelector((state: StateType) => state.shofy);
      // User 
      useEffect(() => {
            if (session) {
                  dispatch(addToUser(session.user))
            }
            else {
                  dispatch(removeUser())
            }
      }, [session?.user])


      return (
            <div className="border border-gray-400 pb-4">
                  <Container className="flex justify-between items-center mt-4 ">
                        <Link href="/">
                              <Image src={logo} alt="Logo" width={120} height={60} />
                        </Link>
                        <div className="flex relative">
                              <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search Products Here..."
                                    className="py-2 px-6 border-2 border-gray-400 relative w-[600px] outline-none hover:border-2 hover:border-themeColor pr-10 focus-visible:border-themeColor"
                                    aria-label="Search Products"
                              />
                              <button className="py-3 px-4 bg-themeColor border-2 border-themeColor text-white" aria-label="Search Button">
                                    <FaSearch size={20} />
                              </button>

                              {searchValue && (
                                    <RxCross2
                                          size={20}
                                          onClick={() => setSearchValue("")}
                                          className="absolute right-[68px] text-gray-500 cursor-pointer hover:text-red-500 duration-500 top-[12px]"
                                          aria-label="Clear Search"
                                    />
                              )}
                        </div>
                        <div className="flex items-center gap-10">
                              {/* user */}
                              {
                                    session?.user ? (
                                          <Link href={"/profile"}>
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                      <div className="border border-gray-400 py-[2px] px-[2px] rounded-full">
                                                            <Image className="h-10 w-10 rounded-full" src={session?.user?.image!} alt="userImage" height={200} width={200}></Image>
                                                      </div>


                                                      <div>
                                                            <p>Hello, <span>{session?.user?.name}</span></p>
                                                            <h1 className="text-[14px] font-medium"> View profile</h1>
                                                      </div>

                                                </div>
                                          </Link>
                                    )
                                          :
                                          <div onClick={() => signIn()} className="flex items-center gap-4 cursor-pointer">
                                                <div className="border border-gray-500 py-2 px-2 text-gray-500 rounded-full">
                                                      {/* <FaRegUser size={25} /> */}
                                                      <CiUser size={25} />

                                                </div>
                                                <div>
                                                      <p>Hello, Guest</p>
                                                      <p className="font-semibold">Login / Register</p>
                                                </div>
                                          </div>
                              }

                              <div className="flex items-center gap-6">
                                    <Link href="/favorite" className="relative">
                                          <GrFavorite className="text-gray-600" size={30} />
                                          <span className="absolute -top-3 -right-2 bg-themeColor px-[6px] py-[2px] text-white text-xs rounded-full">0</span>
                                    </Link>
                                    <Link href="/cart" className="relative">
                                          <FiShoppingBag className="text-gray-600" size={30} />
                                          <span className="absolute -top-3 -right-2 bg-themeColor px-[6px] py-[2px] text-white text-xs rounded-full">
                                                {cart?.length > 0 ? cart.length : "0"}
                                          </span>
                                    </Link>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default MiddleHeader;

