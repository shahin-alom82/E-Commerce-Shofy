
"use client"
import { ProductType } from "@/type";
import Container from "./Container";
import ProductCart from "./ProductCart";
import { getData } from "../helper/Helper";


interface Props {
      productsData: {
            products: ProductType[];
      };
}



const ProductList = async () => {

      const endpoint = "https://dummyjson.com/products";
      const productCart = await getData(endpoint);

      return (
            <div>
                  <Container>
                        <h1 className="text-2xl font-semibold mt-10">Trending Products</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                              {
                                    productCart.products.map((item: ProductType) => (
                                          <ProductCart key={item?.id} product={item} />
                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};


export default ProductList;




