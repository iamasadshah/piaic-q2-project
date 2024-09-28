import React from "react";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";

export async function getData() {
  // Getting data from Sanity
  const res = await client.fetch(
    `*[_type=="product"]{
      title,
      type,
      price,
      category->{name},
      image,
      "urlImage": image.asset->url,
      id
    }`
  );
  return res;
}

interface IProduct {
  title: string;
  type: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
}
const page = async () => {
  const data = await getData();
  const filteredData = data.filter(
    (product: IProduct) => product.category.name === "Female"
  );

  return (
    <div>
      {filteredData.map((product: IProduct, index: number) => {
        return (
          <div key={index}>
            <h1>{product.title}</h1>
            <p>{product.type}</p>
            <p>{product.price}</p>
            <p>{product.category.name}</p>
            <img src={product.urlImage} alt={product.title} />
          </div>
        );
      })}
    </div>
  );
};

export default page;
