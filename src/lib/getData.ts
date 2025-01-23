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
  description?: string;  // Making it optional with ?
}



export const getData = async (): Promise<IProduct[]> => {
  const query = `*[_type == "product"]{
    title,
    "slug": slug.current, // Get the slug from slug.current
    type,
    price,
    category->{name},
    "urlImage": image.asset->url,
    description
  }`;

  const data = await client.fetch(query);
  return data;
};
