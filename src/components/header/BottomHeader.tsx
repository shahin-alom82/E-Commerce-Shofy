
"use client"
import { navLink } from "@/constants";
import Container from "../ui/Container";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const BottomHeader = () => {
      const { data: session } = useSession();

      return (
            <div>
                  <Container className="flex items-center justify-between mt-2">
                        <ul className="flex items-center gap-6">
                              {
                                    navLink.map((item, index) => (
                                          <Link key={index} href={item.path}>
                                                <li className="cursor-pointer hover:text-themeColor  duration-500 group relative overflow-hidden" key={index}>{item.title}
                                                      <span className="w-full h-[1px] bg-themeColor inline-block absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-500"></span>
                                                </li>

                                          </Link>

                                    ))
                              }
                              {session?.user && <button onClick={() => signOut()}>Sign out</button>}
                        </ul>
                        <p><span className="text-gray-600">Hotline </span>: + 88 01023456789</p>
                  </Container>
            </div>
      );
};

export default BottomHeader;