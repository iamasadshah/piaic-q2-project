import { createClient } from 'next-sanity'



export const client = createClient({
  token: process.env.SANITY_ACCESS_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v2024-09-28",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
