
"use client"
import { navLink } from "@/constants";
import Container from "../ui/Container";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const BottomHeader = () => {
      const { data: session } = useSession();
      return (
            <div className="bg-white opacity-85">
                  <Container className="flex items-center justify-between ">
                        <div className="hidden md:block">
                              <ul className="flex items-center gap-6 mt-3 mb-1">
                                    {
                                          navLink.map((item, index) => (
                                                <Link key={index} href={item.path}>
                                                      <li className="cursor-pointer hover:text-bg-blue-800 text-gray-700 border mb-1 border-yellow-600 px-2 text-[14px] py-.5  duration-500 group relative overflow-hidden" key={index}>{item.title}
                                                            <span className="w-full h-[1.5px] bg-blue-800 inline-block absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-500"></span>
                                                      </li>
                                                </Link>

                                          ))
                                    }
                                    {session?.user && <button className="text-yellow-600 font-semibold" onClick={() => signOut()}>Sign out</button>}

                                    {!session && (
                                          <p onClick={() => signIn()} className="text-yellow-500 tracking-wide underline underline-offset-2 decoration-[1px]">
                                                please signin to access your cart!
                                          </p>
                                    )}

                              </ul>
                        </div>
                        <p><span className="text-gray-600 text-[14px]">Hotline </span ><span className="text-gray-700 lg:text-[16px] text-[14px]">: + 88 01023456789</span></p>
                        {
                              session?.user && (
                                    <p onClick={() => signOut()} className="lg:text-[16px] text-[14px] text-yellow-600 font-medium md:hidden block">Sing Out</p>
                              )
                        }
                  </Container>
            </div>
      );
};

export default BottomHeader;