import React from "react";
import { getData, IProduct } from "@/lib/getData";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Page = async (): Promise<JSX.Element> => {
  const data = await getData();

  const filteredData = data.filter(
    (product: IProduct) => product.category.name === "Male"
  );

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Male Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our premium selection of men's fashion, crafted for sophistication and comfort.
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredData.map((product: IProduct) => (
            <div 
              key={product.slug} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Wrapper */}
              <div className="aspect-[3/4] relative overflow-hidden bg-gray-200">
                <Image
                  src={product.urlImage}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="font-semibold text-gray-900">${product.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-gray-700">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {product.type}
                  </p>
                </div>

                {/* Button */}
                <Link 
                  href={`/male/${product.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all duration-200 w-full group"
                >
                  <span className="mr-2">View Details</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
            <h3 className="text-xl text-gray-600">No products found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

export const metadata = {
  title: "Male Collection - Dine Market",
  description: "Browse our collection of male clothing and accessories",
};
