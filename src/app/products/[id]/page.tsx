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
            <div>
                  <Container className="py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <ProductImage product={product} />
                        <div>
                              <h1>{product?.category}</h1>
                              <h1 className="text-3xl text-gray-700 mt-2">{product?.title}</h1>
                              <div className="mt-4">
                                    {product?.availabilityStatus && (
                                          <span className="bg-blue-50 text-blue-600 text-[14px] px-2 mt-4 py-[6px] rounded">
                                                In Stock
                                          </span>
                                    )}
                              </div>
                              <h1 className="mt-4 text-gray-800 w-[550px]">{product?.description}</h1>
                              <div className="w-52 mt-4">
                                    <AddToCartButton className="" product={product} />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default ProductsPage;