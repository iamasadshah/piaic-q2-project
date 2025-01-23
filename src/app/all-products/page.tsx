import React from "react";
import { getData, IProduct } from "@/lib/getData";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Page = async (): Promise<JSX.Element> => {
  const data = await getData();

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product: IProduct, index: number) => (
          <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full pt-[100%]">
              <Image
                src={product.urlImage}
                alt={product.title}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{product.category.name}</p>
              <p className="text-sm text-gray-500 mb-2">{product.type}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">$ {product.price}</p>

              <Link 
                href={`/all-products/${product.slug}`}
                className="mt-auto"
              >
                <button className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors duration-200">
                  View Details
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
