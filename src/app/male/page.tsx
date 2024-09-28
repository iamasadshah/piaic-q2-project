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
      {filteredData.map((product: IProduct, index: number) => (
        <div key={index} className="grid grid-cols-3">
          <Card>
            <h1>{product.title}</h1>
            <p>{product.type}</p>
            <p>{product.price}</p>
            <p>{product.category.name}</p>
            <Image
              src={product.urlImage}
              alt={product.title}
              width={100}
              height={100}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Page;

// Optional metadata export
export const metadata = {
  title: "Kids Products",
  description: "Browse kids category products.",
};
