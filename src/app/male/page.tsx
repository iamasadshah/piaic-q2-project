import React from "react";
import { getData, IProduct } from "@/lib/getData";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const Page = async (): Promise<JSX.Element> => {
  const data = await getData();

  const filteredData = data.filter(
    (product: IProduct) => product.category.name === "Male"
  );

  return (
    <div>
      <>
        <h1 className="text-center text-lg">Male</h1>
        <div className="container">
          {" "}
          {/* Add grid and gap here */}
          {filteredData.map((product: IProduct, index: number) => (
            <Card key={index} className="p-4 card">
              <Image
                src={product.urlImage}
                alt={product.title}
                width={200}
                height={200}
                className="object-cover"
              />
              <h1 className="product-title">{product.title}</h1>
              <p className="product-category">{product.category.name}</p>
              <p className="product-type">{product.type}</p>
              <p className="product-price">$ {product.price}</p>
              <button className="product-button">Get Info</button>
            </Card>
          ))}
        </div>
      </>
    </div>
  );
};

export default Page;

// Optional metadata export
export const metadata = {
  title: "Kids Products",
  description: "Browse kids category products.",
};
