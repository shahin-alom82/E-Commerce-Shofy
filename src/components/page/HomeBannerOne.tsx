
import Image from "next/image";
import Container from "../ui/Container";
import { bannerOneimage } from "@/assets";
import { FaArrowRightLong } from "react-icons/fa6";



// const getData = async () => {
//       const response = await fetch(`http://localhost:3000/api/product`, {
//             cache: "no-cache",
//             method: "GET",
//             headers: {
//                   "Content-Type": "application/json"
//             }
//       })
//       return response.json();
// }

// Starting at $ 270.00
// The best tablet
// Collection 2024
// Exclusive offer-30% off this week
const HomeBannerOne =  () => {
      // const { banner } = await getData()
      return (
            <div className="bg-bannerOneColor mt-2">
                  <Container className="flex flex-col lg:flex-row justify-between py-20">
                        <div className="text-lightBg mt-10">
                              <p>Starting at $ 270.00</p>
                              <h1 className="lg:text-6xl text-3xl font-bold mt-3">The best tablet</h1>
                              <h1 className="lg:text-6xl text-3xl font-bold mt-3  pb-7">Collection 2024</h1>
                              <i className="text-xl">Exclusive offer<span className="text-yellow-600">-30%</span>off this week</i>
                              <button className="flex items-center animate-bounce bg-lightBg text-gray-800 py-3 px-4 mt-6 gap-2 cursor-pointer hover:bg-bannerOneColor hover:border hover:text-lightBg text-sm font-semibold rounded">
                                    Shop Now
                                    <FaArrowRightLong />
                              </button>
                        </div>
                        <Image className="lg:mt-0 mt-10" src={bannerOneimage} alt="Banner-img"></Image>
                  </Container>
            </div>
      );
};

export default HomeBannerOne;