// lib/getData.ts
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";

export interface IProduct {
  title: string;
  slug: string;
  type: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
}



export const getData = async (): Promise<IProduct[]> => {
  const query = `*[_type == "product"]{
    title, // We will use the title for routing
    type,
    price,
    category->{name},
    "urlImage": image.asset->url
  }`;

  const data = await client.fetch(query);
  return data;
};

