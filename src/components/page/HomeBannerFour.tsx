import Container from "../ui/Container";

const HomeBannerFour = () => {
      return (
            <div className="bg-bannercyan mt-10">
                  <Container className="flex items-center justify-between py-16">
                        <div className="text-white">
                              <p className="text-xl">SALE 20% OF ALL STORE</p>
                              <h1 className="text-4xl font-semibold mt-2">Sunscribe Our NewsLetter</h1>
                        </div>
                        <div className="flex items-center">
                              <input className="py-5 w-[450px] rounded-l-md outline-none px-6" type="text" />
                              <button className="py-5 bg-black text-white px-6 rounded-r-md">Subscribe</button>
                        </div>
                  </Container>
            </div>
      );
};

export default HomeBannerFour;