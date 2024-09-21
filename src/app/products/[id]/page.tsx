import AddToCartButton from "@/components/AddToCartButton";
import { getData } from "@/components/helper/Helper";
import ProductImage from "@/components/ProductImage";
import Container from "@/components/ui/Container";
import { ProductType } from "@/type";

interface Props {
      params: {
            id: string;
      };
}


// @ts-ignore
const ProductsPage = async ({ params }: Props) => {
      const { id } = params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      // @ts-ignore
      const product: ProductType = await getData(endpoint);

      return (
            <div className="py-10 lg:px-0 px-4">
                  <Container className="flex  flex-col lg:flex-row items-center justify-between gap-10 border-2  border-gray-300">
                        <ProductImage product={product} />
                        <div className="lg:px-0 w-full md:w-3/4 lg:w-2/3">
                              <h1>{product?.category}</h1>
                              <h1 className="text-3xl text-gray-700 mt-2">{product?.title}</h1>
                              <div className="mt-4">
                                    {product?.availabilityStatus && (
                                          <span className="bg-blue-50 text-blue-600 text-[14px] px-2 mt-4 py-[6px] rounded">
                                                In Stock
                                          </span>
                                    )}
                              </div>
                              <h1 className="mt-4 text-gray-800 lg:w-[550px]">{product?.description}</h1>
                              <div className="w-52 mt-4 lg:mb-0 mb-8 lg:ml-0 ml-8">
                                    <AddToCartButton className="" product={product} />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default ProductsPage;