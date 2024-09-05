import Image from "next/image";
import Container from "../ui/Container";
import { productBanner1, productBanner2 } from "@/assets";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeBannerTwo = () => {
      return (
            <div className="mt-10">
                  <Container className="flex items-center justify-between">
                        <div className="relative">
                              <Image className="rounded-md" src={productBanner1} alt="Banner-Two"></Image>
                              <div className="absolute top-14 left-14">
                                    <p>Sale 20% off all store</p>
                                    <div className="text-2xl font-semibold mt-4 text-gray-800">
                                          <p>BLU G91 Pro 2022</p>
                                          <p>Smartphone</p>
                                    </div>
                                    <button className="mt-6 flex items-center gap-2 hover:text-btnBg/80 duration-500">
                                          Shop Now
                                          <FaArrowRightLong size={15} />
                                    </button>
                              </div>
                        </div>

                        <div className="relative">
                              <Image className="rounded-md" src={productBanner2} alt="Banner-Two"></Image>
                              <div className="absolute top-14 left-8">
                                    <div className="text-xl font-semibold text-gray-800">
                                          <p>HyperX Cloud II</p>
                                          <p>Wireless </p>
                                    </div>
                                    <p className="mt-3 font-semibold text-gray-800">Sale 35% off</p>
                                    <button className="mt-6 flex items-center gap-2">
                                          Shop Now
                                          <FaArrowRightLong size={15} />
                                    </button>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default HomeBannerTwo;