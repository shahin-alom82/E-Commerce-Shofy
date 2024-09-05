"use client"
import { ProductType } from "@/type";
import Image from "next/image";
import { useState } from "react";
import Container from "./ui/Container";

const ProductImage = ({ product }: { product: ProductType }) => {
      const [imageClick, setImageClick] = useState(product?.images[0])
      return (
            <Container>
                  <div className="flex items-center justify-between gap-6">
                        <div className="flex flex-col lg:mr-28">
                              {product?.images?.map((item, index) => (
                                    <button
                                          key={index}
                                          onClick={() => setImageClick(item)}
                                          className={`border mb-2 rounded h-28 w-24 ${item === imageClick && "border-sky-600"
                                                }`}>
                                          <div className="border rounded border-gray-400 h-28 w-24">
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
                        <div>
                              <Image className="h-80 w-72" src={imageClick} alt="img" height={200} width={200} />
                        </div>
                  </div>
            </Container>
      );
};

export default ProductImage;