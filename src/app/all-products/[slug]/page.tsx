import { client } from "@/sanity/lib/client";
import { IProduct } from "@/lib/getData";
import Image from "next/image";

// Fetch data for a single product based on the slug
async function getProductData(slug: string): Promise<IProduct | null> {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    title,
    type,
    price,
    category->{name},
    image,
    "urlImage": image.asset->url
  }`;

  const product = await client.fetch(query, { slug });

  // Log the fetched product to debug any issues
  console.log("Fetched product data:", product);

  return product;
}

// The product page component
const ProductPage = async ({ params }: { params: { slug: string } }) => {
  console.log("Received slug:", params.slug); // Add logging to debug slug

  const product = await getProductData(params.slug);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.urlImage}
        alt={product.title}
        width={400}
        height={400}
        className="object-cover mb-4"
      />
      <p className="text-lg">Category: {product.category.name}</p>
      <p className="text-lg">Type: {product.type}</p>
      <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;

// Generate static paths for all products based on slug
export async function generateStaticParams() {
  const query = `*[_type == "product"]{
    "slug": slug.current
  }`;

  const products = await client.fetch(query);

  // Log to verify the products and slugs
  console.log("Generated static params:", products);

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}
