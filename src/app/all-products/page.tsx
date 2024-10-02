import React from "react";
import { getData, IProduct } from "@/lib/getData";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const Page = async (): Promise<JSX.Element> => {
  const data = await getData();

  return (
    <div>
      <h1 className="text-center text-lg">All Products</h1>

      <div className="container">
        {data.map((product: IProduct, index: number) => (
          <Card key={index} className=" card">
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

            {/* Link to the dynamic product page */}
            <Link href={`/all-products/${product.slug}`}>
              <button className="product-button">Get Info</button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
