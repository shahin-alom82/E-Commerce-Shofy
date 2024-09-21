import Container from "@/components/ui/Container";
import Link from "next/link";

const CancelPage = () => {
      return (
            <div>

                  <div className="py-20">
                        <Container className="max-w-screen-md">
                              <div className="bg-gray-200 text-center px-4 py-10 shadow-lg shadow-gray-300">
                                    <h1 className='lg:text-4xl text-2xl font-semibold tracking-wide text-gray-700'>Product Cancel</h1>
                                    <p className="mt-5">  This is the product description. It will be cut off after three lines, even if the content exceeds the limit. This ensures the design stays neat and consistent.
                                    </p>

                                    <Link href={"/"}>
                                          <button className="bg-blue-600 py-2 px-4 text-white text-[16px] mt-6">Go to Home</button>
                                    </Link>
                              </div>
                        </Container>
                  </div>

            </div>
      );
};

export default CancelPage;