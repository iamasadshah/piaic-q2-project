import React from "react";
import { getData, IProduct } from "@/lib/getData";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Page = async (): Promise<JSX.Element> => {
  const data = await getData();

  const filteredData = data.filter(
    (product: IProduct) => product.category.name === "Kids"
  );

  return (
    <div>
      {filteredData.map((product: IProduct, index: number) => (
        <div key={index} className="product">
          <Card className="card">
            <Image
              src={product.urlImage}
              alt={product.title}
              width={100}
              height={100}
              className="product-image"
            />
            <h1 className="product-title">{product.title}</h1>
            <p className="product-category">{product.category.name}</p>
            <p className="product-type">{product.type}</p>
            <p className="product-price">$ {product.price}</p>
            <Button variant={"myButton"}>Get Info</Button>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Page;

// Optional metadata export
export const metadata = {
  title: "Male Products",
  description: "Browse male category products.",
};
