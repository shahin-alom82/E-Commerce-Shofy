"use client"
import { ProductType } from "@/type";
import Image from "next/image";
import { useState } from "react";
import Container from "./ui/Container";

const ProductImage = ({ product }: { product: ProductType }) => {
      const [imageClick, setImageClick] = useState(product?.images[0])
      return (
            <Container>
                  <div className="flex items-center justify-between gap-6 ">
                        <div className="flex flex-col lg:ml-10 mt-8 mb-6 ">
                              {product?.images?.map((item, index) => (
                                    <button
                                          key={index}
                                          onClick={() => setImageClick(item)}
                                          className={`border mb-2 rounded lg:h-28 lg:w-24  ${item === imageClick && "border-sky-600"
                                                }`}>
                                          <div className="border rounded border-gray-400 lg:h-28 lg:w-24 h-16 w-14">
                                                <Image
                                                      src={item}
                                                      alt="product-image"
                                                      width={200}
                                                      height={200}
                                                      className="w-full h-full object-contain"
                                                />
                                          </div>
                                    </button>
                              ))}
                        </div>
                        <div className="">
                              <Image className="lg:h-80 lg:w-72 w-40  h-48" src={imageClick} alt="img" height={200} width={200} />
                        </div>
                  </div>
            </Container>
      );
};

export default ProductImage;