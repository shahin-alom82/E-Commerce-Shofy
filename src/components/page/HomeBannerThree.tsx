import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../ui/Container";
import Image from "next/image";
import { bannerThreeSlider1, sliderimageOffer } from "@/assets";

const HomeBannerThree = () => {
      return (
            <div className="mt-10">
                  <Container className="bg-bannercyan rounded-md flex justify-between">
                        <div className="mt-24 px-20 text-white">
                              <h1>TEBLET COLLECTION 2024</h1>
                              <div className="lg:text-5xl text-3xl font-semibold mt-2">
                                    <p>Samsug Galaxy Tab</p>
                                    <p className="mt-3">S6, Wifi Tablet</p>
                              </div>
                              <h1 className="text-2xl mt-4 font-semibold">$975.00</h1>
                              <button className="flex items-center gap-2 mt-6 bg-black py-3 px-4 rounded hover:bg-lightBg hover:text-black duration-300">
                                    Shop Now
                                    <FaArrowRightLong />
                              </button>
                        </div>
                        <div className="py-10 px-16 relative">
                              <Image src={bannerThreeSlider1} alt="Banner-Image-Three"></Image>
                              <Image className="absolute top-10" src={sliderimageOffer} alt="sliderimageOffer"></Image>
                        </div>
                  </Container>
            </div>
      );
};

export default HomeBannerThree;