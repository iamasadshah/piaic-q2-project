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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
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
