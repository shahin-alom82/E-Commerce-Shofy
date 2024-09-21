import Container from "../ui/Container";

const HomeBannerFour = () => {
      return (
            <div className="bg-bannercyan mt-10">
                  <Container className="flex flex-col lg:flex-row items-center justify-between lg:py-16 py-4">
                        <div className="text-white">
                              <p className="text-xl">SALE 20% OF ALL STORE</p>
                              <h1 className="lg:text-4xl text-2xl font-semibold mt-2">Sunscribe Our NewsLetter</h1>
                        </div>
                        <div className="flex items-center lg:mt-0 mt-5">
                              <input className="lg:py-[18px] py-1 lg:w-[450px] w-[200px] rounded-l-md outline-none px-6" type="text" />
                              <button className="lg:py-4 p-[6px] bg-black text-white px-6 lg:text-xl text-sm rounded-r-md">Subscribe</button>
                        </div>
                  </Container>
            </div>
      );
};

export default HomeBannerFour;