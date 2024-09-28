export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "type",
      title: "Type",
      type: "string"
    },
    {
      name: "price",
      title: "Price",
      type: "number",

    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        { type: "category" }
      ]
    }
  ]
}