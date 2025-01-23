import { fetchBooks } from "@/lib/actions";
import { baseUrl } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const books = await fetchBooks();

  const bookUrls = books?.map((book) => {
    return {
      url: `${baseUrl}/books/${book.id}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...bookUrls,
  ];
}
