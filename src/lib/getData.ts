// lib/getData.ts
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";

export interface IProduct {
  title: string;
  type: string;
  price: number;
  category: { name: string };
  image: IImage;
  urlImage: string;
}

export async function getData(): Promise<IProduct[]> {
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
