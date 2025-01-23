"use client";

import { client } from "@/sanity/lib/client";
import { IProduct } from "@/lib/getData";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

async function getProductData(slug: string): Promise<IProduct | null> {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    type,
    price,
    category->{name},
    image,
    "urlImage": image.asset->url,
    description
  }`;

  const product = await client.fetch(query, { slug });
  return product;
}

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductData(params.slug);
      setProduct(data);
      setIsLoading(false);
    };
    fetchProduct();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={product.urlImage}
                  alt={product.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col lg:py-6">
              <div className="flex-grow">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm font-medium mb-4">
                  <span className="text-gray-500">Products</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-500">{product.category.name}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900">{product.title}</span>
                </nav>

                {/* Title and Type */}
                <div className="mb-8">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {product.type}
                  </p>
                </div>

                {/* Price */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">Price</span>
                    <span className="text-3xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Product Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <span className="text-sm text-gray-500 block mb-1">Category</span>
                        <span className="font-medium text-gray-900">{product.category.name}</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <span className="text-sm text-gray-500 block mb-1">Type</span>
                        <span className="font-medium text-gray-900">{product.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {product.description && (
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Description
                      </h3>
                      <div className="prose prose-sm max-w-none text-gray-600">
                        <p>{product.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-900 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
