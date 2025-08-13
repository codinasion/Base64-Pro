import { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://base64-pro.codinasion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""];

  const now = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => {
    const enUrl = `${baseUrl}/${route}`;

    return {
      url: enUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    };
  });

  return [...sitemapEntries];
}
