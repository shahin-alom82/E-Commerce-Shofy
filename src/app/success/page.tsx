import Container from "@/components/ui/Container";
import Link from "next/link";

const SuccessPage = () => {
      return (
            <div className="py-20">
                  <Container className="max-w-screen-md">
                        <div className="bg-gray-200 text-center px-4 py-10 shadow-lg shadow-gray-300">
                              <h1 className='lg:text-4xl text-2xl font-semibold tracking-wide text-gray-700'>Payment Successfully!</h1>
                              <p className="mt-5">Payment success refers to the successful completion of a transaction where the payment  <br />  is processed and verified. The user receives a confirmation, and the   <br />  purchased goods or  services are approved for delivery. Both the   <br />  buyer and seller are notified of the successful transaction.</p>

                              <Link href={"/"}>
                                    <button className="bg-blue-600 py-2 px-4 text-white text-[16px] mt-6">Go to Home</button>
                              </Link>
                        </div>
                  </Container>
            </div>
      );
};

export default SuccessPage;